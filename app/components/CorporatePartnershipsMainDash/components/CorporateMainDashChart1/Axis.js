import React, { Component } from 'react';
import * as d3 from 'd3';
import styles from './styles.css';

export default class Axis extends Component {
  constructor(props) {
    super();

    this.yAxis = d3.axisLeft();
    this.xAxis = d3.axisBottom();
    this.updateD3(props);
  }

  componentDidMount() {
    this.renderYAxis();
    this.renderXAxis();
  }
  componentDidUpdate() {
    this.renderYAxis();
    this.renderXAxis();
  }

  updateD3(props) {
    this.yAxis.scale(props.yscale);
    this.xAxis.scale(props.xscale);
  }

  componentWilLRecieveProps(newProps) {
    this.updateD3(newProps);
  }

  renderYAxis() {
    const node = this.yanchor;
    d3.select(node).call(this.yAxis);
  }

  renderXAxis() {
    const node = this.xanchor;
    d3.select(node).call(this.xAxis)
                   .selectAll('text')
                   .attr('class', 'xTickLabels')
                   .attr('y', 0)
                   .attr('x', 9)
                   .attr('dy', '.45em')
                   .attr('transform', 'rotate(45)')
                   .style('text-anchor', 'start');
  }

  render() {
    const xTranslate = `translate(0,${this.props.height})`;
    const yTranslate = `translate(${this.props.margin.left}, 0)`;
    const labelTranslate = `translate(${-this.props.padding.left},${this.props.height})rotate(-90)`;
    return (
      <g>
        <g
          transform={yTranslate}
          className="yaxis"
          ref={(c) => { this.yanchor = c; }}
        >
        </g>
        <text
          className="yTitle"
          transform={labelTranslate}
        >
            {this.props.yTitle}
        </text>
        <g
          className={styles.xAxis}
          transform={xTranslate}
          ref={(c) => { this.xanchor = c; }}
        >
        </g>
      </g>
        );
  }
}

Axis.propTypes = {
  margin: React.PropTypes.object,
  padding: React.PropTypes.object,
  height: React.PropTypes.number,
  yTitle: React.PropTypes.string,
};
