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
    this.setState({expanded: !this.state.expanded});
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
          <IconButton aria-label="Remove exercise">
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
            <Typography paragraph variant="body2">
              Method:
            </Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and
              cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
              Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
              the rice, and cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
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




