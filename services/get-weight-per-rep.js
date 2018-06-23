// *** Calculate user's recommended volume per exercise by 1 rep max and fitness goal *** \\

// CALCULATE IDEAL WEIGHT PER REP FOR GOAL
module.exports = function (oneRepMax, fitnessGoal, fitnessLevel) {
  let fitnessGoals = {
    strength: {
      beginner: .875,
      intermediate: .90,
      advanced: .925
    },
    endurance: {
      beginner: .675,
      intermediate: .70,
      advanced: .725
    },
    fatloss: {
      beginner: .625,
      intermediate: .65,
      advanced: .675
    },
    muscle: {
      beginner: .75,
      intermediate: .775,
      advanced: .8
    }
  };
  return oneRepMax * fitnessGoals[fitnessGoal][fitnessLevel];
};