import '../style/homePage.css';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div key="links" className="links">
      <Link
        to={{
          pathname: '/CreateMain',
        }}
        className="item"
      >
        add food
      </Link>
      <Link
        to={{
          pathname: '/DeleteMain',
        }}
        className="item"
      >
        delete food
      </Link>
      <Link
        to={{
          pathname: '/UpdateMain',
        }}
        className="item"
      >
        update food
      </Link>
    </div>
  );
};

export default HomePage;
