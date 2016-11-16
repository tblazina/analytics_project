import React, { Component } from 'react';
import styles from './styles.css';

export default class Legend extends Component {
  legendBox(data, index) {
    const rectTranslate = `translate(0, ${index * 24})`;
    return (
      <rect
        className={styles.rect}
        key={data}
        width={13}
        height={13}
        fill={this.props.color(data)}
        transform={rectTranslate}
      >
      </rect>
      );
  }

  legendText(data, index) {
    if (index === 0) {
      const textTranslate = `translate(0, ${index})`;
      return (
        <text transform={textTranslate} key={data}>
          {data}
        </text>);
    }

    const textTranslate = `translate(0, ${index * 25})`;
    return (
      <text transform={textTranslate} key={data}>
        {data}
      </text>);
  }

  render() {

    const data = this.props.stacks.reverse();
    const rightLegendTextTranslate = `translate(${this.props.width + this.props.margin.right}, ${this.props.margin.top})`;
    const rightLegendBoxTranslate = `translate(${this.props.width}, ${this.props.margin.top / 2})`;
    const leftLegendTextTranslate = `translate(${this.props.margin.left}, ${this.props.margin.top})`;
    const leftLegendBoxTranslate = `translate(${this.props.margin.left - this.props.margin.left}, ${this.props.margin.top - this.props.margin.top / 3 })`;
    if (this.props.legendPosition === 'right') {
      return (
        <g className="legend" transform="translate(0,0)">
          <g transform={rightLegendTextTranslate}>
            {data.map(this.legendText.bind(this))}
          </g>
          <g transform={rightLegendBoxTranslate}>
            {data.map(this.legendBox.bind(this))}
          </g>
        </g>
        );
    }

    if (this.props.legendPosition === 'left') {
      return (
        <g className="legend" transform="translate(100,0)">
          <g transform={leftLegendTextTranslate}>
            {data.map(this.legendText.bind(this))}
          </g>
          <g transform={leftLegendBoxTranslate}>
            {data.map(this.legendBox.bind(this))}
          </g>
        </g>);
    }

    return (
        null);
  }
}

Legend.propTypes = {
  color: React.PropTypes.func,
  stacks: React.PropTypes.array,
  legendPosition: React.PropTypes.string,
  width: React.PropTypes.number,
  margin: React.PropTypes.object,
  padding: React.PropTypes.object,
};
