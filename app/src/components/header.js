import React from 'react';
import {
  AppBar, Toolbar, IconButton, Grid
} from '@material-ui/core'
import {
  Menu
} from '@material-ui/icons'
import logo from '../assets/logo.png'
import styles from '../style.module.css';

class Header extends React.Component {
  render() {
    return (
      <AppBar position="fixed" className={styles.containerAppBar}>
        <Toolbar>
          <Grid
            container direction="row" justify="space-between" alignItems="center" spacing={2}
          >
            <Grid item>
              <img src={logo} alt="company logo" className={styles.companyLogo}/>
            </Grid>
            <Grid item>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
};

export default Header;