import React from 'react';

class ComponentExample extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: 'black',
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'green' });
    }, 1000);
  }
  componentDidUpdate() {
    document
      .querySelector('#div')
      .insertAdjacentText(
        'afterbegin',
        `the updated favorite color is: ${this.state.favoriteColor}`
      );
  }

  render() {
    return [
      <div id="div"></div>,
      <h1>My favorite color is {this.state.favoriteColor}</h1>,
    ];
  }
}
export default ComponentExample;
