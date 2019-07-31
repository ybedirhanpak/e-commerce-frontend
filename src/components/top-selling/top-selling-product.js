import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class TopSellingProduct extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product-widget" style={{ height: 120 }}>
        <div className="product-img">
          <img src={product.imgSource} alt="" />
        </div>
        <div className="product-body">
          <h3 className="product-name">
            <Link
              to={{
                pathname: "/asd",
                state: { id: product.id }
              }}
            >
              {product.name}
            </Link>
          </h3>
          <h4 className="product-price">
            {"$" + product.price}
            <del className="product-old-price">{"$" + product.oldPrice}</del>
          </h4>
        </div>
      </div>
    );
  }
}
