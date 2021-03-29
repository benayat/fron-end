import React, { Fragment, useState } from 'react';
import dataArray from '../data';
const ToDoList = () => {
  let [data, setData] = useState(dataArray);
  const List = data.map((x, index) =>
    !x.completed ? (
      <div key={index}>
        {x.name}
        <i
          className="noCross"
          onClick={() => {
            let current = data[index];
            current.completed = true;
            setData([
              ...data.slice(0, index),
              current,
              ...data.slice(index + 1),
            ]);
          }}
        >
          X
        </i>
      </div>
    ) : (
      <div key={index}>
        <del>{x.name}</del>{' '}
        <i
          className="Cross"
          onClick={() => {
            let current = data[index];
            current.completed = false;
            setData([
              ...data.slice(0, index),
              current,
              ...data.slice(index + 1),
            ]);
          }}
        >
          V
        </i>
      </div>
    )
  );
  return <Fragment key="todo">{List}</Fragment>;
};
export default ToDoList;
