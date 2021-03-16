import React from 'react';
import ComponentExample from './ComponentExample.component';
class App extends React.Component {
  render() {
    return [
      <ComponentExample id="box0" classAdd="box0" />,
      <ComponentExample id="box1" classAdd="box1" />,
      <ComponentExample id="box2" classAdd="box2" />,
    ];
  }
}
export default App;
