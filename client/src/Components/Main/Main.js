import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import InfoForm from '../InfoForm/InfoForm';
import DisclaimerTermsOfService from '../DisclaimerTermsOfService/DisclaimerTermsOfService'
import CustomWorkout from '../CustomWorkout/CustomWorkout';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: {}
    };
    this.workoutHandler = this.workoutHandler.bind(this);
  }

  // This method will be sent to the child component
  workoutHandler(workout) {
    this.setState({
      workout: workout
    });
  }


  render() {
    // const extraProps = this.state.workout;

    return (
      <Switch>
        <Route exact path="/" component={InfoForm}/>
        <Route exact path="/custom-workout" component={CustomWorkout}/>
        <Route exact path="/disclaimer-terms-of-service" component={DisclaimerTermsOfService}/>
      </Switch>
    )
  }
}

