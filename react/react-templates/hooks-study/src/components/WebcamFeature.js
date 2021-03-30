import './styles/Webcam.css';
import React, { Fragment, useRef } from 'react';
import Webcam from 'react-webcam';

const WebcamFeature = (props) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const onCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    props.onCapture(imageSrc);
  };
  const onUserMedia = () => {
    return;
  };

  return (
    <Fragment>
      <Webcam
        className="webcam"
        audio="false"
        onUserMedia={onUserMedia}
        ref={webcamRef}
      />
      <button onClick={onCapture}>capture</button>
      {imgSrc && <img alt="webcamPic" src={imgSrc} />}
    </Fragment>
  );
};
export default WebcamFeature;
