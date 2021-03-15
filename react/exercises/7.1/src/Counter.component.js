import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      onClick: this.setState({ currentValue: this.state.currentValue + 1 }),
    });
  }
  render() {
    return [
      <button onClick={this.handleClick}>increment</button>,
      <label> {this.state.currentValue}</label>,
    ];
  }
}
export default Counter;
