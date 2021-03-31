import React from 'react';
import Image from './Image';

const App = () => {
  return (
    <div>
      <Image srcBW="images/bikeBW.jpg" srcColor="images/bikeColor.jpg" />
      <Image
        srcBW="images/caesariaBW.jpg"
        srcColor="images/caesariaColor.jpeg"
      />
    </div>
  );
};

export default App;
