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

class FitnessLevelRadioGroup extends React.Component {
  state = {
    fitnessLevel: 'intermediate'
  };

  handleChange = event => {
    this.setState({fitnessLevel: event.target.value});
    this.props.action(event.target.value);
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What's your current fitness level?</FormLabel>
          <RadioGroup
            aria-label="fitness-level"
            name="fitness-level"
            className={classes.group}
            value={this.state.fitnessLevel}
            onChange={this.handleChange}
          >
            <FormControlLabel value="beginner" control={<Radio/>} label="Beginner"/>
            <FormControlLabel value="intermediate" control={<Radio/>} label="Intermediate"/>
            <FormControlLabel value="advanced" control={<Radio/>} label="Advanced"/>
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

FitnessLevelRadioGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FitnessLevelRadioGroup);
