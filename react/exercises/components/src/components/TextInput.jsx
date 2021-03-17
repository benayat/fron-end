import React from 'react';
class TextInput extends React.Component {
  state = { value: this.props.value };
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  }
  render() {
    return (
      <label htmlFor={this.props.id}>
        Name:
        <input
          type="text"
          value={this.state.value || ''}
          onChange={this.handleChange.bind(this)}
        />
      </label>
    );
  }
}
export default TextInput;
