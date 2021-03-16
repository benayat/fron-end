import './spinner.css';
import React from 'react';
class Spinner extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Spinner: props.Spinner,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { Spinner: 'remove' };
      });
    }, 5000);
  }

  render() {
    return <div className={this.state.Spinner}></div>;
  }
}
export default Spinner;
