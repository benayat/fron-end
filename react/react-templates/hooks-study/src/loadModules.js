import * as faceApi from 'face-api.js';
const MODEL_URL = '/src/models';
export const loadModules = () => {
  return Promise.all([
    faceapi.loadSsdMobilenetv1Model(MODEL_URL),
    faceapi.loadFaceLandmarkModel(MODEL_URL),
    faceapi.loadFaceRecognitionModel(MODEL_URL),
    faceapi.loadMtcnnModel(MODEL_URL),
  ]);
};
export default faceApi;
