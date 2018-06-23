// *** Calculate user’s one rep max by bodyweight exercises to failure *** \\

module.exports = function (bodyweight, pushups, squats, chinups) {

// CALCULATE VOLUME
  let upperBodyPushVolume = bodyweight * .75;
  let upperBodyPullVolume = bodyweight * .95;
  let lowerBodyVolume = bodyweight * .80;
  let oneRepMax = {};

  oneRepMax.upperBodyPush = calculateOneRepMax(upperBodyPushVolume, pushups);
  oneRepMax.upperBodyPull = calculateOneRepMax(upperBodyPullVolume, chinups);
  oneRepMax.lowerBody = calculateOneRepMax(lowerBodyVolume, squats);
  oneRepMax.secondaryUpperBodyPush = calculateOneRepMax(Math.floor(upperBodyPushVolume / 2), pushups);
  oneRepMax.secondaryUpperBodyPull = calculateOneRepMax(Math.floor(upperBodyPullVolume / 2), chinups);
  oneRepMax.secondaryLowerBody = calculateOneRepMax(Math.floor(lowerBodyVolume / 2), squats);

// CALCULATE ONE REP MAX
  function calculateOneRepMax (weight, reps) {
    return weight / (1.0278 - 0.0278 * reps );
  }


  return oneRepMax;
};