import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox'


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

class EquipmentCheckboxGroup extends React.Component {

  handleChange = equipment => event => {
    this.props.onUpdateEquipment(equipment, event.target.checked);
  };


  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What type of equipment do you have available?</FormLabel>
          <FormGroup>
            {Object.keys(this.props.equipment).map((key, keyInd) => {
              return <FormControlLabel
                key={keyInd}
                control={
                  <Checkbox
                    checked={this.props.equipment[key]}
                    onChange={this.handleChange(key)}
                  />
                }
                label={key}
              />
            })}
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

EquipmentCheckboxGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EquipmentCheckboxGroup);
