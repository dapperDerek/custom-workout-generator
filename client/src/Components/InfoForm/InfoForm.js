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
      fitnessLevel: 'intermediate',
      fitnessGoal: 'muscle',
      splitFrequency: 'three day'
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

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/build-custom-workout', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //serialize your JSON body
      body: JSON.stringify({
        fitnessLevel: this.state.fitnessLevel,
        fitnessGoal: this.state.fitnessGoal,
        splitFrequency: this.state.splitFrequency
      })
    })
      .then(res => console.log(res.json()))
  };


  render() {
    const {classes} = this.props;

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