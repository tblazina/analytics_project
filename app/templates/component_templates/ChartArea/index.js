/**
*
* ChartArea
*
*/

import React from 'react';
import styles from './styles.css';

class ChartArea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

  	// This is where you can change the dimensions of the chart 
  	// let chartWidth =  '500',
  	// 	chartHeight = '300' //aspect ratio is 0.7
  	
  	// let margins = {top: 20,
  	// 			   left: 50,
  	// 			   right: 50,
  	// 			   bottom: 50}
    let params = { chartWidth: '500',
				   chartHeight: '300',
				   margins: {top: 20,
				   			 left: 50,
				   			 right: 50,
				   			 bottom: 50}
				   }
  	// Translation for grouping element
  	let translate = `translate(${params.margins.left}, ${params.margins.top})`
    return (
      <div className={styles.chartArea}>
      	<svg height={params.chartHeight} width={params.chartWidth}>
      		<g className="barplot" transform={translate}>
      		</g>
      	</svg>
      </div>
    );
  }
}

export default ChartArea;
