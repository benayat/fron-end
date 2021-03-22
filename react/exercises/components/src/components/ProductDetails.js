import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={

  //   }
  // }
  state = {
    product: undefined,
  };
  //*key\id: 1...4
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const product = data.find((x) => x.id === parseInt(params.id));
    this.setState({ product: product });
  }
  onClick() {}

  render() {
    const { title, imageUrl, price } = this.state.product || this.state;
    return [
      <div>
        <h2>{this.state.product && title}</h2>
        <h4>price: {this.state.product && price}</h4>
        <img alt={this.state.product && title} src={imageUrl} />
      </div>,
      <Link to="/products" className="item">
        <button type="button" onClick={this.onClick.bind(this)}>
          Back
        </button>
      </Link>,
    ];
  }
}
export default ProductDetails;
