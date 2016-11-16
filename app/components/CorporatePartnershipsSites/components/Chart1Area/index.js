/**
*
* ChartArea
*
*/

import React from 'react';

import styles from './styles.css';
import HeavyLightUsersStackedBarPlot from '../HeavyLightUsersStackedBar';

class Chart1Area extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    // This is where you can change the dimensions of the chart 
    // let chartWidth =  '500',
    //  chartHeight = '300' //aspect ratio is 0.7
    
    // let margins = {top: 20,
    //         left: 50,
    //         right: 50,
    //         bottom: 50}
    let params = { data: this.props.corporateDashboardData1,
                   xName: 'totalEmployees',
                   yName: 'totalEmployees',
                   stacks: ['nonUsers','heavyUsers', 'lightUsers', ],
                   colorScheme: d3.schemeCategory10,
                   legendPosition: 'left',
                   height: 500,
                   width: 900,
                   chartWidth: 1000,
                   chartHeight: 1420,
                   margins: {top: 20,
                             left: 15,
                             right: 0,
                             bottom: 10}
           }

    // Translation for grouping element
    let translate = `translate(${params.margins.left}, ${params.margins.top})`

    return (
      <div className={styles.chart1Area}>
        <svg height={params.chartHeight} width={params.chartWidth}>
            <HeavyLightUsersStackedBarPlot {...params}/>
        </svg>

      </div>
    );
  }
}

export default Chart1Area;