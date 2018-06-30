const flatMap = require('lodash/flatMap');
const findFactors = require('../helpers/findFactors');
const fitnessGoalsMap = require('../data/fitness-goals-map');


module.exports = function (fitnessGoal) {
  let i = fitnessGoalsMap[fitnessGoal]['setRepRange'][0];
  let j = fitnessGoalsMap[fitnessGoal]['setRepRange'][1];
  let setRepRanges = {};

  for (i; i <= j; i++) {
    setRepRanges[i] = findFactors(i);
  }

  return flatMap(setRepRanges);
};