import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InfoForm from './Components/InfoForm/InfoForm';
import InfoFormPremium from './Components/InfoFormPremium/InfoFormPremium';
import CustomWorkout from './Components/CustomWorkout/CustomWorkout';
import CustomWorkoutPremium from './Components/CustomWorkoutPremium/CustomWorkoutPremium';



export default (
  <Switch>
    <Route exact path="/" component={InfoForm} />
    {/*<Route path="/premium" component={InfoFormPremium} />*/}
    {/*<Route path="/custom-workout" component={CustomWorkout} />*/}
    {/*<Route path="/custom-workout-premium" component={CustomWorkoutPremium} />*/}
  </Switch>
);

