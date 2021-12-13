/*

import React from 'react';
import { render } from 'react-dom';


const RandomElem = () => {
  return (
      <div id="contenedorBotonRandom">
      </div>
  )
}

export default RandomElem




class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const Rand = min + Math.random() * (max - min);
    this.setState({ random: this.state.random + Rand });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div>The number is: {this.state.random}</div>
      </div>
    );
  }
}

render(<Button />, document.getElementById('contenedorBotonRandom'));
*/