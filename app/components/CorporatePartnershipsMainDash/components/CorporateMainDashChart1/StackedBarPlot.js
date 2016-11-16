/**
*
* CorporateMainDashStackedBarPlot1
*
*/

import React, { Component } from 'react';
import * as d3 from 'd3';
import Axis from './Axis';
import Legend from './Legend';
import styles from './styles.css';

export default class StackedBarPlot extends Component {
  constructor(props) {
    super();
    // Scales for plot
    this.xScale = d3.scaleBand();
    this.yScale = d3.scaleLinear();
    this.color = d3.scaleOrdinal(d3.schemeCategory20b);
    this.stack = d3.stack();
    // updateD3 method which is called with original props
    this.updateD3(props);
  }

  // This will make sure the plot updates when it recieves new properties from
  // parent (Chart)
  componentWillReceiveProps(newProps) {
    this.updateD3(newProps);
  }


  // this defines groups from stacked data
  getColor(groups, passedProps, index) {
    const props = {
      fill: this.color(groups.key),
      key: groups.key,
    };
    return (
      <g {...props}>
        {groups.map((d) => {
          const propsNew = {
            x: this.xScale(d.data[passedProps.xName]),
            y: this.yScale(d[1]),
            height: this.yScale(d[0]) - this.yScale(d[1]),
            width: this.xScale.bandwidth() / 1.2, // dividing by 1.2 adds spaces between bars
            groupKey: groups.key,
            stacks: passedProps.stacks,
            topBarText: passedProps.topBarText,
            barText: d.data[passedProps.barText],
            key: (`${groups}-${index}`) };
          return (
                this.bars(propsNew));
        })}

        {/* {groups.map(this.makeBar.bind(this))} */}
      </g>
      );
  }

  bars(props) {
    const translate = `translate(${props.x}, ${props.y})`;
    const topBar = props.stacks.slice(-1)[0];

    // Don't insert text unless top bar
    if (props.groupKey !== topBar) {
      return (
        <g transform={translate} className={styles.rect} key={Math.random()}>
          <rect
            width={props.width}
            height={props.height}
            transform="translate(0,1)"
          >
          </rect>
        </g>
      );
    }
    const barWidth = 0;
    // let barWidth = parseInt(props.width) / 5;  // moves bar text position left, right

    // Don't insert text on top bar unless topBarText is true
    if (props.topBarText) {
      return (
        <g transform={translate} className={styles.rect} key={Math.random()}>
          <rect
            width={props.width}
            height={props.height}
            transform="translate(0,1)"
          >
          </rect>
          <text
            className={styles.barText}
            transform={`translate(${barWidth}, -2)`}
          >
            {`${props.barText}%`}
          </text>
        </g>);
    }

    return (
      <g transform={translate} className={styles.rect} key={Math.random()}>
        <rect
          width={props.width}
          height={props.height}
          transform="translate(0,1)"
        >
        </rect>
      </g>);
  }

  updateD3(props) {
    // Give xScale the domain and range for our data
    this.xScale
        .range([props.margin.left + 2, props.width])
        .domain(props.data.map((d) => d[props.xName]
            ));

    // Give yScale the domain and range for our data

    this.yScale
        .range([props.height, 0])
        .domain([0, d3.max(props.data, (d) => d[props.yName])])
        ;
  }

  render() {
    const translate = `translate(${this.props.margin.left}, ${this.props.margin.top})`;
    const datastack = this.stack.keys(this.props.stacks);
    const groups = datastack(this.props.data);

    return (
      <g transform={translate}>
        <Legend
          {...this.props}
          groups={groups}
          color={this.color}
          yscale={this.yScale}
          xscale={this.xScale}
        />
        <g>
          {groups.map((d) => this.getColor(d, this.props))}
        </g>
        <Axis
          {...this.props}
          yscale={this.yScale}
          xscale={this.xScale}
        />
      </g>
    );
  }
}

StackedBarPlot.propTypes = {
  colorScheme: React.PropTypes.array,
  stacks: React.PropTypes.array,
  margin: React.PropTypes.object,
  data: React.PropTypes.array,
};
