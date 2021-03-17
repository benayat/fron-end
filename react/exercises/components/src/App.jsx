import React from 'react';
import CheckBox from './Checkbox';

class App extends React.Component {
  state = {};

  render() {
    const checkBoxes = [];
    const texts = [
      'I read the terms of the App',
      'I accept the terms of the app',
      'I want to get the weekly newsletter',
      'I want to get sales and offers',
    ];
    for (let i = 0; i < 4; i++) {
      checkBoxes.push([
        <CheckBox id={i} text={texts[i]} checked={i < 2 ? false : true} />,
        <br />,
      ]);
    }
    return checkBoxes;
  }
}
export default App;
