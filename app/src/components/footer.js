import React from 'react';
import {
  Grid, Typography, Button, Divider, Link
} from '@material-ui/core';
import styles from '../style.module.css';
import cx from 'classnames';
import logo from '../assets/logo.png'

let listOfData = [
  "About us", "News", "Objects", "Business", "Contact", "Join the team", "References", "Partners", "Team", "FAQ"
]
class Enquiry extends React.Component {
  render() {
    return (
      <Grid
        container direction="row" justify="center" alignItems="center" align="center" spacing={2}
        className={cx(styles.containerBlack)}
      >
        <Grid item xs={12}>
          <Typography variant="h4" className={cx(styles.bold)} gutterBottom>
            Let's build something great together
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className={cx(styles.buttonInline)} disableElevation>
            <Typography variant="h6" className={styles.bold}>
              Make enquiry
            </Typography>
          </Button>
        </Grid>
      </Grid>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  };

  componentDidMount() {
    this.setState({data: listOfData});
  };

  render() {
    const { data } = this.state
    return(
      <div>
        <Enquiry />
        <Grid
          container direction="column" spacing={2}
          className={cx(styles.containerGreyFooter)}
        >
          <Grid item>
            <Grid
              container direction="row" justify="center" alignItems="center"
              style={{padding: '0 0 2rem 0'}} spacing={2}
            >
              {
                data.length > 0 && data.map((title, index) => {
                  return (
                    <Grid item key={index}>
                      <Link href="#" underline="none" className={cx(styles.whiteColor)}>
                          {title}
                      </Link>
                    </Grid>
                  )
                })
              }
            </Grid>
          </Grid>
          <Divider light={true} style={{background: 'white'}}/>
          <Grid item>
            <Grid
              container direction="row" justify="space-between" alignItems="center"
            >
              <Grid item>
                <img src={logo} alt="company logo" className={styles.companyLogo}/>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  © 2021 - Tradre
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Footer