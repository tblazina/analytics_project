/*
 *
 * ResponsiveChartArea
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectResponsiveChartArea from './selectors';
import styles from './styles.css';

export class ResponsiveChartArea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.responsiveChartArea}>
      </div>
    );
  }
}

const mapStateToProps = selectResponsiveChartArea();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveChartArea);
