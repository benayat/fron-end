import axios from 'axios';
import { useEffect, useState } from 'react';

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const loader = async () => {
      try {
        const tempData = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=hooks`,
          {
            cancelToken: source.token,
          }
        );
        if (!tempData.data.hits.length) throw new Error('not found!');
        setData(tempData.data.hits);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
    return () => {
      source.cancel('axios request canceled');
    };
  }, []);

  return <div>{data && data.map((x) => <div>{x.title}</div>)}</div>;
};
export default Data;
