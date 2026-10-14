const form = document.getElementById('workoutForm');
const goalEl = document.getElementById('goal');
const bodyPartEl = document.getElementById('bodyPart');
const timeEl = document.getElementById('timeMinutes');
const output = document.getElementById('output');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const goal = goalEl.value;
  const bodyPart = bodyPartEl.value;
  const timeMinutes = Number(timeEl.value);

  if (!timeMinutes || timeMinutes < 5 || timeMinutes > 180) {
    showMessage('Please choose a time between 5 and 180 minutes.');
    return;
  }

  if (typeof generateWorkout !== 'function') {
    showMessage('generateWorkout() is not available yet — generator.js has not been added.');
    return;
  }

  let workout;
  try {
    workout = generateWorkout({ goal: goal, bodyPart: bodyPart, timeMinutes: timeMinutes });
  } catch (err) {
    showMessage('Something went wrong generating the workout: ' + err.message);
    return;
  }

  renderWorkout(workout);
});

function renderWorkout(workout) {
  const html = [];

  html.push('<div class="workout">');
  html.push('<h2>' + escapeHtml(workout.title || 'Your workout') + '</h2>');

  if (workout.estimatedTotalTime) {
    html.push('<p class="meta">≈ ' + Math.round(workout.estimatedTotalTime) + ' minutes total</p>');
  }

  if (Array.isArray(workout.warmUp) && workout.warmUp.length) {
    html.push('<h3>Warm-up</h3>');
    html.push('<ul>' + workout.warmUp.map(listItem).join('') + '</ul>');
  }

  if (Array.isArray(workout.exercises) && workout.exercises.length) {
    html.push('<h3>Main workout</h3>');
    html.push(workout.exercises.map(renderExercise).join(''));
  }

  if (Array.isArray(workout.coolDown) && workout.coolDown.length) {
    html.push('<h3>Cool-down</h3>');
    html.push('<ul>' + workout.coolDown.map(listItem).join('') + '</ul>');
  }

  html.push('</div>');
  output.innerHTML = html.join('');
}

function renderExercise(exercise) {
  const reps = exercise.reps != null ? exercise.reps : exercise.duration;
  const detail = [];

  if (exercise.sets != null && reps != null) {
    detail.push(exercise.sets + ' × ' + reps);
  } else if (reps != null) {
    detail.push(String(reps));
  }

  if (exercise.rest != null) {
    detail.push('rest ' + exercise.rest);
  }

  return (
    '<div class="exercise">' +
      '<span class="name">' + escapeHtml(exercise.name) + '</span>' +
      '<span class="detail">' + escapeHtml(detail.join(' · ')) + '</span>' +
    '</div>'
  );
}

function listItem(text) {
  return '<li>' + escapeHtml(text) + '</li>';
}

function showMessage(message) {
  output.innerHTML = '<p class="placeholder">' + escapeHtml(message) + '</p>';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
