import React from 'react';
import Navigation from '../../features/Navigation/Navigation';
import Welcome from '../../features/Welcome/Welcome';
import About from '../../features/About/About';
import Education from '../../features/Education/Education';
import Projects from '../../features/Projects/Projects';
import Contact from '../../features/Contact/Contact';
import styles from './Home.module.scss';

const Home = () => {
  return(
    <div className={styles.component}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.content}>
        <Welcome />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;