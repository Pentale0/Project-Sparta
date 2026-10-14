// ============================================================
// generateWorkout.js  (Person B - logic)
// ------------------------------------------------------------
// Needs EXERCISE_LIBRARY (defined in exercises.js) to be loaded first.
//
// Public function:
//   generateWorkout({ goal, bodyPart, timeMinutes })
//
// Returns:
//   {
//     title:        "Strength Chest Workout",
//     warmUp:       [ { name, sets, reps, duration, rest } ],
//     main:         [ { name, sets, reps, duration, rest } ],
//     coolDown:     [ { name, sets, reps, duration, rest } ],
//     totalMinutes: 30
//   }
//
// Note on the shape of every exercise item:
//   - reps-based  -> reps is a number, duration is null
//   - time-based  -> duration is seconds, reps is null
//   - rest is always in seconds
// Every item (even warm-up/cool-down) uses the same shape so
// Person A can render them all with one loop.
// ============================================================

// ------------------------------------------------------------
// 1. Goal recipes.
// Each goal changes sets, reps, rest, and which exercise
// "type" we prefer to fill the workout with.
// ------------------------------------------------------------
const GOAL_PROFILES = {
  strength: {
    sets: 4,
    reps: 5,
    rest: 150,
    prefer: ["compound"],
  },
  hypertrophy: {
    sets: 4,
    reps: 10,
    rest: 75,
    prefer: ["compound", "isolation"],
  },
  "fat loss": {
    sets: 3,
    reps: 14,
    rest: 40,
    prefer: ["compound", "cardio"],
  },
  endurance: {
    sets: 3,
    reps: 18,
    rest: 30,
    prefer: ["cardio", "compound"],
  },
  mobility: {
    sets: 2,
    reps: null,
    duration: 45,
    rest: 20,
    prefer: ["mobility"],
  },
  "general fitness": {
    sets: 3,
    reps: 12,
    rest: 60,
    prefer: ["compound", "isolation"],
  },
};

// The app may receive slightly different goal words.
// Map those to the keys above so the function never crashes.
const GOAL_ALIASES = {
  "muscle growth": "hypertrophy",
  muscle: "hypertrophy",
  "build muscle": "hypertrophy",
  "weight loss": "fat loss",
  "lose weight": "fat loss",
  cardio: "endurance",
  stretch: "mobility",
  stretching: "mobility",
  "get fit": "general fitness",
  general: "general fitness",
};

const DEFAULT_GOAL = "general fitness";

// ------------------------------------------------------------
// 2. Small helpers
// ------------------------------------------------------------

// Lower-case + trim so "Fat Loss " matches "fat loss".
function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

// Fisher-Yates shuffle. Returns a NEW array so we never
// mutate the original library / candidates.
function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Capitalize every word, so "full body" -> "Full Body".
function capitalizeWords(text) {
  return String(text || "")
    .split(" ")
    .map(capitalize)
    .join(" ");
}

// Turn a raw library exercise into a "prescribed" exercise
// (with sets / reps / duration / rest) for a given goal.
function prescribe(exercise, profile) {
  const isTimeBased = profile.reps === null;

  return {
    name: exercise.name,
    sets: profile.sets,
    reps: isTimeBased ? null : profile.reps,
    duration: isTimeBased ? profile.duration : null,
    rest: profile.rest,
  };
}

// How many seconds does one prescribed exercise take?
// reps-based:  work = reps * 3 seconds per rep
// time-based:  work = the duration itself
function exerciseSeconds(item) {
  const work = item.duration !== null ? item.duration : item.reps * 3;
  return item.sets * (work + item.rest);
}

// ------------------------------------------------------------
// 3. Warm-up and cool-down
// We reuse mobility + easy cardio exercises from the library.
// ------------------------------------------------------------

// Warm-up moves: easy cardio first (dynamic), then mobility.
// Note: warm-up/cool-down are GENERAL, so they draw from the whole
// library (not just the chosen body part) - that guarantees they are
// never empty, even for a body part with no stretches of its own.
function buildWarmUp(count) {
  const mobility = EXERCISE_LIBRARY.filter((e) => e.type === "mobility");
  const cardio = EXERCISE_LIBRARY.filter((e) => e.type === "cardio");
  const chosen = shuffle(cardio).concat(shuffle(mobility)).slice(0, count);

  return chosen.map((e) => ({
    name: e.name,
    sets: 1,
    reps: null,
    duration: 45, // seconds per warm-up move
    rest: 0,
  }));
}

// Cool-down moves: mobility only, from the whole library.
function buildCoolDown(count) {
  const pool = EXERCISE_LIBRARY.filter((e) => e.type === "mobility");
  const chosen = shuffle(pool).slice(0, count);

  return chosen.map((e) => ({
    name: e.name,
    sets: 1,
    reps: null,
    duration: 45,
    rest: 0,
  }));
}

// Does an exercise belong to the chosen body part?
// "full body" means "no filter".
function matchesBodyPart(exercise, bodyPart) {
  if (normalize(bodyPart) === "full body") return true;
  return exercise.body_part.some((part) => normalize(part) === normalize(bodyPart));
}

// ------------------------------------------------------------
// 4. The main function
// ------------------------------------------------------------
function generateWorkout({ goal, bodyPart, timeMinutes } = {}) {
  // --- Normalize inputs, with safe fallbacks ---
  const wantedGoal = normalize(goal);
  const goalKey =
    GOAL_PROFILES[wantedGoal] !== undefined
      ? wantedGoal
      : GOAL_ALIASES[wantedGoal] || DEFAULT_GOAL;
  const profile = GOAL_PROFILES[goalKey];

  const minutes = Number(timeMinutes) > 0 ? Number(timeMinutes) : 30;

  // Treat a missing/blank body part as "full body".
  const wantedPart = normalize(bodyPart) || "full body";

  const goalLabel = capitalizeWords(goalKey);
  const partLabel = capitalizeWords(wantedPart);

  // --- Reserve time for warm-up + cool-down ---
  const isShort = minutes <= 20;
  const warmUpCount = isShort ? 2 : 3;
  const coolDownCount = isShort ? 1 : 2;

  const warmUp = buildWarmUp(warmUpCount);
  const coolDown = buildCoolDown(coolDownCount);

  const warmUpSeconds = warmUp.reduce((sum, m) => sum + m.duration, 0);
  const coolDownSeconds = coolDown.reduce((sum, m) => sum + m.duration, 0);

  let remaining = minutes * 60 - warmUpSeconds - coolDownSeconds;

  // --- Build the pool of candidate exercises ---
  // First keep only the body part the user asked for...
  const bodyPool = EXERCISE_LIBRARY.filter((e) => matchesBodyPart(e, wantedPart));

  // ...then keep only the exercise "types" this goal wants
  // (e.g. a mobility goal should stay stretches, not heavy lifts).
  // If that leaves nothing, fall back to the whole body pool.
  let candidates = bodyPool.filter((e) => profile.prefer.includes(e.type));
  if (candidates.length === 0) candidates = bodyPool;
  if (candidates.length === 0) candidates = EXERCISE_LIBRARY.slice();

  // Shuffle for variety between regenerations.
  candidates = shuffle(candidates);

  // --- Fill the main section until we run out of time ---
  const main = [];
  // Allow more exercises in longer sessions, but never a huge list.
  const maxExercises = Math.min(12, Math.max(3, Math.round(minutes / 5)));

  for (const exercise of candidates) {
    if (main.length >= maxExercises) break;

    const item = prescribe(exercise, profile);
    const seconds = exerciseSeconds(item);

    // Add it only if it fits in the remaining time.
    // (For a very short workout, allow the first one regardless.)
    if (seconds <= remaining || main.length === 0) {
      main.push(item);
      remaining -= seconds;
    }

    if (remaining <= 0) break;
  }

  // --- Estimated total time ---
  const mainSeconds = main.reduce((sum, m) => sum + exerciseSeconds(m), 0);
  const totalMinutes = Math.round(
    (warmUpSeconds + mainSeconds + coolDownSeconds) / 60
  );

  return {
    title: `${goalLabel} ${partLabel} Workout`,
    warmUp: warmUp,
    main: main,
    coolDown: coolDown,
    totalMinutes: totalMinutes,
  };
}

// ------------------------------------------------------------
// 5. Make the function available to the page.
// Person A's app.js can call window.generateWorkout(...).
// Also exported for Node so we can test it from the terminal.
// ------------------------------------------------------------
if (typeof window !== "undefined") {
  window.generateWorkout = generateWorkout;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { generateWorkout };
}
