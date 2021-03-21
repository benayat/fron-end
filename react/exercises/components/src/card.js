import './card.css';
const Card = (props) => {
  return (
    <div className="card">
      {Object.entries(props.card).map(([key, value]) => (
        <div>{`${key}: ${value}`}</div>
      ))}
    </div>
  );
};
export default Card;
