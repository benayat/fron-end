import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ChuckJokes from './ChuckJokes';

const App = () => {
  return (
    <div className="buttonsBar">
      <ChuckJokes />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
