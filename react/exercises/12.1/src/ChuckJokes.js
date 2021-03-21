import React from 'react';
import axios from 'axios';

class ChuckJokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesLoaded: false,
      jokeLoaded: false,
      joke: '',
    };
  }
  async componentDidMount() {
    const categories = (
      await axios.get(`https://api.chucknorris.io/jokes/categories`)
    ).data;
    this.setState({ categories: categories }, () =>
      this.setState({ categoriesLoaded: true })
    );
  }

  async onClick(e) {
    const category = e.target.innerText;
    const randomJoke = (
      await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      )
    ).data.value;
    this.setState({ joke: randomJoke }, () =>
      this.setState({ jokeLoaded: true })
    );
  }

  render() {
    const { categoriesLoaded, categories } = this.state;
    if (!categoriesLoaded) {
      return <div>still loading...</div>;
    }
    const buttons = [];
    for (let i = 0; i < categories.length; i++) {
      buttons.push(
        <button type="button" onClick={this.onClick.bind(this)}>
          {categories[i]}
        </button>
      );
    }
    const { joke, jokeLoaded } = this.state;
    if (!jokeLoaded) {
      return buttons;
    } else {
      return [
        buttons,
        <div>
          <p>{joke}</p>
        </div>,
      ];
    }
  }
}

export default ChuckJokes;
