/**
*
* MainDash
*
*/

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import MainDashContainer from '../../containers/MainDashContainer'

import {createStructuredSelector} from 'reselect';


class MainDash extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.mainDash}>
        <MainDashContainer url={['http://localhost:8000/d3/location-category-sales',
                              'http://localhost:8000/d3/weekly-sales'
                              ]} />
      </div>
    );
  }
}
const selectData1 = () => (state) => state.MainDashContainer;
const selectData2 = () => (state) => state.MainDashContainer;

const mapStateToProps = createStructuredSelector({
  apidata1: selectData1(),
  apidata2: selectData2(),
});


export default connect(mapStateToProps)(MainDash);
