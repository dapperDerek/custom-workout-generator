import React, {Component} from 'react';
import './InfoForm.css'
import FitnessGoalRadioGroup from '../FitnessGoalRadioGroup/FitnessGoalRadioGroup'
import FitnessLevelRadioGroup from '../FitnessLevelRadioGroup/FitnessLevelRadioGroup'
import SplitFrequencyRadioGroup from '../SplitFrequencyRadioGroup/SplitFrequencyRadioGroup'
import EquipmentCheckboxGroup from '../EquipmentCheckboxGroup/EquipmentCheckboxGroup'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Redirect from 'react-router-dom/Redirect'
import {connect} from "react-redux";
import {updateFitnessGoal, updateFitnessLevel, updateSplitFrequency, updateWeight, updateEquipment} from "../../actions/user-actions";
import {updateWorkout} from "../../actions/workout-actions";
import {bindActionCreators} from "redux";


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
  input: {
    display: 'none',
  },
});

class InfoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toCustomWorkout: false
    };

    this.onUpdateFitnessLevel = this.onUpdateFitnessLevel.bind(this);
    this.onUpdateFitnessGoal = this.onUpdateFitnessGoal.bind(this);
    this.onUpdateSplitFrequency = this.onUpdateSplitFrequency.bind(this);
    this.onUpdateEquipment = this.onUpdateEquipment.bind(this);
    this.onUpdateWorkout = this.onUpdateWorkout.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // These methods will be sent to the child component
  onUpdateFitnessLevel(fitnessLevel) {
    this.props.onUpdateFitnessLevel(fitnessLevel);
  }

  onUpdateFitnessGoal(fitnessGoal) {
    this.props.onUpdateFitnessGoal(fitnessGoal);
  }

  onUpdateSplitFrequency(splitFrequency) {
    this.props.onUpdateSplitFrequency(splitFrequency);
  }

  onUpdateWorkout(workout) {
    this.props.onUpdateWorkout(workout);
  }

  onUpdateEquipment(equipment, bool) {
    this.props.onUpdateEquipment(equipment, bool);
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
        user: this.props.user
      })
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState(() => ({
          toCustomWorkout: true
        }));
        this.onUpdateWorkout(data);
      });
  };


  render() {
    const {classes} = this.props;

    if (this.state.toCustomWorkout === true) {
      return <Redirect to='/custom-workout'/>
    }

    return (
      <form className={classes.root} onSubmit={this.handleSubmit} align="center">
        <FitnessLevelRadioGroup fitnessLevel={this.props.user.fitnessLevel}
                                onUpdateFitnessLevel={this.onUpdateFitnessLevel}/>
        <FitnessGoalRadioGroup fitnessGoal={this.props.user.fitnessGoal}
                               onUpdateFitnessGoal={this.onUpdateFitnessGoal}/>
        <SplitFrequencyRadioGroup splitFrequency={this.props.user.splitFrequency}
                                  onUpdateSplitFrequency={this.onUpdateSplitFrequency}/>
        <EquipmentCheckboxGroup equipment={this.props.user.equipment}
                                onUpdateEquipment={this.onUpdateEquipment}/>

        <Button type="submit" value="Submit" variant="contained" color="primary" className={classes.button}>
          Get your custom workout
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateWeight: updateWeight,
    onUpdateFitnessLevel: updateFitnessLevel,
    onUpdateFitnessGoal: updateFitnessGoal,
    onUpdateSplitFrequency: updateSplitFrequency,
    onUpdateWorkout: updateWorkout,
    onUpdateEquipment: updateEquipment
  }, dispatch)
};

InfoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InfoForm));