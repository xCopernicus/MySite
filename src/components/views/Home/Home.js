import React from 'react';
import Welcome from '../../features/Welcome/Welcome';
import About from '../../features/About/About';
import styles from './Home.module.scss';

const Home = () => {
  return(
    <div className={styles.component}>
      <Welcome />
      <About />
    </div>
  );
}

export default Home;