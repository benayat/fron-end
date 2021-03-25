import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
class Products extends React.Component {
  state = {
    products: undefined,
    productNames: undefined,
  };
  componentDidMount() {
    const names = data.map((x) => x.title);
    this.setState({
      products: data,
      productNames: names,
    });
  }
  render() {
    let { productNames } = this.state;
    productNames =
      productNames &&
      productNames.map((x, index) => {
        return (
          <div>
            <Link to={`/products/${index + 1}`} className="item">
              {x}
            </Link>
          </div>
        );
      });

    return <div className="products">{productNames || 'loading...'}</div>;
  }
}
export default Products;
