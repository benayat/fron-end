import './avatar.css';

const Avatar = (props) => {
  return (
    <div className="avatar">
      <div>{props.name}</div>
      <img alt="avatar" src={props.picture}></img>
    </div>
  );
};

export default Avatar;
