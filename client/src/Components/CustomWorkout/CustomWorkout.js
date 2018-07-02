import React, {Component} from 'react';
import './CustomWorkout.css'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import isEmpty from 'lodash/isEmpty'
import Exercise from '../Exercise/Exercise'
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getNewExercise, removeExercise} from "../../actions/workout-actions";


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#fafafa',
    borderRadius: 0,
    border: '1px solid #e1e1e1'
  },
  workoutDay: {
    marginBottom: 16
  }
});

class CustomWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onGetNewExercise = this.onGetNewExercise.bind(this);
    this.onRemoveExercise = this.onRemoveExercise.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // These methods will be sent to the child component
  onGetNewExercise(exercise) {
    this.props.onGetNewExercise(exercise);
  }

  onRemoveExercise(exerciseDay, muscleGroup, exerciseIndex) {
    this.props.onRemoveExercise(exerciseDay, muscleGroup, exerciseIndex);
  }


  render() {
    const {classes} = this.props;
    const workout = this.props.workout;


    const exerciseGroups = Object.keys(workout).map((key, keyInd) => {
      // console.log(key, keyInd, Object.keys(workout[key]));
      return (
        <Grid item xs key={keyInd}>
          <Typography variant="title" component="h3" className={classes.workoutDay}>
            DAY {keyInd + 1}
          </Typography>
          <Paper className={classes.paper} elevation={0}>
            {Object.keys(workout[key]).map((muscleGroup) => {
              {return Object.keys(workout[key][muscleGroup]).map((index) => {
                  let exercise = workout[key][muscleGroup][index];
                  return <Exercise key={exercise + index}
                                   {...exercise}
                                   exerciseDay={key}
                                   muscleGroup={muscleGroup}
                                   exerciseIndex={index}
                                   onGetNewExercise={this.onGetNewExercise}
                                   onRemoveExercise={this.onRemoveExercise}
                  />
                })}
            })}
          </Paper>
        </Grid>
      )
    });


    return (
      <div className={classes.root} align="center">
        {!isEmpty(this.props.workout) ? (
          <div>
            <Grid container spacing={24}>
              {exerciseGroups}
            </Grid>
            <Link to={'/'}>
              <Button type="submit" value="Submit" variant="contained" color="primary" className={classes.button}>
                Get another custom workout
              </Button>
            </Link>
          </div>
        ) : (
          <Grid container spacing={24}>
            <Grid container justify="center" spacing={24}>
              <Paper className={classes.paper} elevation={2}>
                <Typography variant="headline" component="h3">
                  Uh-Oh!
                </Typography>
                <Typography component="p">
                  It looks like we don't have a workout generated for you yet.
                </Typography>

                <Link to={'/'}>
                  <Button type="submit" value="Submit" variant="contained" color="primary" className={classes.button}>
                    Get your custom workout
                  </Button>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    workout: state.workout
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    onGetNewExercise: getNewExercise,
    onRemoveExercise: removeExercise
  }, dispatch)
};

CustomWorkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CustomWorkout));