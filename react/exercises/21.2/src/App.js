import React, { useRef } from 'react';
import Button from './Button';

const App = () => {
  let videoRef = useRef(null);

  const onClick = (e) => {
    e.target.id === 'play' ? videoRef.current.play() : videoRef.current.pause();
  };

  return (
    <div>
      <video controls loop muted ref={videoRef}>
        <source
          src={'http://techslides.com/demos/sample-videos/small.mp4'}
          type="video/mp4"
        ></source>
      </video>
      <Button id="play" onClick={onClick} />
      <Button id="pause" onClick={onClick} />
    </div>
  );
};

export default App;
