import React from 'react';
import SeasonDisplay from './SeasonDisplay.component';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //* error! memory leak! how do I fix this? probabely async or something like that.
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading:</div>;
    }
  }
}
export default App;
