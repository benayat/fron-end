import React, { Component } from 'react';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
    };
    this.myRef = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  onClick() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          just a label:
          <textarea
            value={this.state.value}
            ref={this.myRef}
            onChange={this.handleChange.bind(this)}
          />
        </label>

        <button type="button" onClick={this.onClick.bind(this)}>
          focs
        </button>
      </form>
    );
  }
}
export default Form;
