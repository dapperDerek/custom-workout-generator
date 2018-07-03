import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({

});

class Footer extends Component {

  render() {
    const {classes} = this.props;

    return (
      <footer align="center">
        <Grid className={classes.footer}>
          <Typography variant="body1" color="textSecondary">
            <b>Copyright &copy; 2018 <Link to="/">customworkoutgenerator.com</Link></b>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            By using customworkoutgenerator.com you agree to the <Link to="/disclaimer-terms-of-service">Disclaimer and Terms of Service</Link>
          </Typography>
        </Grid>
      </footer>
    );
  }
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);