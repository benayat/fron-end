import './component.css';
import React from 'react';

class ComponentExample extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { className: this.props.classAdd };
      });
      setTimeout(() => {
        this.setState({ className: 'disappear' });
      }, 4000);
    }, 1000);
  }
  componentDidUpdate() {
    document.querySelector(
      `#${this.props.id}`
    ).className = this.state.className;
  }

  render() {
    return [<div id={this.props.id}></div>];
  }
}
export default ComponentExample;
