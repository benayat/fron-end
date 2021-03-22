import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataManager from './DataManager';
import Avatar from './Avatar';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = { avatars: null };
  }
  filter(cards) {
    this.setState({ avatars: cards });
  }
  async componentDidMount() {
    const data = await DataManager();
    const avatars = data.map((person) => {
      return <Avatar name={person.name} picture={person.pictureURL} />;
    });
    this.setState({ avatars: avatars, data: data });
  }

  render() {
    const { avatars, data } = this.state;
    if (data && avatars) {
      return (
        <div className="container">
          <div className="searchContainer">
            <Button cards={data} filterFunc={this.filter.bind(this)} />
          </div>
          <div className="avatars">{avatars}</div>
        </div>
      );
    } else return <div>loading...</div>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
