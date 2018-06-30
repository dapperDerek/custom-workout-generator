import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import InfoForm from '../InfoForm/InfoForm';
import DisclaimerTermsOfService from '../DisclaimerTermsOfService/DisclaimerTermsOfService'
import CustomWorkout from '../CustomWorkout/CustomWorkout';


export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch id="test">
          <Route exact path="/" component={InfoForm}/>
          <Route exact path="/custom-workout" component={CustomWorkout}/>
          <Route exact path="/disclaimer-terms-of-service" component={DisclaimerTermsOfService}/>
        </Switch>
      </main>
    )
  }
}

