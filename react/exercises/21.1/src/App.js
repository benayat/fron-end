import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import InputText from './InputText';

const App = () => {
  let inputRef = useRef(null);
  const [showInput, setShowInput] = useState(null);
  useEffect(() => {
    showInput && inputRef && inputRef.current && inputRef.current.focus();
  }, [showInput]);
  const onClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      <Button
        id="new request"
        onClick={onClick}
        name={showInput ? 'save' : 'edit'}
      />
      {showInput && <InputText setRef={inputRef} />}
    </div>
  );
};

export default App;
