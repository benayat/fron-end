import { Component, Fragment } from 'react';
//Button: uncontrolled component.

class Button extends Component {
  render() {
    return (
      <Fragment>
        <button className="submitButton" type="submit">
          add food
        </button>
      </Fragment>
    );
  }
}
export default Button;
