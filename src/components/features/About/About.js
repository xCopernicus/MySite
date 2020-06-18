import React from 'react';
import Header from '../../common/Header/Header';
import Container from '../../common/Container/Container';
import {Row, Col} from 'react-flexbox-grid';
import styles from './About.module.scss';

const About = () => {
  return(
    <Container>
      <div className={styles.component}>
        <Header title='About' />
        <Row>
          <Col xs={12} sm={6}>
            <div className={styles.info}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem augue, tincidunt quis augue eu, ullamcorper auctor magna. In ac enim purus. In posuere fringilla nibh vel commodo. Ut vulputate tincidunt dui, sit amet commodo metus laoreet in.
              </p>
            </div>
          </Col>
          <Col xs={6} sm={6}>
            <div className={styles.image}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg' alt='Me' />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;