import {
  UPDATE_WORKOUT,
  REMOVE_EXERCISE,
  UPDATE_EXERCISE
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
    case UPDATE_EXERCISE:
      return Object.assign({}, state, {
        exercise: payload.exercise
      });
    default:
      return state;
  }
}