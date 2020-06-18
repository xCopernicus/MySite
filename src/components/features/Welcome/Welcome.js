import React from 'react';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return(
    <div className={styles.component}>
      <h1>Hello, <br />my name is Franek!</h1>
      <h2>Welcome to my website</h2>
    </div>
  );
}

export default Welcome;