import './App.css';
import React from 'react';
import Select from './components/Select';
import TextInput from './components/TextInput';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInputs = [];
    this.labels = ['first name', 'last name', 'free text'];
    this.state = {
      inputs: [],
      submit: false,
      buttons: [
        <Button
          type="button"
          text="Continue"
          onClick={this.onContinue.bind(this)}
        />,
      ],
    };
    this.currentState = {};
  }

  onSubmit(event) {
    event.preventDefault();
    alert("that's it! you finished!");
  }
  onReset() {
    this.setState(this.currentState);
  }
  onContinue() {
    this.currentState = this.state;
    this.setState({ submit: true });
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const age = this.state.Age;
    const freeText = this.state.freeText;
    this.setState({
      inputs: [firstName, lastName, age, freeText].map((x) => <div>{x}</div>),
    });
    this.updateButtons();
  }
  handleChange(i, event) {
    switch (i) {
      case 0: {
        this.setState({ firstName: event.target.value });
        break;
      }
      case 1: {
        this.setState({ lastName: event.target.value });
        break;
      }
      case 2: {
        this.setState({ freeText: event.target.value });
        break;
      }
      case 3: {
        this.setState({ Age: event.target.value });
        break;
      }
      default:
        break;
    }
  }
  updateProps() {
    this.textInputs = [];
    for (let i = 0; i < 3; i++) {
      this.textInputs.push(
        <TextInput
          id={i}
          labelText={this.labels[i]}
          onChange={this.handleChange.bind(this, i)}
        />
      );
    }
    const select = <Select onChange={this.handleChange.bind(this, 3)} />;
    return [this.textInputs[0], this.textInputs[1], select, this.textInputs[2]];
  }
  updateButtons() {
    this.setState({
      buttons: (
        <div>
          <Button type="reset" text="back" />
          <Button type="submit" text="Send Survey" />
        </div>
      ),
    });
  }
  componentDidMount() {
    this.setState({ inputs: this.updateProps() });
  }

  //plan: make a function to do all changes.
  render() {
    return (
      <form
        className="container"
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        {[this.state.inputs, this.state.buttons]}
      </form>
    );
  }
}
export default App;
