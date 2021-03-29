import { Fragment } from 'react';

const Button = (props) => {
  return (
    <Fragment>
      <button type="button" onClick={props.onClick}>
        read more
      </button>
    </Fragment>
  );
};
export default Button;
