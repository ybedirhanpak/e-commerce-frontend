import React from "react";
import Image from "react-image-resizer";
import "./style.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {actionCreators} from '../../redux/cart/actions'
//"./img/product01.png"

class ProductCard extends React.Component {
  handleAddtoChart = () => {
    this.props.addtoCART({
      id:this.props.product.id,
      img:this.props.product.imgSource,
      name:this.props.product.name,
      quantity:1,
      price:this.props.product.price ,
      oldPrice:this.props.product.oldPrice 
    });
  }
  render() {
    const product = this.props.product;
    return (
      <div>
        <div className="product">
          <div className="product-img">
            <Image width={240} height={240} src={product.imgSource} alt="" />
            <div className="product-label">
              {product.discount && (
                <span className="sale">-{product.discount}</span>
              )}
              {product.new && (
                <span className="new">{product.new && "NEW"}</span>
              )}
            </div>
          </div>
          <div className="product-body">
            <p className="product-category">{product.category}</p>
            <h3 className="product-name">
              <Link
                to={{
                  pathname: "/productDetailed/" + product.id,
                  state: { id: product.id }
                }}
              >
                {product.name}
              </Link>
              {/*<a href="productDetailed">{product.name}</a>*/}
            </h3>
            <h4 className="product-price">
              {'$'+ product.price}
              <del className="product-old-price">
                {'$'+ product.oldPrice}
              </del>
            </h4>
            <div className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o" />
                <span className="tooltipp">add to wishlist</span>
              </button>
              <button className="add-to-compare">
                <i className="fa fa-exchange" />
                <span className="tooltipp">add to compare</span>
              </button>
              <button className="quick-view">
                <i className="fa fa-eye" />
                <span className="tooltipp">quick view</span>
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn" onClick={this.handleAddtoChart}>
              <i className="fa fa-shopping-cart" /> add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addtoCART: actionCreators.addtoCART
};

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);