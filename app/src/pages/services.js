import React from 'react';
import {
  Grid, Typography
} from '@material-ui/core';
import cx from 'classnames';
import styles from '../style.module.css';
import image from '../assets/services.jpg';
import image2 from '../assets/services2.jpg';
import ListOfCard from '../components/roundCard';

var listOfData = [
  {
    title: "Residential Real Estate",
    details: "We offer the security of creditworthy tenants and a long-term lease.",
    img: image
  },
  {
    title: "Commercial Real Estate",
    details: "Our objects that are inhabited meet the minimum energy label C. We carry out necessary upgrades to objects ourselves.",
    img: image2
  }
]

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: listOfData })
  }

  render() {
    const { data } = this.state;

    return (
      <Grid
        container direction="row" justify="flex-start" alignItems="flex-start"
        className={cx(styles.containerGrey)}
      >
        <Grid item xs={12}>
          <Typography variant="h6" className={cx(styles.grayColor, styles.bold)} gutterBottom>
            Our services
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" style={{padding: '1rem 0 1rem 0'}} className={cx(styles.bold)} gutterBottom>
            What we do
          </Typography>
        </Grid>
        {
          data.length > 0 && data.map((comp, index) => {
            return (
              <Grid item xs={12} key={index}>
                <ListOfCard data={comp} />
              </Grid>
            )
          })
        }
      </Grid>
    )
  }
};

export default ServicesPage;