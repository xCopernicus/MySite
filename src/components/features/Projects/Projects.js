import React from 'react';
import Container from '../../common/Container/Container';
import Header from '../../common/Header/Header';
import styles from './Projects.module.scss';

const Projects = () => (
  <Container>
    <div className={styles.component}>
      <Header title='Projects' />
    </div>
  </Container>
);

export default Projects;