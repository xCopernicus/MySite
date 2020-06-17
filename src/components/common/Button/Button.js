import React from 'react';
import styles from './Button.module.scss';

const Button = ({action, children, type, background}) => {
  return(
    <button className={`${styles.component} ${styles[background]} ${styles[type]}`} onClick={action}>
      {type === 'wrapper' ? children : children.toUpperCase()}
    </button>
    );
}

export default Button;