import React, { useState } from 'react';
import Button from './Button';
import Data from './Data';

const App = () => {
  const [showData, setShowData] = useState(true);

  const onClick = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <Button id="new request" onClick={onClick} />
      {showData && <Data showData={showData} />}
    </div>
  );
};

export default App;
