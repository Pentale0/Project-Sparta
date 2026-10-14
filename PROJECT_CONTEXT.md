# Project Sparta — Context File

> Give this file to any AI assistant (or collaborator) at the start of a session so it understands the project without re-explaining.

## 1. What it is
Project Sparta is a workout generator. The user tells it three things, and it returns a workout tailored to them:

1. **Need / goal** — what they want out of the session (e.g. strength, muscle growth, fat loss, endurance, mobility, general fitness)
2. **Body part** — what to target (e.g. chest, back, legs, shoulders, arms, core, full body)
3. **Time** — how long they have (e.g. 15, 30, 45, 60, 90, 120 minutes, or any custom value up to 180)

**Output:** a structured workout (warm-up, main exercises with sets/reps/rest, optional cool-down) that fits inside the time given.

## 2. Core user flow
1. User picks a goal.
2. User picks a body part (or full body).
3. User picks available time.
4. App generates a workout.
5. User can view it, regenerate it, or swap an exercise.

## 3. Inputs and outputs

**Inputs**
| Input | Example values |
|---|---|
| goal | strength, hypertrophy, fat loss, endurance, mobility |
| body_part | chest, back, legs, shoulders, arms, core, full body |
| time_minutes | 15, 30, 45, 60, 75, 90, 120 (or custom, up to 180) |

**Output (workout)**
- Title
- Warm-up (short)
- Main exercises: name, sets, reps (or duration), rest
- Cool-down / stretch (short)
- Estimated total time

## 4. Generation logic (draft)
- Keep a library of exercises, each tagged with: body part, equipment, difficulty, type (compound / isolation / cardio / mobility).
- Filter exercises by the chosen body part.
- Set sets/reps/rest from the goal (e.g. strength = fewer reps, longer rest; endurance = more reps, shorter rest).
- Fit the number of exercises to the time: reserve a few minutes for warm-up and cool-down, then fill the rest with exercises (each ≈ sets × (work time + rest)).
- Add some randomness so regenerating gives a different workout.

## 5. Suggested data shape
```json
{
  "name": "Push-up",
  "body_part": ["chest", "arms"],
  "type": "compound",
  "equipment": "none",
  "difficulty": "beginner"
}
```

## 6. Tech stack
Not decided yet. Builder is a beginner in web development, so a simple starting point is:
- HTML + CSS + vanilla JavaScript, exercise library as a JS/JSON file
- No backend needed at first

Later options: React, a backend/API, user accounts, saved workouts.

## 7. Scope
**MVP (build first)**
- Three selectors (goal, body part, time)
- A "Generate" button
- Workout displayed on the page
- Exercise library of ~30–50 exercises

**Later ideas**
- Equipment filter (none / dumbbells / gym)
- Difficulty level
- Save or favorite workouts
- Workout timer
- Progress tracking

## 8. Constraints and preferences
- Keep code simple and readable; explain non-obvious parts, since the builder is learning.
- Build in small steps rather than one giant file.
- Prefer working, testable pieces over complex architecture.

## 9. Open questions
- Web app, mobile app, or both?
- Equipment: assume none, or let the user choose?
- Should it handle injuries or limitations?
- Where will the exercise library come from (written by hand or an existing dataset)?

## 10. Safety note
Workouts are general fitness suggestions, not medical advice. The app should remind users to warm up and stop if something hurts.
