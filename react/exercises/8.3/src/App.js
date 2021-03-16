import React from 'react';
import ComponentExample from './ComponentExample.component';
class App extends React.Component {
  render() {
    return [<ComponentExample id="box" classAdd="box" />];
  }
}
export default App;
