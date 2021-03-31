import './App.css';
import { useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
import WebcamCapture from './components/WebcamComponent';
// import 'p5/lib/addons/p5.dom';
function App() {
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const load = async () => {
      const MODEL_URL = '/models';
      await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
      await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
      await faceapi.loadFaceRecognitionModel(MODEL_URL);
      await faceapi.loadFaceLandmarkModel(MODEL_URL);
      await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
      setLoaded(true);
      if (loaded) {
        setPlay(true);
      }
    };
    load();
  }, [loaded]);
  //param: could be imgSrcBase64 or normal url.
  const makePicture = (imgSrcURL) => {
    const image = document.createElement('img');
    image.alt = 'toClasify';
    image.src = imgSrcURL;
    return image;
  };
  const onCapture = async (input) => {
    const result = await faceapi
      .detectSingleFace(input)
      .withFaceLandmarks()
      .withFaceDescriptor();
    console.log(result);
    const faceMatcher = new faceapi.FaceMatcher(result);
    const picToClassify = makePicture('/images/profilePic.jpg');
    const singleResult = await faceapi
      .detectSingleFace(picToClassify)
      .withFaceLandmarks()
      .withFaceDescriptor();
    if (singleResult) {
      const bestMatch = faceMatcher.findBestMatch(singleResult.descriptor);
      console.log(bestMatch.toString());
    }
  };
  return (
    <div className="App">{play && <WebcamCapture onCapture={onCapture} />}</div>
  );
}

export default App;
