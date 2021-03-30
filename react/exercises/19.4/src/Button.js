const Button = (props) => {
  return (
    <button key={props.id} id={props.id} type="button" onClick={props.onClick}>
      {props.id}
    </button>
  );
};
export default Button;
