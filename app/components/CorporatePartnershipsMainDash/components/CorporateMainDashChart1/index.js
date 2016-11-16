/**
*
* CorporatePartnershipsMainDash
*
*/

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import StackedBarPlot from './StackedBarPlot';
import styles from './styles.css';

class CorporatePartnershipsMainDash extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const margin = { top: 20, right: 20, bottom: 200, left: 20 };
    const padding = { top: 60, right: 60, bottom: 60, left: 60 };
    const outerWidth = window.innerWidth;
    const outerHeight = window.innerHeight;
    const innerWidth = outerWidth - margin.left - margin.right;
    const innerHeight = outerHeight - margin.top - margin.bottom;
    const width = innerWidth - padding.left - padding.right;
    const height = innerHeight - padding.top - padding.bottom;
    const params = { data: this.props.corporateDashboardData1,
                     xName: 'locationname',
                     yName: 'total',
                     yTitle: '',
                     stacks: ['heavy', 'light', 'non'],
                     colorScheme: ['#2ca25f', '#99d8c9', '#e5f5f9'], // Define colors
                     legendPosition: 'right',
                     topBarText: false,
                     height,
                     width,
                     margin,
                     padding,
           };

    return (
      <div className={styles.chart1Area}>
        <Grid>
          <Row className={styles.row1}>
                Site penetration by user type
          </Row>
          <Row>
            <Col>
              <svg height={outerHeight} width={outerWidth}>
                <StackedBarPlot {...params} />
              </svg>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

CorporatePartnershipsMainDash.propTypes = {
  corporateDashboardData1: React.PropTypes.array.isRequired,
};

export default CorporatePartnershipsMainDash;
