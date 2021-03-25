import axios from 'axios';
import { Component, Fragment } from 'react';
import Form from '../components/Form.component';
import baseURL from '../data&api/api';

class DeleteMain extends Component {
  //still need ro remove!!!
  async delete(id) {
    try {
      const response = await axios.delete(baseURL + '/ingredientList/' + id);
      if (response.status !== 200) throw Error("couldn't delete food");
      this.setState({
        id: id - 1,
      });
      this.props.location.onSubmit(id);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <Fragment key="foodList">
        <Form type="delete" delete={this.delete.bind(this)} />
      </Fragment>
    );
  }
}

export default DeleteMain;
