import React from 'react';
import {
  Grid, Typography
} from '@material-ui/core';
import cx from 'classnames';
import styles from '../style.module.css';
import image from '../assets/about.jpg';

class AboutUsPage extends React.Component {
  render() {
    return (
      <Grid
        container direction="row" justify="flex-start" alignItems="flex-start"
        className={cx(styles.containerBlack)}
      >
        <Grid item xs={12}>
          <Typography variant="h6" className={cx(styles.grayColor, styles.bold)} gutterBottom>
            About us
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h4" style={{padding: '1rem 0 0 0'}} className={cx(styles.bold)} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={9} style={{padding: '1rem 0 0 5rem', zIndex: 1}}>
          <Typography variant="h6" gutterBottom>
            Proud of what we have achieved from the drawing board last year! With a lot of effort we have set up our real estate company: Tradre Group . We focus on the growth areas in the Netherlands. We strive for a continuously growing real estate portfolio of stable rented real estate. <br /><br />
            With our own, unique data-driven search method and the network of our own trained sourcing partners, we are able to realize a custom-made real estate portfolio. At Tradre Group we work with a fixed, realistic purchasing policy, which means that many parties find it interesting to work with us!
          </Typography>
        </Grid>
        <img src={image} alt="" className={styles.pictAbout} />
      </Grid>
    )
  }
}

export default AboutUsPage;
