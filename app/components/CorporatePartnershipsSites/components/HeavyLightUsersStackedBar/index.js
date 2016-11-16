import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash'
import styles from './styles.css';
// import Axis from './Axis';
// import Legend from './Legend.jsx'

class Bars extends Component{



  render(){
    
    let translate = `translate(${this.props.x}, ${this.props.y})`
    
    return(
      <g transform={translate} className='bar'>
        <rect width={this.props.width}
              height={this.props.height}
              stroke='black'
              transform="translate(0,1)">
        </rect>
      </g>

      )
  }
}


export default class HeavyLightUsersStackedBarPlot extends Component{ 
  constructor(props){
    super();
    
    // Scales for plot
    this.xScale = d3.scaleBand()                    
    this.yScale = d3.scaleLinear()
    this.color = d3.scaleOrdinal(d3.schemeCategory10)
    this.stack = d3.stack()

    // Update_d3 method which is called with original props
    this.update_d3(props)

  }

  // This will make sure the plot updates when it recieves new properties from
  // parent (Chart)
  componentWillReceiveProps(newProps){
    this.update_d3(newProps);
  }

  update_d3(props) {
  
    // Give xScale the domain and range for our data
    this.xScale
        .range([0, props.chartWidth/1.25], 0.1)
        .domain(props.data.map(d => { return d[props.xName];}))               
;

    //Give yScale the domain and range for our data
    this.yScale
        .range([props.chartHeight/1.5, 0])
        .domain([0, d3.max(props.data, d => { return d[props.yName]; })])
        ;

  }

// This takes each of the groups defined by getColors() sets some properties which is
// passed the <Bars /> component 
  makeBar(groups){
    
    let props = {
        x: this.xScale(groups.data[this.props.xName]),
        y: this.yScale(groups[1]),
        height: this.yScale(groups[0]) - this.yScale(groups[1]),
        width: 50 + 'px',
        key: ("histogram-bar-"+ Math.random()),
    }

    return(
      <Bars {...props}/>
      )
  }

  // this defines groups from stacked data
  getColor(groups){

    let props = {
      fill: this.color(groups.key),
      key: groups.key,
          }
    let number = (groups[0][1] - groups[0][0])      
    let label=(groups.key.split('Users')[0] + '-' + number)

    return(
      <g {...props}>
        {groups.map(this.makeBar.bind(this))} 
        <text 
              x={this.yScale(groups[0][1]) + 10}
              y={-5}
              fontSize={10}
              fill='black'
              transform='rotate(90)'>
              {label}
        </text>  
      </g>)
  }



  render() {

        let translate = `translate(${this.props.margins.left}, ${this.props.margins.top * 1.5})rotate(-90)`,
            datastack = this.stack.keys(this.props.stacks),
            groups = datastack(this.props.data)
            
        return (
                <g className="barplot" transform={translate}>
                {/* <Legend {...this.props} groups={groups} color={this.color}/> */}
                <g className='bars'>
                  {groups.map(this.getColor.bind(this))}
                </g>
 
           {/*     <Axis {...this.props} yscale={this.yScale} xscale={this.xScale}/> */}
                                  </g> 
                ); 
      }
}