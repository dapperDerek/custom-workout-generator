module.exports = function (customWorkout) {
  let totalWorkoutTime = 0;
  let timeUnderTension;
  let restTime;

  for(let day in customWorkout) {
    if(day.hasOwnProperty('sets') && day.hasOwnProperty('reps')) {
      timeUnderTension = day.sets * day.reps * 4;
    }
    if(day.hasOwnProperty('rest')) {
      restTime = day.sets * day.reps * day.rest;
    }
    totalWorkoutTime += timeUnderTension + restTime;
  }

  return totalWorkoutTime;
};