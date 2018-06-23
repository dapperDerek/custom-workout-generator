const forEach = require('lodash/forEach');
const sample = require('lodash/sample');
const getSetRepRange = require('./get-set-rep-range');
const getExercise = require('./get-exercise');
const workoutSplits = require('../data/workout-splits');
const getWeightPerRep = require('./get-weight-per-rep');
const getOneRepMax = require('./get-one-rep-max');


module.exports = function (userProfile) {
  // Sample workout output:
  // {
  //   "dayOne": [
  //    {
  //     "name": "Overhead Throw Medicine Ball",
  //     "type": "Strength",
  //     "muscles": ["Pectorals", "Deltoids", "Lats", "Abs"],
  //     "equipment": [],
  //     "sets": 8,
  //     "reps": 2,
  //     "weight": 12
  //    }, {
  //     "name": "Round Arm Punches Bent Over ‐ Elastic Cord",
  //     "type": "Strength",
  //     "muscles": ["Pectorals", "Lats", "Deltoids", "Biceps", "Triceps", "Abs"],
  //     "equipment": [],
  //     "sets": 3,
  //     "reps": 4
  //     "weight": 50
  //    }, {
  //     "name": "Roll Out Exercise Ball",
  //     "type": "Strength",
  //     "muscles": ["Abs", "Lower Back"],
  //     "equipment": [],
  //     "sets": 5,
  //     "reps": 2
  //     "weight": 128
  // }

  let customWorkout = {};
  let weightPerReps = {};
  let setRepRange = getSetRepRange(userProfile.fitnessGoal);
  let oneRepMax = getOneRepMax(userProfile.bodyweight, userProfile.pushups, userProfile.squats, userProfile.chinups);
  let userSplit = sample(
    workoutSplits[userProfile.splitPreference]
  );

  forEach(oneRepMax, function (val, key) {
    weightPerReps[key] = getWeightPerRep(val, 'Build Muscle', 'beginner');
  });

  forEach(userSplit.schedule, (value, key) => {
    customWorkout[key] = [];

    for (let v in value) {
      if (value.hasOwnProperty(v)) {
        let exercise = getExercise(value[v], 'Strength');
        let setReps = sample(setRepRange);

        exercise.sets = setReps.sets;
        exercise.reps = setReps.reps;

        customWorkout[key].push(exercise);
      }
    }
  });

  return customWorkout;
};