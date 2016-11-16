/**
*
* Axes
*
*/

import React, {Component} from 'react';
import styles from './styles.css';
import * as d3 from 'd3';

// class Axes extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     return (
//       <div className={styles.axes}>
//         <FormattedMessage {...messages.header} />
//       </div>
//     );
//   }
// }

// export default Axes;

export default class Axes extends Component {
  constructor(props){
    super();

    this.yAxis = d3.axisLeft();
    this.xAxis = d3.axisBottom();
    this.update_d3(props);
  }

  componentWilLRecieveProps(newProps){
    this.update_d3(newProps);
  }

  update_d3(props){
    this.yAxis.scale(props.yscale)
    this.xAxis.scale(props.xscale)

  }

  componentDidMount() { 
    this.renderYAxis(); 
    this.renderXAxis();
  }
  componentDidUpdate() { 
    this.renderYAxis();
    this.renderXAxis(); 
  }



  renderYAxis() {
        let node = this.refs.yanchor;
        d3.select(node).call(this.yAxis);

    }

  renderXAxis() {
    let node = this.refs.xanchor;

    d3.select(node).call(this.xAxis)
                   .selectAll("text")
                   .attr("class", "xTickLabels")
                   .attr("y", 0)
                   .attr("x", 9)
                   .attr("dy", ".45em")
                   .attr("transform", "rotate(45)")
                   .style("text-anchor", "start");
    }

  render() {
        let translate = `translate(0,${this.props.chartHeight})`
        let labelTranslate = `translate(${-this.props.leftMargin/2},${this.props.chartHeight/2})rotate(-90)`
        return (
          <g>
            <g className="yaxis" 
               ref="yanchor">
            </g>
            <text className='yTitle'
                  transform={labelTranslate}> 
              {this.props.yTitle}  </text>
            <g className="xaxis" 
               transform={translate}
               ref="xanchor">
            </g>
          </g> 
        );
    }

}
