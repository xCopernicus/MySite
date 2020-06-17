import React from 'react';
import Button from '../../common/Button/Button';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return(
    <div className={styles.component}>
      <h1>Hello, <br />my name is Franek!</h1>
      <h2>Welcome to my website, please follow the white arrow</h2>
      <div className={styles.button}>
        <Button type='wrapper'>
          <i className='fa fa-arrow-down'></i>
        </Button>
      </div>
    </div>
  );
}

export default Welcome;