import {UPDATE_WEIGHT,
  UPDATE_ONE_REP_MAX,
  UPDATE_FITNESS_LEVEL,
  UPDATE_FITNESS_GOAL,
  UPDATE_SPLIT_FREQUENCY} from "../actions/user-actions";


const userInitialState = {
  weight: 0,
  oneRepMax: 0,
  fitnessLevel: 'beginner',
  fitnessGoal: 'fatloss',
  splitFrequency: 'three day'
};

export default function userReducer(state = userInitialState, {type, payload}) {
  switch (type) {
    case UPDATE_WEIGHT:
      return Object.assign({}, state, {
        weight: payload.weight
      });
    case UPDATE_ONE_REP_MAX:
      return Object.assign({}, state, {
        oneRepMax: payload.oneRepMax
      });
    case UPDATE_FITNESS_LEVEL:
      return Object.assign({}, state, {
        fitnessLevel: payload.fitnessLevel
      });
    case UPDATE_FITNESS_GOAL:
      return Object.assign({}, state, {
        fitnessGoal: payload.fitnessGoal
      });
    case UPDATE_SPLIT_FREQUENCY:
      return Object.assign({}, state, {
        splitFrequency: payload.splitFrequency
      });
    default:
      return state;
  }
}