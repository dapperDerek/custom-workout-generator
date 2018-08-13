import {
  UPDATE_WORKOUT,
  REMOVE_EXERCISE,
  REPLACE_EXERCISE
} from "../actions/workout-actions";


export default function workoutReducer(state = {}, {type, payload}) {
  switch (type) {
    case UPDATE_WORKOUT:
      return payload.workout;
    case REMOVE_EXERCISE:
      return {
        ...state,
        [payload.exerciseDay]: {
          ...state[payload.exerciseDay],
          [payload.muscleGroup]: [...state[payload.exerciseDay][payload.muscleGroup]].filter((x, index) => {
            return index !== parseInt(payload.exerciseIndex, 10)
          })
        }
      };
    case REPLACE_EXERCISE:
      return {
        ...state,
        [payload.exerciseDay]: {
          ...state[payload.exerciseDay],
          [payload.muscleGroup]: {
            ...state[payload.exerciseDay][payload.muscleGroup],
            [payload.exerciseIndex]: payload.newExercise
          }
        }
      };
    default:
      return state;
  }
}