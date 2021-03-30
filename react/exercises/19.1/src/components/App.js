import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [dataMapped, setDataMapped] = useState(null);
  useEffect(() => {
    const loader = async () => {
      const tempData = await axios.get('https://swapi.dev/api/films/1/');
      setData(tempData.data);

      console.log(data);
    };
    loader();
  }, []);
  useEffect(() => {
    if (data) {
      setDataMapped(
        <div>
          {data.title}
          <br /> {data.director}
        </div>
      );
    }
  }, [data]);

  return <div>{data && dataMapped}</div>;
};
export default App;
