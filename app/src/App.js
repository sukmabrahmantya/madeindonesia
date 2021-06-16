import React from 'react';
import Landing from './pages/landing';
import AboutUs from './pages/about';
import Services from './pages/services';
import Investor from './pages/investor';
import Footer from './components/footer';
import styles from './style.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Landing />
        <AboutUs />
        <Services />
        <Investor />
        <Footer />
      </div>
    )
  }
}

export default App;
