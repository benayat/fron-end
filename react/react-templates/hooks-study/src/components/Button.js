const Button = (props) => {
  return (
    <button
      key={props.name}
      name={props.name}
      type="button"
      onClick={(e) => props.onClick(e)}
    >
      {props.name}
    </button>
  );
};

export default Button;
