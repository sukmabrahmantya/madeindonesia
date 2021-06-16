import React from 'react'
import {
  Card, CardContent, Typography, Link, Grid
} from '@material-ui/core';
import {
  ArrowRightAlt
} from '@material-ui/icons';
import styles from '../style.module.css';
import cx from 'classnames';

class CardComponent extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Card className={styles.cardWrap}>
        <div className={styles.cardImageWrap}>
          <img src={data.img} alt={data.title} className={styles.cardImage} />
        </div>
          <CardContent>
            <Typography variant="subtitle1" className={cx(styles.grayColor, styles.bold)} gutterBottom>
              {data.date}
            </Typography>
            <Link href="#" className={cx(styles.whiteColor, styles.bold)}>
              <Grid container>
                <Typography variant="h6" className={cx(styles.bold)}>
                  {data.title} <ArrowRightAlt />
                </Typography>
              </Grid>
            </Link>
          </CardContent>
      </Card>
    )
  }
}

export default CardComponent