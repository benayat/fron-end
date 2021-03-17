import React from 'react';
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.type = props.type;
    this.text = props.text;
  }
  render() {
    const button =
      this.type === 'button' ? (
        <button onClick={this.props.onClick.bind(this)}>{this.text}</button>
      ) : (
        <button type={this.type}>{this.text}</button>
      );
    return button;
  }
}
export default Button;
