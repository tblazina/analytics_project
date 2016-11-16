/*
Product Sales since the start of the week 
*/

import React, { Component } from 'react';
import * as d3 from 'd3';
import Axis from './Axis';
import Legend from './Legend';
import styles from './styles.css';

class Bars extends Component{

  render(){

    let translate = `translate(${this.props.x}, ${this.props.y})`;
    
    return(
      <g transform={translate} className={styles.rects}>
        <rect width={this.props.width}
              height={this.props.height}
              transform="translate(0,1)"
              fill={this.props.fill}
              >
        </rect>
      </g>
      )
  }
}

export default class ProductBarPlot extends Component{ 
  constructor(props){
    super();
    
    // Scales for plot
    this.xScale = d3.scaleBand()                    
    this.yScale = d3.scaleLinear()
    this.color = d3.scaleOrdinal(props.colorScheme)
    this.update_d3(props)
    }

  makeBars(data){

    let props = { x: this.xScale(data[this.props.xName]),
                  y: this.yScale(data[this.props.yName]),
                  height: (this.props.height - this.yScale(data[this.props.yName])),
                  width: this.xScale.bandwidth()/1.2 + 'px',
                  fill: this.color(data[this.props.grouping]),
                  key: ("histogram-bar-"+ Math.random())
                    }
    return(
        <Bars {...props} />
        )
  }

  componentWillReceiveProps(newProps){
    this.update_d3(newProps);
  }

  update_d3(props){

    // Give xScale the domain and range for our data
    this.xScale
        .domain(props.data.map(d => { return d[props.xName];}))               
        .range([0, props.width], 0.1);

    //Give yScale the domain and range for our data
    this.yScale
        .domain([0, d3.max(props.data, d => { return d[props.yName]; })])
        .range([props.height, 0]);
    }

 render(){
    
    let translate = `translate(${this.props.margins.left}, ${this.props.margins.top})`;
    return(
        <g className={styles.barPlot} transform={translate}>
            <Legend {...this.props} color={this.color}/>
         <g className="bars">
            {this.props.data.map(this.makeBars.bind(this))}
         </g>
         <Axis className={styles.Axes} {...this.props} yscale={this.yScale} xscale={this.xScale}/>
        </g>
        )
    }
 }