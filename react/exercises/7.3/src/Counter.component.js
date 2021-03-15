import './counter.css';
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      className: 'black',
    };
    this.handleClickBind = this.handleClick.bind(this);
  }
  handleClick(event) {
    const labelContent = parseInt(document.querySelector('label').textContent);
    this.setState(
      {
        currentValue:
          event.target.className === 'increment' && labelContent < 10
            ? this.state.currentValue + 1
            : event.target.className === 'decrement' && labelContent > -10
            ? this.state.currentValue - 1
            : this.state.currentValue,
      },
      () => {
        this.setState({
          className:
            this.state.currentValue > 0
              ? 'green'
              : this.state.currentValue === 0
              ? 'black'
              : 'red',
        });
      }
    );
  }
  render() {
    return [
      <label className={this.state.className}>{this.state.currentValue}</label>,

      <button className="increment" onClick={this.handleClickBind}>
        increment
      </button>,
      <button className="decrement" onClick={this.handleClickBind}>
        decrement
      </button>,
    ];
  }
}
export default Counter;
