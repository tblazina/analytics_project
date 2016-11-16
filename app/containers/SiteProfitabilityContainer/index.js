/*
 *
 * SiteProfitabilityContainer
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import selectSiteProfitabilityContainer from './selectors';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions';
import SiteProfitability from '../../components/SiteProfitability';
import styles from './styles.css';
import { Grid, Col, Row } from 'react-bootstrap';
import Spinner from 'react-spinkit';
import { setPusherClient } from 'react-pusher';
import Pusher from 'pusher-js';

var pusherClient = new Pusher('0186fd653a96f5f18544', {
      cluster: 'eu',
      encrypted: true
    });

var channel = pusherClient.subscribe('Analytics_tCHYBe3sCI');
channel.bind('order_created', function(data) {
      console.log(data);
    });

setPusherClient(pusherClient);

export class SiteProfitabilityContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  // This makes sure that the chart is responsive (i.e. resizes with changing window sizes)
  // fitToParentSize(){
  //  if (Object.keys(this.refs).length === 0){  // this is necessary because we're doing asynchronous requests...
  //      return
  //   }
  //   var node = ReactDOM.findDOMNode(this)


  //   let w = this.refs.wrapper.offsetWidth - 20;
  //   let h = this.refs.wrapper.offsetHeight - 20;
    
    
  //   const currentWidth = this.props.width
  //   const currentHeight = this.props.height
  //   if (w !== currentWidth || h !== currentHeight){
  //     this.props.ResizeWindow(w,h)
  //   }
  // }

  componentDidMount(){

    // window.addEventListener('resize', ::this.fitToParentSize); 
    // this.fitToParentSize()
    
    let d = new Date();
    d.setDate(d.getDate() - 30);   // This sets the window of how far you want to look back (i.e. past 30 days)
    let startDate = d.toJSON().slice(0, 10);

    //10.0.1.91
    if ((this.props.siteProfitabilityData1.length === 0) === true){   /// this makes sure that data is only loaded once
            this.props.getApiUrl(['http://10.0.1.91:8000/felfel_analytics/corporate/siteprofit?startdate=' + startDate]);
          }
  }

  componentWillReceiveProps() {
      // this.fitToParentSize();
  }

  render() {

    if (this.props.siteProfitabilityData1.length===0){
            return (<Spinner className={styles.spinner}/>)
    };

    
    return (
      <div className={styles.CorporatePartnershipsMainDashContainer} ref='wrapper'>
          <SiteProfitability {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = selectSiteProfitabilityContainer();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteProfitabilityContainer);
