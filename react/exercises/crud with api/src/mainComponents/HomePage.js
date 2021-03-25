import '../style/homePage.css';
import { Component, Fragment } from 'react';
import Card from '../components/Card.component';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { foods: [] };
  }

  onSubmit(object) {
    if (typeof object === 'number') {
      const id = object;
      const updatedArray = this.state.foods.filter((x) => x.id !== id);
      this.setState({ foods: updatedArray });
    } else if (
      typeof this.state.foods.find((x) => x.id === object.id) === 'undefined'
    ) {
      this.setState({ foods: [...this.state.foods, object] });
    } else {
      let foods = this.state.foods;
      foods[object.id] = object;
    }
  }
  render() {
    let foods = this.state && this.state.foods;
    if (foods.length > 0) {
      foods = foods.map((x) => (
        <Card id={x.id} name={x.name} date={x.date} imageURL={x.imageURL} />
      ));
    }
    const onSubmit = this.onSubmit.bind(this);
    return (
      <Fragment key="AllPermanentContent">
        <div key="links" className="links">
          <Link
            to={{
              pathname: '/CreateMain',
              state: { onSubmit, foods },
            }}
            className="item"
          >
            add food
          </Link>
          <Link
            to={{
              pathname: '/DeleteMain',
              state: { onSubmit, foods },
            }}
            className="item"
          >
            delete food
          </Link>
          <Link
            to={{ pathname: '/UpdateMain', state: { onSubmit, foods } }}
            className="item"
          >
            update food
          </Link>
        </div>
        <div className="allCards" key="allCards">
          {foods}
        </div>
      </Fragment>
    );
  }
}
export default HomePage;
