const EXERCISE_LIBRARY = [
  {
    "name": "Push-up",
    "body_part": ["chest", "arms"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Diamond Push-up",
    "body_part": ["chest", "arms"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "intermediate"
  },
  {
    "name": "Dumbbell Bench Press",
    "body_part": ["chest", "arms"],
    "type": "compound",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Incline Dumbbell Press",
    "body_part": ["chest", "shoulders"],
    "type": "compound",
    "equipment": "dumbbells",
    "difficulty": "intermediate"
  },
  {
    "name": "Dumbbell Fly",
    "body_part": ["chest"],
    "type": "isolation",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Barbell Bench Press",
    "body_part": ["chest", "arms"],
    "type": "compound",
    "equipment": "gym",
    "difficulty": "intermediate"
  },
  {
    "name": "Cable Crossover",
    "body_part": ["chest"],
    "type": "isolation",
    "equipment": "gym",
    "difficulty": "intermediate"
  },
  {
    "name": "Chest Dip",
    "body_part": ["chest", "arms"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "intermediate"
  },

  {
    "name": "Pull-up",
    "body_part": ["back", "arms"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "intermediate"
  },
  {
    "name": "Inverted Row",
    "body_part": ["back", "arms"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "intermediate"
  },
  {
    "name": "Dumbbell Row",
    "body_part": ["back", "arms"],
    "type": "compound",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Lat Pulldown",
    "body_part": ["back", "arms"],
    "type": "compound",
    "equipment": "gym",
    "difficulty": "beginner"
  },
  {
    "name": "Seated Cable Row",
    "body_part": ["back", "arms"],
    "type": "compound",
    "equipment": "gym",
    "difficulty": "beginner"
  },
  {
    "name": "Barbell Bent-over Row",
    "body_part": ["back", "arms"],
    "type": "compound",
    "equipment": "gym",
    "difficulty": "intermediate"
  },
  {
    "name": "Superman",
    "body_part": ["back", "core"],
    "type": "isolation",
    "equipment": "none",
    "difficulty": "beginner"
  },

  {
    "name": "Bodyweight Squat",
    "body_part": ["legs"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Goblet Squat",
    "body_part": ["legs"],
    "type": "compound",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Barbell Back Squat",
    "body_part": ["legs"],
    "type": "compound",
    "equipment": "gym",
    "difficulty": "intermediate"
  },
  {
    "name": "Walking Lunge",
    "body_part": ["legs"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Bulgarian Split Squat",
    "body_part": ["legs"],
    "type": "compound",
    "equipment": "dumbbells",
    "difficulty": "intermediate"
  },
  {
    "name": "Romanian Deadlift",
    "body_part": ["legs", "back"],
    "type": "compound",
    "equipment": "dumbbells",
    "difficulty": "intermediate"
  },
  {
    "name": "Leg Press",
    "body_part": ["legs"],
    "type": "compound",
    "equipment": "gym",
    "difficulty": "beginner"
  },
  {
    "name": "Glute Bridge",
    "body_part": ["legs", "core"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Calf Raise",
    "body_part": ["legs"],
    "type": "isolation",
    "equipment": "none",
    "difficulty": "beginner"
  },

  {
    "name": "Dumbbell Overhead Press",
    "body_part": ["shoulders", "arms"],
    "type": "compound",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Barbell Overhead Press",
    "body_part": ["shoulders", "arms"],
    "type": "compound",
    "equipment": "gym",
    "difficulty": "intermediate"
  },
  {
    "name": "Pike Push-up",
    "body_part": ["shoulders", "arms"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "intermediate"
  },
  {
    "name": "Lateral Raise",
    "body_part": ["shoulders"],
    "type": "isolation",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Front Raise",
    "body_part": ["shoulders"],
    "type": "isolation",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Face Pull",
    "body_part": ["shoulders", "back"],
    "type": "isolation",
    "equipment": "gym",
    "difficulty": "beginner"
  },

  {
    "name": "Bicep Curl",
    "body_part": ["arms"],
    "type": "isolation",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Hammer Curl",
    "body_part": ["arms"],
    "type": "isolation",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Cable Curl",
    "body_part": ["arms"],
    "type": "isolation",
    "equipment": "gym",
    "difficulty": "beginner"
  },
  {
    "name": "Triceps Dip",
    "body_part": ["arms", "chest"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Triceps Extension",
    "body_part": ["arms"],
    "type": "isolation",
    "equipment": "dumbbells",
    "difficulty": "beginner"
  },
  {
    "name": "Chin-up",
    "body_part": ["arms", "back"],
    "type": "compound",
    "equipment": "none",
    "difficulty": "intermediate"
  },

  {
    "name": "Plank",
    "body_part": ["core"],
    "type": "isolation",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Crunch",
    "body_part": ["core"],
    "type": "isolation",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Russian Twist",
    "body_part": ["core"],
    "type": "isolation",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Dead Bug",
    "body_part": ["core"],
    "type": "isolation",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Hanging Leg Raise",
    "body_part": ["core"],
    "type": "isolation",
    "equipment": "none",
    "difficulty": "intermediate"
  },

  {
    "name": "Jumping Jack",
    "body_part": ["full body"],
    "type": "cardio",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "High Knees",
    "body_part": ["full body"],
    "type": "cardio",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Mountain Climber",
    "body_part": ["core", "full body"],
    "type": "cardio",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Burpee",
    "body_part": ["full body"],
    "type": "cardio",
    "equipment": "none",
    "difficulty": "intermediate"
  },
  {
    "name": "Kettlebell Swing",
    "body_part": ["full body", "legs"],
    "type": "cardio",
    "equipment": "dumbbells",
    "difficulty": "intermediate"
  },
  {
    "name": "Rowing Machine",
    "body_part": ["full body", "back"],
    "type": "cardio",
    "equipment": "gym",
    "difficulty": "beginner"
  },

  {
    "name": "Cat-Cow",
    "body_part": ["back", "core"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "World's Greatest Stretch",
    "body_part": ["full body"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Hip Flexor Stretch",
    "body_part": ["legs"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Shoulder Circles",
    "body_part": ["shoulders"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Doorway Chest Stretch",
    "body_part": ["chest"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Standing Chest Stretch",
    "body_part": ["chest"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Child's Pose",
    "body_part": ["back", "core"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Cobra Stretch",
    "body_part": ["core", "back"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Cross-Body Shoulder Stretch",
    "body_part": ["shoulders", "arms"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Triceps Stretch",
    "body_part": ["arms"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Hamstring Stretch",
    "body_part": ["legs"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Standing Quad Stretch",
    "body_part": ["legs"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  },
  {
    "name": "Downward Dog",
    "body_part": ["full body", "legs", "shoulders"],
    "type": "mobility",
    "equipment": "none",
    "difficulty": "beginner"
  }
]
;
