import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
// import Products from './Products';
// import ProductDetails from './ProductDetails';
import axios from 'axios';
import baseURL from '../data&api/api';
import UpdateMain from './UpdateMain';
import DeleteMain from './DeleteMain';
import CreateMain from './CreateMain';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [],
    };
  }
  async componentDidMount() {
    const foods = (await axios.get(baseURL + '/ingredientList')).data;
    this.setState({ foods });
  }
  render() {
    return (
      <div key="routes" className="ui container">
        <HashRouter>
          <Route path="/" component={HomePage} />
          <Route path="/CreateMain" exact component={CreateMain} />
          <Route path="/DeleteMain" exact component={DeleteMain} />
          <Route path="/UpdateMain" exact component={UpdateMain} />
        </HashRouter>
      </div>
    );
  }
}
export default App;
