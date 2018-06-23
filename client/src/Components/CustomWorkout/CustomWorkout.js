import React, {Component} from 'react';
import './CustomWorkout.css'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import isEmpty from 'lodash/isEmpty'
import Exercise from './Exercise/Exercise'


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
});

class CustomWorkout extends Component {
  // Initialize state
  state = {};

  render() {
    const {classes} = this.props;
    const workout = this.props.workout;

    const exerciseGroups = Object.keys(workout).map((key, keyInd) => {
      return (
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12} key={key}>
            Day { keyInd + 1}
            {workout[key].map((exercise) => {
              return <Exercise name={exercise.name} sets={exercise.sets} reps={exercise.reps}/>
            })}
          </Grid>
        </Grid>
      )
    });


    return (
      <Grid container className={classes.root} spacing={24}>
        {!isEmpty(this.props.workout) ? (
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={24}>
              {exerciseGroups}
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={24}>
              <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3">
                  Uh-Oh!
                </Typography>
                <Typography component="p">
                  It looks like we don't have a workout generated for you yet.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
}

CustomWorkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomWorkout);