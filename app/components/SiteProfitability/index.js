/**
*
* SiteProfitability
*
*/

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './styles.css';
import SiteProfitabilityChart1 from './components/SiteProfitabilityChart1';


class SiteProfitability extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.corporatePartnershipsMainDash}>
        <Grid fluid>
          <Row className={styles.row1}>
            Site Profitability
          </Row>
          <Row className="row-2">
            <Col xs={5}>
              <SiteProfitabilityChart1 {...this.props} />
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

export default SiteProfitability;
