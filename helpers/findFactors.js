// Used to determine all permutations of set/rep ranges

module.exports = function findFactors(num) {
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