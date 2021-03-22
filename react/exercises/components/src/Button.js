import './button.css';
import { Component } from 'react';
import InputText from './InputText';
class Button extends Component {
  onClick() {
    const filter = document.getElementById('input').value;
    const currentCardsFiltered = this.props.cards.filter((card) =>
      new RegExp(`^${filter}`).test(card.name)
    );
    this.props.filterFunc(currentCardsFiltered);
  }
  render() {
    return (
      <div className="buttonContainer">
        <InputText />
        <button
          type="button"
          className="filter"
          onClick={this.onClick.bind(this)}
        >
          filter
        </button>
      </div>
    );
  }
}
export default Button;
