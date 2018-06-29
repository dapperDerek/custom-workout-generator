import {
  UPDATE_WORKOUT,
  REMOVE_EXERCISE,
  GET_NEW_EXERCISE
} from "../actions/workout-actions";


export default function workoutReducer(state = {}, {type, payload}) {
  switch (type) {
    case UPDATE_WORKOUT:
      return payload.workout;
    case REMOVE_EXERCISE:
      return {
        ...state,
        [payload.exerciseDay]: [...state[payload.exerciseDay]].filter((x, index) => index !== payload.exerciseIndex)
      };
    case GET_NEW_EXERCISE:
      return {
        ...state,
        [payload.exerciseDay]: [...state[payload.exerciseDay]][payload.exerciseIndex]
      };
    default:
      return state;
  }
}