/**
*
* CorporatePartnershipsMainDash
*
*/

import React from 'react';

import styles from './styles.css';
import { Grid, Row, Col } from 'react-bootstrap';
import CorporateMainDashChart1 from './components/CorporateMainDashChart1';


class CorporatePartnershipsMainDash extends React.Component {
  render() {
    return (
      <div className={styles.corporatePartnershipsMainDash}>
        <Grid fluid>
          <Row className="row-1">
            <Col md={6}>
              <CorporateMainDashChart1 {...this.props}/>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CorporatePartnershipsMainDash;
