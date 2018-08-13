const sample = require('lodash/sample');
const filter = require('lodash/filter');
const keys = require('lodash/keys');
const pickBy = require('lodash/pickBy');
const includes = require('lodash/includes');
const exercises = require('../data/exercises');
const fitnessGoalsMap = require('../data/fitness-goals-map');


module.exports = function(muscle, fitnessGoal, equipment) {
  let equipmentArray = keys(pickBy(equipment));
  // Add 'None' to equipment list to include bodyweight exercises
  if (!equipmentArray.includes('None')) {
    equipmentArray.push('None');
  }

  let exercisesByMuscleAndType;
  // Ignore equipment if 'All' is chosen by user
  if (includes(equipmentArray, 'All')) {
    exercisesByMuscleAndType = filter(exercises, e => {
      return (
        includes(e.muscles, muscle) &&
        includes(fitnessGoalsMap[fitnessGoal]['exerciseCategories'], e.category)
      )
    });
  } else {
    exercisesByMuscleAndType = filter(exercises, e => {
      return (
        includes(e.muscles, muscle) &&
        includes(fitnessGoalsMap[fitnessGoal]['exerciseCategories'], e.category) &&
        equipmentArray.some((val) => includes(e.equipment, val))
      )
    });
  }

  return sample(exercisesByMuscleAndType);
};
