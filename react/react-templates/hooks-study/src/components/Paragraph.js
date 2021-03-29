import React, { Fragment, useState } from 'react';

const Paragraph = (props) => {
  let [hidden, setHidden] = useState(
    props.text.length > props.maxLength ? true : false
  );

  let text = hidden ? props.text.slice(0, props.maxLength) : props.text;

  return (
    <Fragment key="paragraph">
      {text}
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? 'read more' : 'read less'}
      </button>
    </Fragment>
  );
};
export default Paragraph;
