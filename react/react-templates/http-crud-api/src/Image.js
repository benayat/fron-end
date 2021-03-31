import { useRef } from 'react';

const Image = ({ srcColor, srcBW }) => {
  let imageRef = useRef(null);

  const onMouseOver = () => {
    imageRef.current.src = srcColor;
  };
  const onMouseOut = () => {
    imageRef.current.src = srcBW;
  };
  return (
    <img
      src={srcColor}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      alt="black and white"
      ref={imageRef}
    />
  );
};
export default Image;
