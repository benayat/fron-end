import React from 'react';
class CheckBox extends React.Component {
  state = { text: this.props.text, checked: this.props.checked };
  onChange(event) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return [
      <input
        id={this.props.id}
        type="checkbox"
        name="checkBox"
        onChange={this.onChange.bind(this)}
        checked={this.state.checked}
      />,
      <label htmlFor={this.props.id}>{this.state.text}</label>,
    ];
  }
}
export default CheckBox;
