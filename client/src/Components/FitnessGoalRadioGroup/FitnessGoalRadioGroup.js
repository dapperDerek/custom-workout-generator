import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class FitnessGoalRadioGroup extends React.Component {

  handleChange = event => {
    this.props.onUpdateFitnessGoal(event.target.value);
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What's your current fitness goal?</FormLabel>
          <RadioGroup
            aria-label="fitness-goal"
            name="fitness-goal"
            className={classes.group}
            value={this.props.fitnessGoal}
            onChange={this.handleChange}
          >
            <FormControlLabel value="muscle" control={<Radio/>} label="Build Muscle"/>
            <FormControlLabel value="fatloss" control={<Radio/>} label="Lose Fat"/>
            <FormControlLabel value="strength" control={<Radio/>} label="Increase Strength"/>
            <FormControlLabel value="endurance" control={<Radio/>} label="Increase Endurance"/>
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

FitnessGoalRadioGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FitnessGoalRadioGroup);
