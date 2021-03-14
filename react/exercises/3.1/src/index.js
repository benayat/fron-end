import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import Box1 from './Box1';
const App = () => {
  return (
    <div className="ui container comments">
      <Box1 />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
