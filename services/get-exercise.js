const sample = require('lodash/sample');
const filter = require('lodash/filter');
const includes = require('lodash/includes');
const exercises = require('../data/exercises');


module.exports = function (muscle, type) {
  let exercisesByMuscleAndType = filter(exercises, e => {
    return (includes(e.muscles, muscle) && e.type === type);
  });

  return sample(exercisesByMuscleAndType);
};