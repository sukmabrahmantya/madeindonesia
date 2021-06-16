import React from 'react';
import {
  Grid, Typography, Link
} from '@material-ui/core';
import {
  ArrowRightAlt
} from '@material-ui/icons'
import cx from 'classnames';
import styles from '../style.module.css';

class CardComponent extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Grid
        container direction="row" justify="flex-start" alignItems="flex-start"
        style={{marginBottom: '2rem'}}
      >
        <Grid item xs={12} md={7}>
          <div className={styles.pictServicesWrap}>
            <img src={data.img} alt={data.title} className={styles.pictServices} />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid
            container direction="column" justify="space-between" alignItems="flex-start" className={styles.pictServicesWrap}
          >
            <Grid item>
              <Typography variant="h5" className={cx(styles.bold)} gutterBottom>
                { data.title }
              </Typography>
              <Typography variant="h6" gutterBottom>
                { data.details }
              </Typography>
            </Grid>
            <Grid item>
              <Link href="#" className={cx(styles.lightBlueColor, styles.bold)}>
                <Grid container>
                  Learn more
                  <ArrowRightAlt />
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    )
  }
};

export default CardComponent;