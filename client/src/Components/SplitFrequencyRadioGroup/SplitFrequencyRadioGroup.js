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

class SplitFrequencyRadioGroup extends React.Component {

  handleChange = event => {
    this.props.onUpdateSplitFrequency(event.target.value);
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">How often can you workout?</FormLabel>
          <RadioGroup
            aria-label="split-frequency"
            name="split-frequency"
            className={classes.group}
            value={this.props.splitFrequency}
            onChange={this.handleChange}
          >
            <FormControlLabel value="one day" control={<Radio/>} label="1 day"/>
            <FormControlLabel value="two day" control={<Radio/>} label="2 days"/>
            <FormControlLabel value="three day" control={<Radio/>} label="3 days"/>
            <FormControlLabel value="four day" control={<Radio/>} label="4 days"/>
            <FormControlLabel value="five day" control={<Radio/>} label="5 days"/>
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

SplitFrequencyRadioGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SplitFrequencyRadioGroup);
