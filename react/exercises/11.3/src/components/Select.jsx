import React from 'react';
class Select extends React.Component {
  state = {};
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  }
  render() {
    return (
      <label>
        Age:
        <select
          value={this.state.value || '0-15'}
          onChange={this.handleChange.bind(this)}
        >
          <option value="0-15">0-15</option>
          <option value="16-20">16-20</option>
          <option value="20-50">21-50</option>
          <option value="51-70">51-70</option>
        </select>
      </label>
    );
  }
}
export default Select;
