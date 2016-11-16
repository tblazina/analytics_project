/**
*
* Buttons
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class Buttons extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.buttons}>
             <h1>{this.props.value}</h1>
            <button onClick={this.props.incrementAction}>+</button>
            <button onClick={this.props.decrementAction}>-</button>
      </div>
    );
  }
}

export default Buttons;
