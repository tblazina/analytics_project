/**
*
* SiteProfitabilityChart1
*
*/

import React from 'react';
import StackedBarPlot from './StackedBarPlot';
import styles from './styles.css';

class SiteProfitabilityChart1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // This is where you can change the dimensions of the chart
    const margin = { top: 20, right: 20, bottom: 200, left: 20 };
    const padding = { top: 60, right: 60, bottom: 60, left: 60 };
    const outerWidth = window.innerWidth;
    const outerHeight = window.innerHeight;
    const innerWidth = outerWidth - margin.left - margin.right;
    const innerHeight = outerHeight - margin.top - margin.bottom;
    const width = innerWidth - padding.left - padding.right;
    const height = innerHeight - padding.top - padding.bottom;
    const params = { data: this.props.siteProfitabilityData1,
                   xName: 'locationname',
                   yName: 'total',
                   yTitle: '',
                   stacks: ['COGS',
                            'Waste/Missing',
                            'Taxes',
                            'Credit Card Fees',
                            'Customer Excellence Costs',
                            'Commissioning Costs',
                            'Corporate Partnerships',
                            'Gifts/Promo',
                            'Profits'],
                   colorScheme: ['#ffffff',
                                 '#f3f8f2',
                                 '#d9e8d5',
                                 '#b2cfa9',
                                 '#8eb982',
                                 '#7dae70',
                                 '#6ba35e',
                                 '#5a994d',
                                 '#49903d',
                                 '#37862c'],
                   topBarText: true,
                   barText: 'profit_percentage',
                   legendPosition: 'left',
                   height,
                   width,
                   padding,
                   margin,
           };

    return (
      <div className={styles.chart1Area}>
        <svg height={outerHeight} width={outerWidth}>
          <StackedBarPlot {...params} />
        </svg>
      </div>
    );
  }
}

SiteProfitabilityChart1.propTypes = {
  siteProfitabilityData1: React.PropTypes.array,
};

export default SiteProfitabilityChart1;
