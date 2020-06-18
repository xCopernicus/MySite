import React from 'react';
import Container from '../../common/Container/Container';
import Header from '../../common/Header/Header';
import styles from './Contact.module.scss';

const Contact = () => (
  <Container>
    <div className={styles.component}>
      <Header title='Contact' />
    </div>
  </Container>
);

export default Contact;