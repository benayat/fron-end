import { Component } from 'react';
//onChange
class InputText extends Component {
  onChange(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <label>
        {this.props.type}:
        <input
          type="text"
          name={this.props.type}
          onChange={this.onChange.bind(this)}
        />
      </label>
    );
  }
}
export default InputText;
