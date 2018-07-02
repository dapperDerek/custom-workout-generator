export const UPDATE_WORKOUT = 'workout:updateWorkout';
export const REMOVE_EXERCISE = 'workout:removeExercise';
export const REPLACE_EXERCISE = 'workout:getNewExercise';



export function updateWorkout(workout) {
  return {
    type: UPDATE_WORKOUT,
    payload: {
      workout: workout
    }
  }
}

export function removeExercise(exerciseDay, muscleGroup, exerciseIndex) {
  return {
    type: REMOVE_EXERCISE,
    payload: {
      exerciseDay,
      muscleGroup,
      exerciseIndex
    }
  }
}

export function replaceExercise(exerciseDay, muscleGroup, exerciseIndex, newExercise) {
  return {
    type: REPLACE_EXERCISE,
    payload: {
      exerciseDay,
      muscleGroup,
      exerciseIndex,
      newExercise
    }
  }
}