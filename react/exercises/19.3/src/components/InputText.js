import { useRef } from 'react';

const InputText = (props) => {
  // let [value, setValue] = useState('');
  return (
    <div>
      <label key={props.name}>
        {props.name}
        <input
          type="text"
          name={props.name}
          ref={props.inputRef}
          value={props.value}
          onChange={(e) => props.onChange(e)}
        />
      </label>
    </div>
  );
};
export default InputText;
