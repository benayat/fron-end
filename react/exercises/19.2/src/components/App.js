import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputText from './InputText';
const App = () => {
  const [data, setData] = useState(null);
  const [dataMapped, setDataMapped] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const loader = async () => {
      const tempData = await axios.get('https://restcountries.eu/rest/v2/all');
      setData(tempData.data);

      console.log(data);
    };
    loader();
  }, []);
  useEffect(() => {
    if (data) {
      setDataMapped(data.map((x) => <div>{x.name}</div>));
    }
  }, [data]);
  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filterRegex = new RegExp(`^${e.target.value}`);
    const filteredData = data.filter((x) => filterRegex.test(x.name));
    setDataMapped(filteredData.map((x) => <div>{x.name}</div>));
  };

  return (
    <div>
      <InputText name="search" value={searchValue} onChange={onChange} />
      {data && dataMapped}
    </div>
  );
};
export default App;
