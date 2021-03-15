import './card.css';
const Card = (props) => {
  return (
    <div className="cardWrapper">
      <img alt="random" src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <span>
        <a href="# ">{props.links[0]}</a> <a href="# ">{props.links[1]}</a>
      </span>
    </div>
  );
};
export default Card;
