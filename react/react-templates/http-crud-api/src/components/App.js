import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import InputText from './InputText';
const App = () => {
  const [data, setData] = useState(null);
  const [dataMapped, setDataMapped] = useState(null);
  const [searchValue, setSearchValue] = useState('hooks');
  let InputTextRef;
  useEffect(() => {
    const loader = async () => {
      const tempData = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchValue}`
      );
      setData(tempData.data.hits);

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
      const tempData = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchValue}`
      );
      setSearchValue(InputTextRef.value);
      setData(tempData.data.hits);
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
      {data && dataMapped}
    </div>
  );
};
export default App;
