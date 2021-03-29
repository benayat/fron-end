import '../componentsStyle/form.css';
import { Component, Fragment } from 'react';
import Button from './Button.component';
import InputText from './inputText.component';
//props: id, create(function: name, URL)
class Form extends Component {
  state = {
    name: '',
    imageURL: '',
    id: '',
  };
  onChange(e) {
    const text = e.target.value,
      type = e.target.name;
    switch (type) {
      case 'name':
        this.setState({ name: text });
        break;
      case 'URL':
        this.setState({ imageURL: text });
        break;
      case 'id':
        this.setState({ id: text });
        break;
      default:
        break;
    }
  }

  onSubmit(event) {
    event.preventDefault();

    switch (this.props.type) {
      case 'create':
        this.props.create(this.state.name, this.state.imageURL);
        break;
      case 'delete':
        this.props.delete(this.state.id);
        break;
      case 'update':
        this.props.update(this.state.id, this.state.name, this.state.imageURL);
        break;
      default:
        break;
    }
  }
  render() {
    let formParts;
    switch (this.props.type) {
      case 'create':
        formParts = (
          <Fragment key="createForm">
            <InputText type="name" onChange={this.onChange.bind(this)} />
            <InputText type="URL" onChange={this.onChange.bind(this)} />
            <Button />
          </Fragment>
        );
        break;
      case 'delete':
        formParts = (
          <Fragment key="deleteForm">
            <InputText type="id" onChange={this.onChange.bind(this)} />
          </Fragment>
        );
        break;
      case 'update':
        formParts = (
          <Fragment key="updateForm">
            <InputText type="id" onChange={this.onChange.bind(this)} />
          </Fragment>
        );
        break;
      default:
        break;
    }
    return (
      <Fragment key={this.props.id}>
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          {formParts}
        </form>
      </Fragment>
    );
  }
}
export default Form;
