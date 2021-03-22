import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.addEventListener('load', () => {
      this.myRef.current.focus();
    });
  }
  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" />
      </div>
    );
  }
}

export default MyComponent;
