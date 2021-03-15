import { render } from '@testing-library/react';
import React from 'react';
import './card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'cardWrapper',
      image: props.image,
      title: props.title,
      description: props.description,
      firstLink: props.links[0],
      secondLink: props.links[1],
    };
  }
  render() {
    return (
      <div className={this.state.className}>
        <img alt="random" src={this.state.image} />
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <span>
          <a href="# ">{this.state.firstLink}</a>{' '}
          <a href="# ">{this.state.secondLink}</a>
        </span>
      </div>
    );
  }
}

export default Card;
