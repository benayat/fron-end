import React from 'react';
import './App.css';
import QuizTitle from './QuizTitle';
import Q1 from './Q1';
import Q2 from './Q2';

const array = [<QuizTitle />, <Q1 />, <Q2 />];

function App() {
  return <div className="wrapper">{array}</div>;
}

export default App;
