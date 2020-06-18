import React from 'react';
import Container from '../../common/Container/Container';
import Header from '../../common/Header/Header';
import {Row, Col} from 'react-flexbox-grid';
import styles from './Education.module.scss';

const Education = () => (
  <Container>
    <div className={styles.component}>
      <Header title='Education' />
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.qualification}>
            <h3>
              A-Levels
            </h3>
            <p>
              Maths A*<br />
              Further Maths A*<br />
              Physics A*
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.qualification}>
            <h3>
              HTML & CSS
            </h3>
            <p>
              Flexbox<br />
              RWD<br />
              Bootstrap
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
         <div className={styles.qualification}>
            <h3>
              HTML & CSS
            </h3>
            <p>
              Flexbox<br />
              RWD<br />
              Bootstrap
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.qualification}>
            <h3>
              HTML & CSS
            </h3>
            <p>
              Flexbox<br />
              RWD<br />
              Bootstrap
            </p>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Education;