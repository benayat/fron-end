import './InputText.css';
import { Component } from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: '' };
  }
  onChange(e) {
    this.setState({ currentValue: e.target.value });
  }
  render() {
    return (
      <div className="inputContainer">
        <input
          type="text"
          id="input"
          name="filter"
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}
export default InputText;
