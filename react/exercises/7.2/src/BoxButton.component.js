import React from 'react';
import './box-button.css';
class BoxButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.querySelector('.yellow').classList.toggle('disappear');
  }

  render() {
    return (
      <div className="container">
        <button className="toggle" onClick={this.handleClick}>
          show/hide
        </button>
        <div className="yellow"></div>
      </div>
    );
  }
}
export default BoxButton;
