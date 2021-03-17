import './CustomButton.css';
import React from 'react';

class CustomButton extends React.Component {
  render() {
    return (
      <button
        class={this.props.color}
        onClick={() => this.props.onClick(this.props.color)}
      >
        {this.props.color}
      </button>
    );
  }
}
export default CustomButton;
