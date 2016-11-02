/**
*
* MainDash
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import styles from './styles.css';
import ChartContainer from '../../containers/ChartContainer'
import {Grid, Row, Col} from 'react-bootstrap';



class MainDash extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.mainDash}>
         <Grid className={styles.bsGrid} fluid={true}>
   <Row className="show-grid">
      <Col md={6} mdPush={6}> <ChartContainer url={'http://localhost:8000/d3/location-category-sales'} /> </Col>
      <Col md={6} mdPull={6}> fuck </Col>
    </Row>

    </Grid>
      </div>
    );
  }
}

export default MainDash;
