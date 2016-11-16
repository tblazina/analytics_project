/**
*
* ChartArea for MainDash
*
*/

import React from 'react';
import styles from './styles.css';
import ProductBarPlot from '../ProductBarPlot';
class Chart1Area extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

  	// This is where you can change the dimensions of the chart 
  	// let chartWidth =  '500',
  	// 	chartHeight = '300' //aspect ratio is 0.7
  	
  	// let margins = {top: 20,
  	// 			   left: 50,
  	// 			   right: 50,
  	// 			   bottom: 50}
    let params = { data: this.props.mainDashboardData1,
                   xName: 'productname',
                   yName: 'units',
                   grouping: 'isfresh',
                   colorScheme: d3.schemeCategory10,
                   legendPosition: 'left',
                   height: window.innerHeight - 250,
                   width: window.innerWidth - 200,
                   chartWidth: window.innerWidth,
				   chartHeight: window.innerHeight,
				   margins: {top: 20,
				             left: 50,
                             right: 50,
                             bottom: 50}
				   };

  	// Translation for grouping element
  	let translate = `translate(${params.margins.left}, ${params.margins.top})`;

    return (
      <div className={styles.chart1Area}>
      	<svg height={params.chartHeight} width={params.chartWidth}>
          <ProductBarPlot {...params}/>
      	</svg>

      </div>
    );
  }
}

export default Chart1Area;
