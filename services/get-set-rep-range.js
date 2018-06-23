const flatMap = require('lodash/flatMap');

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

  function findFactors(num) {
    let half = Math.floor(num / 2);
    let solution = [];
    let o;
    let i;
    let j;

    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
      if (num % i === 0) {
        o = {};
        o.sets = i;
        o.reps = num / i;

        solution.push(o);
      }
    }
    return solution;
  }

  return flatMap(setRepRanges);
};