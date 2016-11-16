/*
 *
 * CorporatePartnershipsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions';
import selectCorporatePartnershipsSitesContainer from './selectors';
import CorporatePartnershipsSites from '../../components/CorporatePartnershipsSites'
import styles from './styles.css';
import Spinner from 'react-spinkit';


export class CorporatePartnershipsSitesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


    // This makes sure that the chart is responsive (i.e. resizes with changing window sizes)
    fitToParentSize(){  
     if (Object.keys(this.refs).length === 0){  // this is necessary because we're doing asynchronous request of 
       return 
      }
      let w = this.refs.wrapper.offsetWidth - 20;
      let h = this.refs.wrapper.offsetHeight - 20;
      

      // const currentWidth = this.props.width
      // const currentHeight = this.props.height
      // if (w !== currentWidth || h !== currentHeight){
      //   this.props.ResizeWindow(w,h)
      // }
  }


  componentWillMount(){  //10.0.1.66
        if ((this.props.locations.length === 0) === true){   /// this makes sure that data is only loaded once
            this.props.getLocationList('http://10.0.1.91:8000/felfel_analytics/locationslist')}
}

  componentDidMount(){
    window.addEventListener('resize', ::this.fitToParentSize);
    this.fitToParentSize()
  }



  componentWillReceiveProps(nextProps){
    let startLocationId = nextProps.locations[0].locationid
    let startLocationName = nextProps.locations[0].locationname

    let startdate = new Date().toJSON().slice(0,10); // Implement when database is updated
    if ((this.props.corporateDashboardData1.length === 0 ) === true){   /// this makes sure that data is only loaded once

      this.props.getApiUrl(['http://10.0.1.91:8000/felfel_analytics/corporate/sites?locationid=' + startLocationId ])}
  	}    
  	  	
  render() {


    if (this.props.corporateDashboardData1.length===0){ 
            return (<Spinner className={styles.spinner}/>)
        };

    let width = this.props.width || 100
    let height = this.props.height || 100

    return (
      <div className={styles.corporatePartnershipsSitesContainer} ref='wrapper'>
        <CorporatePartnershipsSites  {...this.props} />
      </div>
    );
  }
}

CorporatePartnershipsSitesContainer.propTypes = {
  corporateDashboardData1: React.PropTypes.array,
  corporateDashboardData2: React.PropTypes.array,
  corporateDashboardData3: React.PropTypes.array,
  corporateDashboardData4: React.PropTypes.array,
  locations: React.PropTypes.array,
  url: React.PropTypes.array,
  locationUrl: React.PropTypes.string,
  selectedLocation: React.PropTypes.string

};


const mapStateToProps = selectCorporatePartnershipsSitesContainer();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CorporatePartnershipsSitesContainer);
