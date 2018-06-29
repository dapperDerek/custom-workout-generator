export const UPDATE_WORKOUT = 'workout:updateWorkout';
export const REMOVE_EXERCISE = 'workout:removeExercise';
export const GET_NEW_EXERCISE = 'workout:getNewExercise';



export function updateWorkout(workout) {
  return {
    type: UPDATE_WORKOUT,
    payload: {
      workout: workout
    }
  }
}

export function removeExercise(exerciseDay, exerciseIndex) {
  return {
    type: REMOVE_EXERCISE,
    payload: {
      exerciseDay,
      exerciseIndex
    }
  }
}

export function getNewExercise(exerciseDay, exerciseIndex, newExercise) {
  return {
    type: GET_NEW_EXERCISE,
    payload: {
      exerciseDay,
      exerciseIndex,
      newExercise
    }
  }
}