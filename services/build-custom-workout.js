const forEach = require('lodash/forEach');
const sample = require('lodash/sample');
const getSetRepRange = require('./get-set-rep-range');
const getExercise = require('./get-exercise');
const workoutSplits = require('../data/workout-splits');


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
  //     "reps": 2
  //    }, {
  //     "name": "Round Arm Punches Bent Over ‐ Elastic Cord",
  //     "type": "Strength",
  //     "muscles": ["Pectorals", "Lats", "Deltoids", "Biceps", "Triceps", "Abs"],
  //     "equipment": [],
  //     "sets": 3,
  //     "reps": 4
  //    }, {
  //     "name": "Roll Out Exercise Ball",
  //     "type": "Strength",
  //     "muscles": ["Abs", "Lower Back"],
  //     "equipment": [],
  //     "sets": 5,
  //     "reps": 2
  // }

  console.log(userProfile);

  let customWorkout = {};
  let setRepRange = getSetRepRange(userProfile.fitnessGoal);
  let userSplit = sample(
    workoutSplits[userProfile.splitFrequency]
  );

  customWorkout.splitType = userSplit.type;
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