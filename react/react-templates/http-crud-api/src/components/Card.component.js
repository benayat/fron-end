import React from 'react';
import '../componentsStyle/card.css';
//props: id,name,imageURL.
const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <h4>{props.id}</h4>
      <h2>{props.name}</h2>
      <h4>{props.date}</h4>
      <img alt="food" src={props.imageURL} />
    </div>
  );
};

export default Card;
