// import { useState } from 'react';

const CheckBox = (props) => {
  // let [value, setValue] = useState('');
  return (
    <div key={props.name}>
      <label>
        {props.name}
        <input
          name={props.name}
          type="checkbox"
          checked={props.checked}
          onChange={(e) => props.onChange(e)}
        />
      </label>
    </div>
  );
};
export default CheckBox;
