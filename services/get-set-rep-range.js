const flatMap = require('lodash/flatMap');
const findFactors = require('../helpers/findFactors');

module.exports = function (fitnessGoal) {
  const fitnessGoals = {
    strength: [4, 10],
    endurance: [12, 24],
    fatloss: [18, 30],
    muscle: [10, 20],
  };
  let i = fitnessGoals[fitnessGoal][0];
  let j = fitnessGoals[fitnessGoal][1];
  let setRepRanges = {};

  for (i; i <= j; i++) {
    setRepRanges[i] = findFactors(i);
  }

  return flatMap(setRepRanges);
};