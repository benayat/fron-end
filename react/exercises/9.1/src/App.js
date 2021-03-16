import './App.css';
import React from 'react';
import Spinner from './Spinner';

class App extends React.Component {
  constructor() {
    super();
    const spinnerArray = [
      'spinner spinner-1',
      'spinner spinner-2',
      'trafic-light-1 light',
    ];
    this.Spinner = spinnerArray[Math.floor(Math.random() * 3)];
    this.state = {
      Spinner: this.Spinner,
    };
  }

  render() {
    return (
      <div className="container">
        <Spinner Spinner={this.state.Spinner} />
      </div>
    );
  }
}
export default App;
