import {
  UPDATE_WEIGHT,
  UPDATE_ONE_REP_MAX,
  UPDATE_FITNESS_LEVEL,
  UPDATE_FITNESS_GOAL,
  UPDATE_SPLIT_FREQUENCY,
  UPDATE_EQUIPMENT
} from "../actions/user-actions";
import mapValues from 'lodash/mapValues';


const userInitialState = {
  weight: 0,
  oneRepMax: 0,
  fitnessLevel: 'beginner',
  fitnessGoal: 'fatloss',
  splitFrequency: 'three day',
  equipment: {
    "All": true,
    "Bench": false,
    "Dumbbell": false,
    "Barbell": false,
    "Smith Machine": false,
    "Cable": false,
    "Pull Up Bar": false,
    "Medicine Ball": false,
    "Exercise Ball": false,
    "Elastic Cord": false,
    "None": false
  }
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
    case UPDATE_EQUIPMENT:
      let equipmentFilter;

      if (payload.equipment === 'None' || payload.equipment === 'All') {
        equipmentFilter = mapValues(state.equipment, () => false);
      } else {
        equipmentFilter = {
          ...state.equipment,
          'All': false,
          'None': false
        }
      }

      return {
        ...state,
        equipment: {
          ...equipmentFilter,
          [payload.equipment]: payload.bool
        }
      };
    default:
      return state;
  }
}
