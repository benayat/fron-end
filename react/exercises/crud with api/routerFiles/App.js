import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import Products from './Products';
import data from '../data';
import ProductDetails from './ProductDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ids: data.map((x) => x.id),
    };
  }
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetails} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
