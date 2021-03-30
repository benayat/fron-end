import './styles/Canvas.css';
import React, { Fragment } from 'react';
const Canvas = (props) => {
  return (
    <Fragment>
      <canvas id="overlay" ref={props.canvasRef} />
    </Fragment>
  );
};
export default Canvas;
