import React from 'react';
import {
  Grid, Typography, Link
} from '@material-ui/core';
import {
  ArrowRightAlt
} from '@material-ui/icons'
import styles from '../style.module.css';
import cx from 'classnames';
import image from '../assets/investor.jpg';
import image2 from '../assets/investor2.jpg';
import image3 from '../assets/investor3.jpg';
import image4 from '../assets/investor4.jpg';
import ListOfCard from '../components/squareCard';

var listOfData = [
  {
    date: "25 June 2021",
    title: "The Netherlands' first wooden high-rise project",
    img: image
  },
  {
    date: "9 July 2021",
    title: "Tradre is working on Het Hooghout, a residential building in Eindhoven",
    img: image2
  },
  {
    date: "13 December 2022",
    title: "Extension of sponsorship PSV Eindhoven",
    img: image3
  }
]

class InvestorFirstPage extends React.Component {
  render() {
    return (
      <Grid
        container direction="row" justify="flex-start" alignItems="flex-start"
        className={cx(styles.containerBlack)}
      >
       <Grid item xs={12} style={{zIndex: 1}}>
          <Typography variant="h6" className={cx(styles.grayColor, styles.bold)} gutterBottom>
            For investor
          </Typography>
        </Grid>
        <Grid item xs={7} style={{zIndex: 1}}>
          <Typography variant="h4" style={{padding: '1rem 0 0 0'}} className={cx(styles.bold)} gutterBottom>
            Building a custom-made real estate portfolio together
          </Typography>
        </Grid>
        <Grid item xs={9} style={{padding: '1rem 0 0 5rem', zIndex: 1}}>
          <Typography variant="h6" gutterBottom>
            Cooperation, flexibility and guarantee. Those are 3 keywords on which our working method is based. We build custom-made real estate portfolios for our investors, entirely according to the wishes discussed in advance and with a continuous supply of new, suitable objects.
          </Typography>
        </Grid>
        <Grid item xs={9} style={{padding: '1rem 0 0 5rem', zIndex: 1}}>
          <Link href="#" className={cx(styles.lightBlueColor, styles.bold)}>
            <Grid container>
              More about investor
              <ArrowRightAlt />
            </Grid>
          </Link>
        </Grid>
        <img src={image4} alt="" className={styles.pictInvestor} />          
      </Grid>
    )
  }
};

class InvestorSecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  componentDidMount() {
    this.setState({data: listOfData})
  };

  render() {
    const { data } = this.state;

    return (
      <Grid
        container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}
        className={cx(styles.containerGrey)}
      >
       <Grid item xs={12}>
          <Typography variant="h6" className={cx(styles.grayColor, styles.bold)} gutterBottom>
            For investor
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container direction="row" justify="space-between" alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" style={{padding: '1rem 0 0 0'}} className={cx(styles.bold)} gutterBottom>
                Latest news
              </Typography>
            </Grid>
            <Grid item>
              <Link href="#" className={cx(styles.lightBlueColor, styles.bold)}>
                <Grid container>
                  See all news 
                  <ArrowRightAlt />
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        {
          data.length > 0 && data.map((comp, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <ListOfCard data={comp} />
              </Grid>
            )
          })
        }
      </Grid>
    )
  }
};

class InvestorPage extends React.Component {
  render() {
    return (
      <div>
        <InvestorFirstPage />
        <InvestorSecondPage />
      </div>
    )
  }
}

export default InvestorPage;
