/**
*
* MainDash
*
*/

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import {createStructuredSelector} from 'reselect';
import Chart1Area from './components/Chart1Area';

import {Grid, Row, Col} from 'react-bootstrap';

class MainDash extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.mainDash}>  	                                                                                                                               
      	
      		<Grid fluid>

				<Row className="row-1">
      				<Col md={6}>  

      				<Chart1Area {...this.props}/>

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


// const selectData1 = () => (state) => state.MainDashContainer;
// const selectData2 = () => (state) => state.MainDashContainer;

// const mapStateToProps = createStructuredSelector({
//   apidata1: selectData1(),
//   apidata2: selectData2(),
// });


// export default connect(mapStateToProps)(MainDash);
export default MainDash