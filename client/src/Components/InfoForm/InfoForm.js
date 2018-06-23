import React, {Component} from 'react';
import './InfoForm.css'
import FitnessGoalRadioGroup from './FitnessGoalRadioGroup/FitnessGoalRadioGroup'
import FitnessLevelRadioGroup from './FitnessLevelRadioGroup/FitnessLevelRadioGroup'
import SplitFrequencyRadioGroup from './SplitFrequencyRadioGroup/SplitFrequencyRadioGroup'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class InfoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
      fitnessLevel: '',
      fitnessGoal: '',
      splitFrequency: ''
    };
    this.fitnessLevelHandler = this.fitnessLevelHandler.bind(this);
    this.fitnessGoalHandler = this.fitnessGoalHandler.bind(this);
    this.splitFrequencyHandler = this.splitFrequencyHandler.bind(this);
  }

  // This method will be sent to the child component
  fitnessLevelHandler(fitnessLevel) {
    this.setState({
      fitnessLevel: fitnessLevel
    });
  }

  fitnessGoalHandler(fitnessGoal) {
    this.setState({
      fitnessGoal: fitnessGoal
    });
  }

  splitFrequencyHandler(splitFrequency) {
    this.setState({
      splitFrequency: splitFrequency
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getCustomWorkout();
  }

  getCustomWorkout() {
    fetch('/api/build-custom-workout', this.state)
      .then(res => console.log(res.json()))
  }


  render() {
    const {classes} = this.props;
    const fireRedirect = this.state.fireRedirect;

    return (
      <form onSubmit={this.handleSubmit}>

        <FitnessLevelRadioGroup action={this.fitnessLevelHandler}/>
        <FitnessGoalRadioGroup action={this.fitnessGoalHandler}/>
        <SplitFrequencyRadioGroup action={this.splitFrequencyHandler}/>

        <Button type="submit" value="Submit" variant="contained" color="primary" className={classes.button}>
          Get your custom workout!
        </Button>
      </form>
    );
  }
}

InfoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoForm);