import '../componentsStyle/card.css';
import { Component } from 'react';
//props: id,name,imageURL.
class Card extends Component {
  render() {
    return (
      <div className="card" key={this.props.id}>
        <h4>{this.props.id}</h4>
        <h2>{this.props.name}</h2>
        <h4>{this.props.date}</h4>
        <img alt="food" src={this.props.imageURL} />
      </div>
    );
  }
}
export default Card;
