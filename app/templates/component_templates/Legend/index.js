import React, {Component} from "react";
import _ from 'lodash';

export default class Legend extends Component{

    legendBox(data, index){
      let rectTranslate = `translate(-10, ${index * 20})`

      return(
        <rect key={data}
              width={10}
              height={10} 
              fill={this.props.color(data)}
              transform={rectTranslate}>
        </rect>
              )
    }

    legendText(data, index){


      let textTranslate = `translate(0, ${index * 20})`
      return(

        <text transform={textTranslate}
              key={data}> 
          {data}  
        </text>

        )
    }

    render(){

      let data = _.keys(_.groupBy(this.props.data, d=> d[this.props.grouping]))

      let rightLegendTextTranslate = `translate(${this.props.width-this.props.rightMargin*2},${this.props.topMargin})`,
          rightLegendBoxTranslate = `translate(${this.props.width-this.props.rightMargin*2.1},${this.props.topMargin*0.7})`

      let leftLegendTextTranslate = `translate(${this.props.leftMargin - 130},${this.props.topMargin})`,
          leftLegendBoxTranslate = `translate(${this.props.leftMargin - 135},${this.props.topMargin*0.7})`
      
        if(this.props.legendPosition === "right") {
            return (
        <g className="legend"
           transform="translate(100,0)">
        <g transform={rightLegendTextTranslate}> 
         {data.map(this.legendText.bind(this))}
        </g> 
        <g transform={rightLegendBoxTranslate}> 
        {data.map(this.legendBox.bind(this))}
        </g>
        </g>
        )}

        if(this.props.legendPosition === "left") {
            return (
        <g className="legend"
           transform="translate(100,0)">
        <g transform={leftLegendTextTranslate}> 
         {data.map(this.legendText.bind(this))}
        </g> 
        <g transform={leftLegendBoxTranslate}> 
        {data.map(this.legendBox.bind(this))}
        </g>
        </g>
        )}

        else{
            return(
                null)
        }

    }
}