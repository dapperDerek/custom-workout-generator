import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  footer: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 2
  }
});

class Footer extends Component {

  render() {
    const {classes} = this.props;

    return (
        <Grid className={classes.footer} align="center">
          <Typography variant="headline">
            Copyright &copy; 2018 customworkoutgenerator.com
          </Typography>
          <Typography variant="body1">
            By using customworkoutgenerator.com you agree to the <Link className={classes.footer} to="/disclaimer-terms-of-service">Disclaimer and Terms of Service</Link>
          </Typography>
        </Grid>
    );
  }
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);