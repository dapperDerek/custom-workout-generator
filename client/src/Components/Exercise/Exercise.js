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
    padding: theme.spacing.unit * 2,
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
  state = {expanded: false};

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleRemoveExercise = (day, index) => {
    console.log('in Exercise component',day, index);
    this.props.onRemoveExercise(day, index);
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
          <Typography component="p">
            {this.props.sets} Sets
          </Typography>
          <Typography component="p">
            {this.props.reps} Reps
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="More exercise options">
            <MoreVertIcon color="secondary"/>
          </IconButton>
          <IconButton aria-label="Re-roll exercise">
            <AutorenewIcon color="secondary"/>
          </IconButton>
          <IconButton aria-label="Remove exercise" onClick={this.handleRemoveExercise.bind(null, this.props.exerciseDay, this.props.exerciseIndex)}>
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
            <Typography paragraph>
              Lorizzle fizzle dolizzle sit dizzle, consectetizzle adipiscing you son of a bizzle. Pimpin' shut the
              shizzle up velit, mah nizzle volutpizzle, suscipit quizzle, sure vizzle, arcu. Pellentesque go to hizzle
              tortizzle. erizzle. Shizzlin dizzle izzle shizzlin dizzle dapibus boom shackalack tempus doggy. Maurizzle
              pellentesque nibh own yo' shut the shizzle up. Sure izzle break it down. Pellentesque eleifend rhoncizzle
              da bomb. In hac sizzle doggy izzle. Donec dapibizzle. Curabitizzle tellus urna, bow wow wow sure,
              mattizzle cool, eleifend vitae, nunc. Phat suscipizzle. Integer own yo' velit shut the shizzle up its fo
              rizzle.
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




