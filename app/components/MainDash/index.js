/**
*
* MainDash
*
*/

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import ChartContainer from '../../containers/ChartContainer'
import {Grid, Row, Col} from 'react-bootstrap';
import {createStructuredSelector} from 'reselect';


class MainDash extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.mainDash}>
         <Grid className={styles.bsGrid} fluid={true}>
   <Row className="show-grid">
      <Col md={6} mdPush={6}> <ChartContainer url={'http://localhost:8000/d3/location-category-sales'} data={this.props.apidata1}/> </Col>
      <Col md={6} mdPull={6}> <ChartContainer url={'http://localhost:8000/d3/weekly-sales'} data={this.props.apidata2 }/> </Col>
    </Row>

    </Grid>
      </div>
    );
  }
}
const selectData1 = () => (state) => state.chartContainer;
const selectData2 = () => (state) => state.chartContainer;
console.log(selectData1())

const mapStateToProps = createStructuredSelector({
  apidata1: selectData1(),
  apidata2: selectData2(),
});


export default connect(mapStateToProps)(MainDash);
