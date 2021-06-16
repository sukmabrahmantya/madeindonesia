import React from 'react';
import {
  Typography,
  Grid,
  Button,
  Link
} from '@material-ui/core';
import cx from 'classnames';
import styles from '../style.module.css'
import picture from '../assets/landing.jpg';
import Header from '../components/header';

class LandingPage extends React.Component {
  textComponent() {
    return (
      <Grid
        container direction="row" justify="flex-start" alignItems="center" spacing={3}
        className={styles.textLanding}
      >
        <Grid item xs={12}>
          <Typography variant="h3" className={styles.bold}>
            Your partner for optimally profitable real estate investments
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" className={cx(styles.button)} disableElevation>
            <Typography variant="h6" className={styles.bold}>
              Make enquiry
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Link href="#" className={cx(styles.whiteColor, styles.underline, styles.bold)}>
            Call: +31 1111 2222
          </Link>
        </Grid>
      </Grid>
    )
  }

  render() {
    return (
      <Grid 
        container direction="row" justify="flex-start" alignItems="flex-start"
        className={cx(styles.containerLanding)}
      >
        <Header />
        <Grid 
          item xs={12} md={6}
        >
          {this.textComponent()}
        </Grid>
        <Grid 
          item xs={12} md={6}
          className={cx(styles.containerLanding)}
        >
          <div className={styles.pictLandingWrap}>
            <img src={picture} alt="Landing-page" className={styles.pictLanding}/>
          </div>
        </Grid>
      </Grid>
    )
  };
;}

export default LandingPage;
