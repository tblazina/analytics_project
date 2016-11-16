import React, {Component} from 'react';
import * as d3 from 'd3';
import styles from './styles.css';
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
    this.updateD3(props);
  }

  updateD3(props){
    this.yAxis.scale(props.yscale);
    this.xAxis.scale(props.xscale);

  }

  componentDidMount() { 
    this.renderYAxis(); 
    this.renderXAxis();
  }
  componentDidUpdate() { 
    this.renderYAxis();
    this.renderXAxis(); 
  }

  componentWilLRecieveProps(newProps){
    this.updateD3(newProps);
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
                   .style("text-anchor", "start")
                   
    }

  render() {

        let translate = `translate(0,${this.props.height})`
        let labelTranslate = `translate(${-this.props.margins.left/2},${this.props.chartHeight/2})rotate(-90)`
        return (
          <g>
            <g className="yaxis" 
               ref="yanchor">
            </g>
            <text className='yTitle'
                  transform={labelTranslate}> 
              {this.props.yTitle}  </text>
            <g className={styles.xAxis} 
               transform={translate}
               ref="xanchor">
            </g>
          </g> 
        );
    }

}