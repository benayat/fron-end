import { useState } from 'react';
import InputText from './InputText';
const App = () => {
  let [values, setValues] = useState([
    { name: 'Seconds', value: 0 },
    { name: 'Minutes', value: 0 },
    { name: 'Hours', value: 0 },
  ]);
  const onChange = (e) => {
    switch (e.target.name) {
      case 'Seconds':
        setValues(
          values.map((x, index) => {
            return { name: x.name, value: e.target.value * 60 ** -index };
          })
        );
        break;
      case 'Minutes':
        setValues(
          values.map((x, index) => {
            return { name: x.name, value: e.target.value * 60 ** (-index + 1) };
          })
        );
        break;
      case 'Hours':
        setValues(
          values.map((x, index) => {
            return { name: x.name, value: e.target.value * 60 ** (-index + 2) };
          })
        );
        break;
      default:
        break;
    }
  };
  const time = values.map((x) => {
    return <InputText name={x.name} value={x.value} onChange={onChange} />;
  });
  return <div>{time}</div>;
};
export default App;
