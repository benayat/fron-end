import axios from 'axios';
import Form from '../components/Form.component';
import baseURL from '../data&api/api';
import React, { Component, Fragment } from 'react';

class CreateMain extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { nextId: 1 };
  }
  async create(name, imageURL) {
    try {
      const URL = baseURL + 'ingredientList';
      const response = await axios.post(URL, {
        name: name,
        imageURL: imageURL,
      });
      if (response.status !== 201) {
        throw Error('failed');
      }
      console.log(response);
      const id = this.state.nextId + 1;
      const getResult = (
        await axios.get(baseURL + 'ingredientList/' + this.state.nextId)
      ).data;
      this.setState({ nextId: id });
      this.props.onSubmit(getResult);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Fragment key="foodList">
        <Form
          type="create"
          create={this.create.bind(this)}
          id={this.state.nextId}
        />
      </Fragment>
    );
  }
}

export default CreateMain;
