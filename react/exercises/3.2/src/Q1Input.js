import React from 'react';

const Q1Input = () => {
  return [
    <input type="range" list="tickmarks" />,
    <datalist id="tickmarks">
      <option value="0"></option>
      <option value="50"></option>
      <option value="100"></option>
    </datalist>,
  ];
};
export default Q1Input;
