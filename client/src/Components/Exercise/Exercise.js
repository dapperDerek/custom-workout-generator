import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';


const styles = theme => ({
  exercise: {
    marginTop: theme.spacing.unit * 3,
  },
  exerciseDetails: {
    padding: 0
  },
  exerciseName: {
    fontSize: '1.25rem'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class Exercise extends React.Component {
  state = {
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleRemoveExercise = (day, muscleGroup, index) => {
    this.props.onRemoveExercise(day, muscleGroup, index)
  };

  handleReplaceExercise = (day, muscleGroup, index) => {
    fetch('/api/get-exercise', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //serialize your JSON body
      body: JSON.stringify({
        muscle: muscleGroup,
        fitnessGoal: this.props.fitnessGoal
      })
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.props.onReplaceExercise(day, muscleGroup, index, data);
      })
  };


  render() {
    const {classes} = this.props;

    return (
      <Card className={classes.exercise} elevation={1}>
        <CardHeader
          title={this.props.name}
          className={classes.exerciseName}
        />
        <CardContent className={classes.exerciseDetails}>
          <Typography>
            {this.props.sets} Sets
          </Typography>
          <Typography>
            {this.props.reps} Reps
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="More exercise options">
            <MoreVertIcon color="secondary"/>
          </IconButton>
          <IconButton aria-label="Get new exercise"
                      onClick={this.handleReplaceExercise.bind(null, this.props.exerciseDay, this.props.muscleGroup, this.props.exerciseIndex)}>
            <AutorenewIcon color="secondary"/>
          </IconButton>
          <IconButton aria-label="Remove exercise"
                      onClick={this.handleRemoveExercise.bind(null, this.props.exerciseDay, this.props.muscleGroup, this.props.exerciseIndex)}>
            <DeleteIcon color="secondary"/>
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon color="secondary"/>
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography align="left">
              <b>Category:</b> {this.props.category}<br/>
              <b>Muscles:</b> {this.props.muscles.join(', ')}<br/>
              <b>Equipment:</b> {this.props.equipment.join(', ')}<br/>
              <b>More info:</b> <a href={this.props.description} target="_blank">{this.props.description}</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Exercise.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exercise);




