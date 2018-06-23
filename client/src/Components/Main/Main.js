import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import InfoForm from '../InfoForm/InfoForm';
import InfoFormPremium from '../InfoFormPremium/InfoFormPremium';
import CustomWorkout from '../CustomWorkout/CustomWorkout';
import CustomWorkoutPremium from '../CustomWorkoutPremium/CustomWorkoutPremium';


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
        <Route exact path="/" render={(props) => {
          return <InfoForm {...props} action={this.workoutHandler}/>
        }}/>
        {/*<Route path="/premium" component={InfoFormPremium} />*/}
        <Route exact path="/custom-workout" render={(props) => {
          return <CustomWorkout {...props} workout={this.state.workout}/>
        }}/>
        {/*<Route path="/custom-workout-premium" component={CustomWorkoutPremium} />*/}
      </Switch>
    )
  }
}

