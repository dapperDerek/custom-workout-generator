export const UPDATE_WORKOUT = 'workout:updateWorkout';
export const REMOVE_EXERCISE = 'workout:removeExercise';
export const UPDATE_EXERCISE = 'workout:updateExercise';



export function updateWorkout(workout) {
  return {
    type: UPDATE_WORKOUT,
    payload: {
      workout: workout
    }
  }
}

export function removeExercise(exercise) {
  return {
    type: REMOVE_EXERCISE,
    payload: {
      workout: { exercise }
    }
  }
}

export function updateExercise(exercise) {
  return {
    type: UPDATE_EXERCISE,
    payload: {
      workout: { exercise }
    }
  }
}