import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import InputText from './InputText';
import Loader from './Loader';
const App = () => {
  const [data, setData] = useState(null);
  const [dataMapped, setDataMapped] = useState(null);
  const [searchValue, setSearchValue] = useState('hooks');
  const [error, setError] = useState('');
  let InputTextRef;
  useEffect(() => {
    const loader = async () => {
      try {
        const tempData = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${searchValue}`
        );
        if (!tempData.data.hits.length) throw 'not found!';
        setData(tempData.data.hits);
      } catch (error) {
        setData(null);
        setError(error);
      }

      console.log(data);
    };
    loader();
  }, []);
  useEffect(() => {
    if (data) {
      setDataMapped(data.map((x) => <div key={x.title}>{x.title}</div>));
    }
  }, [data]);
  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  const onClick = async () => {
    const update = async () => {
      try {
        const tempData = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${searchValue}`
        );
        if (!tempData.data.hits.length) throw 'not found!';
        setSearchValue(InputTextRef.value);
        setData(tempData.data.hits);
      } catch (error) {
        setData(null);
        setError(error);
      }
    };
    update();
  };

  return (
    <div>
      <InputText
        key="input"
        name="search"
        value={searchValue}
        inputRef={(e) => (InputTextRef = e)}
        onChange={onChange}
      />
      <button key="searchButton" onClick={onClick}>
        Search
      </button>
      {(data && dataMapped) || <Loader error={error} />}
    </div>
  );
};
export default App;
