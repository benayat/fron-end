const Button = (props) => {
  return (
    <button key={props.id} id={props.id} type="button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};
export default Button;
