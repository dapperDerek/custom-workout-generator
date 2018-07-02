const forEach = require('lodash/forEach');
const sample = require('lodash/sample');
const getSetRepRange = require('./get-set-rep-range');
const getExercise = require('./get-exercise');
const workoutSplits = require('../data/workout-splits');


module.exports = function (userProfile) {
  // Sample workout output:
  // {
  //   dayOne: [
  //     {
  //       category: 'General',
  //       equipment: [Array],
  //       muscles: [Array],
  //       name: 'Neck Extensors Push & Resist',
  //       description:
  //         'Category: Neck\nEquipment: Bodyweight\nMuscles: Pectorals, Triceps\nDescription: https://www.google.com/search?as_q=Neck+Extensors+Push+&+Resist',
  //       sets: 9,
  //       reps: 2
  //     },
  //     ...
  //   ],
  //   ...
  // }


  let customWorkout = {};
  let setRepRange = getSetRepRange(userProfile.fitnessGoal);
  let userSplit = sample(
    workoutSplits[userProfile.splitFrequency]
  );

  forEach(userSplit.schedule, (value, key) => {
    customWorkout[key] = {};


    for (let muscle in value) {
      if (value.hasOwnProperty(muscle)) {
        customWorkout[key][muscle] = [];

        for (let i = 0; i < value[muscle]; i++) {
          let exercise = getExercise(muscle, userProfile.fitnessGoal);
          let setReps = sample(setRepRange);

          exercise.sets = setReps.sets;
          exercise.reps = setReps.reps;

          customWorkout[key][muscle].push(exercise);
        }
      }
    }
  });

  return customWorkout;
};