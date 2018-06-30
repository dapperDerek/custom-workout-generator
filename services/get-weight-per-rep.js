const fitnessGoalsMap = require('../data/fitness-goals-map');


// CALCULATE IDEAL WEIGHT PER REP FOR GOAL
module.exports = function (oneRepMax, fitnessGoal, fitnessLevel) {
  return oneRepMax * fitnessGoalsMap[fitnessGoal]["weightRatio"][fitnessLevel];
};