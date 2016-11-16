/**
*
* CorporatePartnerships
*
*/

import React from 'react';
import styles from './styles.css';
import {Grid, Row, Col, DropdownButton, MenuItem, Table} from 'react-bootstrap';
import Chart1Area from './components/Chart1Area';


class CorporatePartnershipsSites extends React.Component { // eslint-disable-line react/prefer-stateless-function

    handleClick(e){


        // Get locationname of click event
        let locations = this.props.locations
        let newLocationName = e.target.text.trim()   //trim removes %20 for spaces
        this.props.selectLocation(newLocationName)
        // get corresponding locationid from locations array
        for(let j = 0; j < locations.length; j++){

          if(locations[j].locationname === newLocationName){
            let startdate = new Date().toJSON().slice(0,10)
            //10.0.1.66
            this.props.getApiUrl(['http://0.0.0.0:8000/felfel_analytics/corporate/sites?locationid=' + locations[j].locationid])        
          }

        }
  }


  render() {

    let locations= this.props.locations
    let chart1Data = this.props.corporateDashboardData1[0]
    return (
    <div className={styles.corporatePartnerships}>              
		<Grid className={styles.grid}>
            <Row className={styles.row1}>
                <Col xs={6}>
                    <DropdownButton title={this.props.selectedLocation} id="bg-nested-dropdown">
                        {locations.map((d,i) => {
                            return <MenuItem key={d.locationname} ref={d.locationname} onClick={this.handleClick.bind(this)}> {d.locationname} </MenuItem>
                        })}
                    </DropdownButton>
                </Col>
                <Col className={styles.col2} xs={6}>
                    You are viewing data for: <b>{this.props.selectedLocation}</b>
                </Col>

            </Row>
            <Table hover>
                <thead className={styles.thead}>
                    <tr>
                        <th> Average Weekly Sales (CHF) </th>
                        <th> No. Weeks as Customer </th>
                        <th> Total Employees </th>
                        <th> Activated Users </th>
                        <th> Penetration (%) </th>
                        <th> Active Users (last 4 weeks) </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr1}>
                        <td> {chart1Data.avgWeeklySales} </td>
                        <td> {chart1Data.noWeeksCustomer} </td>
                        <td> {chart1Data.totalEmployees} </td>
                        <td> {chart1Data.activatedUsers} </td>
                        <td> {chart1Data.penetration} </td>
                        <td> {chart1Data.activeUsers} </td>
                    </tr>
                </tbody>
            </Table>

            <Row> 
                <Col>
                    <b>{this.props.selectedLocation} - user composition</b>
                    <Chart1Area {...this.props} /> 
                </Col>
            </Row>
        </Grid>
    </div>
    );
  }
}

export default CorporatePartnershipsSites;
