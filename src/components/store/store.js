import React, { Component } from "react";

//Components
import ProductCard from "../product-card/index";
import LoadingSpinner from "../loading-spinner/loading-spinner";

export default class Store extends Component {
  constructor(props) {
    super(props);

    //Bind Functions
    this.createProducts = this.createProducts.bind(this);
  }

  createProducts = () => {
    if (this.props.fetchInProgress) {
      return <LoadingSpinner />;
    } else {
      const productsList = this.props.apiProducts.map((product, index) => {
        return (
          <div
            key={`Store-Product-${product.id}-${index}`}
            className="col-xs-12 col-md-4"
          >
            <ProductCard
              product={product}
              key={`Store-Product-${product.id}-${index}`}
            />
          </div>
        );
      });

      return productsList;
    }
  };

  render() {
    return (
      <>
        <div className="row">{this.createProducts()}</div>
      </>
    );
  }
}
