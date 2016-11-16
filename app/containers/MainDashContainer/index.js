/*
 *
 * ChartContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import selectMainDashContainer from './selectors';
import {bindActionCreators} from 'redux';
import styles from './styles.css';
import * as actionCreators from './actions';
import MainDash from '../../components/MainDash'
import Spinner from 'react-spinkit';



export class MainDashContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

	// constructor(props){
	// 	super(props);
	// 	this.urls = ['http://localhost:8000/felfel_analytics/location-category-sales',       // Here is where you indicate API urls
	// 							 'http://localhost:8000/felfel_analytics/weekly-sales',]
	// }

	componentWillMount(){

	}

	componentDidMount(){
		//10.0.1.66
		if ((this.props.locations.length === 0) === true){   /// this makes sure that data is only loaded once
			this.props.getLocationList('http://10.0.1.91:8000/felfel_analytics/locationslist')}

		function getMonday(d) {
  			d = new Date(d);
  			var day = d.getDay(),
      		diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  			return new Date(d.setDate(diff));
			}

		let currentdate = new Date().toJSON().slice(0,10)	
		let startdate = getMonday(currentdate).toJSON().slice(0,10) ; // Implement when database is updated

		if ((this.props.mainDashboardData1.length === 0) === true){   /// this makes sure that data is only loaded once
			this.props.getApiUrl(['http://10.0.1.91:8000/felfel_analytics/weekly-product-sales?startdate=' + startdate])}

		}

	componentWillReceiveProps(newProps){
		
 	 }

  	handleClick(e){
  		console.log('worked')
  	}

	render() {

		if (this.props.mainDashboardData1.length===0){ 
			return (<Spinner className={styles.spinner}/>)
		};
		let data = this.props.mainDashboardData1
		return (
			<div className={styles.MainDashContainer}>
			
					
				<MainDash {...this.props}/>
				

			</div>
		);
	}
}
 
MainDashContainer.propTypes = {
	mainDashboardData1: React.PropTypes.array,
	mainDashboardData2: React.PropTypes.array,
	mainDashboardData3: React.PropTypes.array,
	mainDashboardData4: React.PropTypes.array,
	locations: React.PropTypes.array,
	url: React.PropTypes.array,
	locationUrl: React.PropTypes.string
};



const mapStateToProps = selectMainDashContainer();

function mapDispatchToProps(dispatch) {
		return bindActionCreators(actionCreators, dispatch);
}

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatchMyAction: (url) => dispatch(loadURL(url)),
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(MainDashContainer);
