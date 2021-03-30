import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button';

const ChuckJokes = (props) => {
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [categories, setCategories] = useState(null);
  const [jokeLoaded, setJokeLoaded] = useState(false);
  const [joke, setJoke] = useState('');
  const [jokeJSX, setJokeJSX] = useState(null);
  const [Buttons, setButtons] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const categoriesTemp = (
          await axios.get(`https://api.chucknorris.io/jokes/categories`)
        ).data;
        setCategories(categoriesTemp);
        setCategoriesLoaded(true);
      } catch (error) {
        console.error(error);
      }
    }
    load();
  }, []);
  const onClick = async (e) => {
    const category = e.target.innerText;
    try {
      const randomJoke = (
        await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${category}`
        )
      ).data.value;
      setJoke(randomJoke);
      setJokeLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };
  if (categoriesLoaded && !Buttons) {
    setButtons(
      <div key="buttons">
        {categories.map((category) => {
          return <Button key={category} id={category} onClick={onClick} />;
        })}
      </div>
    );
  }
  if (jokeLoaded && !jokeJSX) {
    setJokeJSX(<div key="joke">{joke}</div>);
  }
  return (
    <Fragment>{[categoriesLoaded && Buttons, jokeLoaded && joke]}</Fragment>
  );
};

export default ChuckJokes;
