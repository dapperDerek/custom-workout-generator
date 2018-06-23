import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Exercise extends React.Component {
  state = {
    spacing: '16',
  };


  render() {
    const {classes} = this.props;

    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          {this.props.name}
        </Typography>
        <Typography component="p">
          Sets: {this.props.sets}
        </Typography>
        <Typography component="p">
          Reps: {this.props.reps}
        </Typography>
      </Paper>
    );
  }
}

Exercise.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exercise);




