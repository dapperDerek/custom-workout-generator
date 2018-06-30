const sample = require('lodash/sample');
const filter = require('lodash/filter');
const includes = require('lodash/includes');
const exercises = require('../data/exercises');
const fitnessGoalsMap = require('../data/fitness-goals-map');


module.exports = function (muscle, fitnessGoal) {
  let exercisesByMuscleAndType = filter(exercises, e => {
    return (includes(e.muscles, muscle) && includes(fitnessGoalsMap[fitnessGoal]['exerciseCategories'], e.category));
  });

  return sample(exercisesByMuscleAndType);
};