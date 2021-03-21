import './DataManager.css';
import { Component } from 'react';
import Name from './Name';
import Card from './card';
class DataManager extends Component {
  constructor(props) {
    super(props);
    const names = props.data.map((x) => x.name);
    const beforeNintyNinty = props.data.filter(
      (x) => parseInt(x.birthday.slice(-4)) < 1990
    );
    this.state = {
      names: names,
      beforeNintyNinty: beforeNintyNinty,
    };
  }
  render() {
    const { names, beforeNintyNinty } = this.state;
    return [
      <div className="names">
        {names.map((name) => (
          <Name name={name} />
        ))}
      </div>,
      <div className="cards">
        {beforeNintyNinty.map((object) => (
          <Card card={object} />
        ))}
      </div>,
    ];
  }
}
export default DataManager;
