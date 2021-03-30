import React, { useEffect, useState } from 'react';
import WebcamFeature from './WebcamFeature';
import * as faceapi from 'face-api.js';
import { renderToStaticMarkup } from 'react-dom/server';
import Canvas from './CanvasResults';
import profilePic from '../images/profilePic.jpg';
import * as Loads from 'react-loads';
const MODEL_URL = '../models';
const App = (props) => {
  const [capture, setCapture] = useState(null);
  const [faceDescriptors, setFaceDescriptors] = useState(null);
  const onCapture = (imageSrc) => {
    setCapture(imageSrc);
  };
  useEffect(() => {
    const load = async () => {
      await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
      await faceapi.loadFaceLandmarkModel(MODEL_URL);
      await faceapi.loadFaceRecognitionModel(MODEL_URL);
    };
    load();
  }, []);
  useEffect(() => {
    if()
    const detectFaces = async (input) => {
      let fullFaceDescriptions = await faceapi
        .detectAllFaces(input)
        .withFaceLandmarks()
        .withFaceDescriptors();
    };
    const profileImage = document.createElement('img');
    profileImage.src = profilePic;
    profileImage.alt = 'profile';
    detectFaces(profileImage);
  }, [profilePic]);
  useEffect(() => {
    const imgDom = document.createElement('img');
    imgDom.src = capture;
    imgDom.alt = 'capture';
    const detectFace = async (imgElement) => {
      const fullFaceDescription = await faceapi
        .detectSingleFace(imgElement)
        .withFaceLandmarks()
        .withFaceDescriptor();
      if (!fullFaceDescription) {
        throw new Error(`no faces detected for ${label}`);
      }
      const faceDescriptors = [fullFaceDescription.descriptor];
      return new faceapi.LabeledFaceDescriptors('benaya', faceDescriptors);
    };
    const descriptors = detectFace(imgDom);
    console.log(descriptors);
    setFaceDescriptors(descriptors);
  }, capture);
  return (
    <div>
      <WebcamFeature onCapture={onCapture} />
      <Canvas />
    </div>
  );
};

export default App;
