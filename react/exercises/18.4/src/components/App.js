import { useState } from 'react';
import CheckBox from './CheckBox';
import Button from './Button';
const App = () => {
  const initialStateValues = ['one', 'two', 'three', 'four', 'five'];
  const initialStateChecked = [false, false, false, false, false];
  let [values, setValues] = useState(initialStateValues);
  let [checked, setChecked] = useState(initialStateChecked);

  const onChange = (e) => {
    const index = values.indexOf(e.target.name);
    setChecked([
      ...checked.slice(0, index),
      e.target.checked,
      ...checked.slice(index + 1),
    ]);
  };

  const onClick = (e) => {
    switch (e.target.name) {
      case 'delete': {
        setValues(
          values.filter((x, index) => {
            return !checked[index];
          })
        );
        setChecked(checked.filter((x) => !x));
        break;
      }
      case 'reset': {
        setValues(initialStateValues);
        setChecked(initialStateChecked);
        break;
      }
      default:
        break;
    }
  };
  const numbers = values.map((x, index) => {
    return <CheckBox name={x} checked={checked[index]} onChange={onChange} />;
  });
  return [
    <div>
      <div key="buttons">
        <Button name="delete" onClick={onClick} />
        <Button name="reset" onClick={onClick} />
      </div>
      <div key="checkboxes">{numbers}</div>
    </div>,
  ];
};
export default App;
