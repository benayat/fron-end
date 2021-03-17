import React from 'react';
import CustomButton from './CustomButton';

class App extends React.Component {
  state = { buttons: <CustomButton /> };

  onClick(param) {
    this.setState({ currentColor: param });
  }

  render() {
    const colors = ['blue', 'red', 'yellow'];
    const buttons = [];
    for (const buttonColor of colors) {
      buttons.push(
        <CustomButton
          onClick={this.onClick.bind(this)}
          color={buttonColor}
          text={buttonColor}
        />
      );
    }
    return [
      buttons,
      <h1 id="headline">The color selected: {this.state.currentColor}</h1>,
    ];
  }
}
export default App;
