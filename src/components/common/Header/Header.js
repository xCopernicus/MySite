import React from 'react';
import styles from './Header.module.scss';

const Header = ({title}) => (
  <div className={styles.component}>
    <h2>{title}</h2>
  </div>
)

export default Header;