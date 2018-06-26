export const UPDATE_WEIGHT = 'users:updateWeight';
export const UPDATE_ONE_REP_MAX = 'users:updateOneRepMax';
export const UPDATE_FITNESS_LEVEL = 'users:updateFitnessLevel';
export const UPDATE_FITNESS_GOAL = 'users:updateFitnessGoat';
export const UPDATE_SPLIT_FREQUENCY = 'users:updateSplitFrequency';



export function updateWeight(weight) {
  return {
    type: UPDATE_WEIGHT,
    payload: {
      weight: weight
    }
  }
}

export function updateOneRepMax(oneRepMax) {
  return {
    type: UPDATE_ONE_REP_MAX,
    payload: {
      oneRepMax: oneRepMax
    }
  }
}

export function updateFitnessLevel(fitnessLevel) {
  return {
    type: UPDATE_FITNESS_LEVEL,
    payload: {
      fitnessLevel: fitnessLevel
    }
  }
}

export function updateFitnessGoal(fitnessGoal) {
  return {
    type: UPDATE_FITNESS_GOAL,
    payload: {
      fitnessGoal: fitnessGoal
    }
  }
}

export function updateSplitFrequency(splitFrequency) {
  return {
    type: UPDATE_SPLIT_FREQUENCY,
    payload: {
      splitFrequency: splitFrequency
    }
  }
}