import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

class DisclaimerTermsOfService extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Grid className={classes.root}>
            <Card elevation={0}>
              <CardHeader
                align="center"
                title="Disclaimer"
                subheader="Last updated: 06/30/2018"
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  The information contained on customworkoutgenerator.com (the "Service") is for general
                  information purposes only. Customworkoutgenerator.com assumes no responsibility for errors or
                  omissions in the contents on the Service.

                  In no event shall customworkoutgenerator.com be liable for any special, direct, indirect,
                  consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or
                  other tort, arising out of or in connection with the use of the Service or the contents of the
                  Service.

                  Customworkoutgenerator.com reserves the right to make additions, deletions, or modification to the
                  contents on the Service at any time without prior notice. Customworkoutgenerator.com does not
                  warrant that the website is free of viruses or other harmful components.
                </Typography>
                <br />
                <Typography variant="subheading" component="h3">
                  External links disclaimer
                </Typography>
                <Typography component="p">
                  Customworkoutgenerator.com may contain links to external websites that are not provided or
                  maintained by or in any way affiliated with customworkoutgenerator.com Please note that
                  customworkoutgenerator.com does not guarantee the accuracy, relevance, timeliness, or completeness of
                  any information on these external websites.
                </Typography>
                <br />
                <Typography variant="subheading" component="h3">
                  Fitness disclaimer
                </Typography>
                <Typography variant="body2" component="p">
                  This website offers health, fitness and nutritional information and is designed for educational
                  purposes only. You should not rely on this information as a substitute for, nor does it replace,
                  professional medical advice, diagnosis, or treatment.
                </Typography>
                <br />
                <Typography variant="subheading" component="h3">
                  Affiliate disclaimer
                </Typography>
                <Typography variant="body2" component="p">
                  This affiliate disclosure details the affiliate relationships of customworkoutgenerator.com with other
                  companies and products. Some of the links on are “affiliate links”, a link with a special tracking
                  code.
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={0}>
              <CardHeader
                align="center"
                title="Terms of Service"
                subheader="Last updated: 06/30/2018"
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using
                  customworkoutgenerator.com (the "Service") operated by customworkoutgenerator.com ("us", "we", or
                  "our").

                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                  Terms. These Terms apply to all visitors, users and others who access or use the Service.

                  By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part
                  of the terms then you may not access the Service.
                </Typography>
                <br />
                <Typography variant="subheading" component="h3">
                  Termination
                </Typography>
                <Typography variant="body2" component="p">
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for
                  any reason whatsoever, including without limitation if you breach the Terms.

                  All provisions of the Terms which by their nature should survive termination shall survive
                  termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and
                  limitations of liability.
                </Typography>
                <br />
                <Typography variant="subheading" component="h3">
                  Links To Other Web Sites
                </Typography>
                <Typography variant="body2" component="p">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by
                  customworkoutgenerator.com.

                  Customworkoutgenerator.com has no control over, and assumes no responsibility for, the content,
                  privacy policies, or practices of any third party web sites or services. You further acknowledge and agree
                  that customworkoutgenerator.com shall not be responsible or liable, directly or indirectly, for any
                  damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such
                  content, goods or services available on or through any such web sites or services.
                </Typography>
                <br />
                <Typography variant="subheading" component="h3">
                  Changes
                </Typography>
                <Typography variant="body2" component="p">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material we will try to provide at least 30 days' notice prior to any new
                  terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </Typography>
              </CardContent>
            </Card>
        </Grid>

      </div>
    );
  }
}


DisclaimerTermsOfService.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisclaimerTermsOfService);