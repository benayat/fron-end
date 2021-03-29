import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import baseURL from '../data&api/api';
import HomePage from './HomePage';

import axios from 'axios';
import CreateMain from './CreateMain';
import Form from '../components/Form.component';
import DeleteMain from './DeleteMain';
import UpdateMain from './UpdateMain';
import Card from '../components/Card.component';
// import UpdateMain from './UpdateMain';
// import DeleteMain from './DeleteMain';
// import CreateMain from './CreateMain';

const App = async () => {
  // async componentDidMount() {
  //   const foods = (await axios.get(baseURL + '/ingredientList')).data;
  //   this.setState({ foods });
  // }
  const [foods, setFoods] = useState([]);
  const getAllFoods = async () => await axios.get(baseURL + 'ingredientList');
  useEffect(() => {
    setFoods(getAllFoods());
  }, []);
  let foodsTemp = foods;

  const onSubmit = (object) => {
    if (typeof object === 'number') {
      const id = object;
      const updatedArray = foodsTemp.filter((x) => x.id !== id);
      setFoods(updatedArray);
      return;
    } else if (
      typeof foodsTemp.find((x) => x.id === object.id) === 'undefined'
    ) {
      foodsTemp = [...foodsTemp, object];
    } else {
      foodsTemp[object.id] = object;
    }
    setFoods(foodsTemp);
  };
  useEffect(() => {
    setFoods(foods);
  }, [foods]);
  const foodCards = foods.map((x) => (
    <Card id={x.id} name={x.name} date={x.date} imageURL={x.imageURL} />
  ));
  return (
    <div key="routes" className="ui container">
      <BrowserRouter>
        <Route path="/">
          <HomePage foods={foods} />
        </Route>
        <Route exact path="/CreateMain">
          <CreateMain onSubmit={onSubmit}>
            <Form></Form>
          </CreateMain>
        </Route>
        <Route exact path="/DeleteMain">
          <DeleteMain onSubmit={onSubmit} />
        </Route>
        <Route exact path="/UpdateMain">
          <UpdateMain onSubmit={onSubmit} />
        </Route>
      </BrowserRouter>
      <div className="foodCards">{foodCards}</div>
    </div>
  );
};
export default App;
