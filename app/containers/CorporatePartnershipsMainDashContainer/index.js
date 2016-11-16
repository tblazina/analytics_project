/*
 *
 * CorporatePartnershipsMainDashContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCorporatePartnershipsMainDashContainer from './selectors';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions';
import styles from './styles.css';
import Spinner from 'react-spinkit';
import CorporatePartnershipsMainDash from '../../components/CorporatePartnershipsMainDash';

export class CorporatePartnershipsMainDashContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  // This makes sure that the chart is responsive (i.e. resizes with changing window sizes)
  fitToParentSize(){
   if (Object.keys(this.refs).length === 0){  // this is necessary because we're doing asynchronous requests...
       return
    }
    let w = this.refs.wrapper.offsetWidth - 20;
    let h = this.refs.wrapper.offsetHeight - 20;
    console.log(w)
    // const currentWidth = this.props.width
    // const currentHeight = this.props.height
    // if (w !== currentWidth || h !== currentHeight){
    //   this.props.ResizeWindow(w,h)
    // }
  }

  componentDidMount(){
    //
    let d = new Date();
    d.setDate(d.getDate() - 90)
    let startDate = d.toJSON().slice(0,10)

    if ((this.props.corporateDashboardData1.length === 0) === true){   /// this makes sure that data is only loaded once
            this.props.getApiUrl(['http://10.0.1.91:8000/felfel_analytics/corporate/maindash?startdate=' + startDate])}
  }

  render() {

    if (this.props.corporateDashboardData1.length===0){
            return (<Spinner className={styles.spinner}/>)
    };

    return (
      <div className={styles.CorporatePartnershipsMainDashContainer}>
      		<CorporatePartnershipsMainDash {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = selectCorporatePartnershipsMainDashContainer();

function mapDispatchToProps(dispatch) {

    return bindActionCreators(actionCreators, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(CorporatePartnershipsMainDashContainer);
