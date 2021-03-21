import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import DataManager from './DataManager';
const App = () => {
  return <DataManager data={data} />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
