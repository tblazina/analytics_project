/*
 *
 * ChartContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectChartContainer from './selectors';
import {bindActionCreators} from 'redux';
import styles from './styles.css';
import * as actionCreators from './actions';
import Axes from '../../components/Axes';
import Spinner from 'react-spinkit';
import ChartArea from '../../components/ChartArea'


export class ChartContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount(){
    this.props.getApiUrl(this.props.url)
  }

  render() { 
    return (
      <div className={styles.ChartContainer}>
        <ChartArea {...this.props}>
        </ChartArea>
      </div>
    );
  }
}

ChartContainer.propTypes = {
  data: React.PropTypes.array,
  url: React.PropTypes.string
};



const mapStateToProps = selectChartContainer();

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatchMyAction: (url) => dispatch(loadURL(url)),
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
