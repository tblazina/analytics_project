import React, {Component} from "react";
import _ from 'lodash';
import styles from './styles.css';

export default class Legend extends Component{

    legendBox(data, index){
      let rectTranslate = `translate(-10, ${index * 20})`;

      return(
        <rect key={data}
              width={10}
              height={10} 
              fill={this.props.color(data)}
              transform={rectTranslate}
              className={styles.rects}>
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

      let rightLegendTextTranslate = `translate(${this.props.width-this.props.margins.right*2},${this.props.margins.top})`,
          rightLegendBoxTranslate = `translate(${this.props.width-this.props.margins.right*2.1},${this.props.margins.top*0.7})`

      let leftLegendTextTranslate = `translate(${this.props.margins.left - 130},${this.props.margins.top})`,
          leftLegendBoxTranslate = `translate(${this.props.margins.left - 135},${this.props.margins.top*0.7})`
      
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