import axios from 'axios';
import { Component, Fragment } from 'react';
import Form from '../components/Form.component';
import baseURL from '../data&api/api';

class UpdateMain extends Component {
  //still need ro remove!!!
  async update(id, name, URL) {
    try {
      const API = baseURL + `/ingredientList/` + id;
      const responseGet = await axios.get(API);
      if (responseGet.status !== 200) throw Error("id doesn't exist");

      const prevName = responseGet.data.name,
        prevURL = responseGet.data.imageURL;
      const response = await axios.put(baseURL + 'ingredientList/' + id, {
        ...responseGet,
        name: name || prevName,
        imageURL: URL || prevURL,
      });
      if (response.status !== 200) throw Error('not there!');
      this.props.location.onSubmit(id);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <Fragment key="foodList">
        <Form type="update" update={this.update.bind(this)} />
      </Fragment>
    );
  }
}
export default UpdateMain;
