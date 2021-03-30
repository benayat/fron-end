import '../style/Loader.css';

const Loader = (props) => {
  const loader = <div className="loading">{props.error}</div>;
  return loader;
};
export default Loader;
