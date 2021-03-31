import Webcam from 'react-webcam';
import React from 'react';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const HTMLImage = document.createElement('img');
    HTMLImage.src = imageSrc;
    HTMLImage.alt = 'profilePic';
    HTMLImage.id = 'myImg';
    props.onCapture(HTMLImage);
  }, [webcamRef, props]);

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};
export default WebcamCapture;
