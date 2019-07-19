import React, { Component } from "react";

//Components
import StoreTopFilter from "../store-top-filter/store-top-filter";
import ProductCard from "../product-card/index";

export default class Store extends Component {
  constructor(props) {
    super(props);

    //Bind Functions
    this.createProducts = this.createProducts.bind(this);
  }

  createProducts = () => {
    if(this.props.fetchInProgress) {
      return(
        <ProductCard product={
          {
            name: "Loading...",
            imgSource: "./img/product05.png",
            discount: "...",
            category: "...",
            price: "...",
            stars: 5
          }} />
      )
    }else {
      const productsList = this.props.apiProducts.map(product => {
        return(
          <div key={product.id} className="col-md-4 col-xs-6">
            <ProductCard product={product} />
          </div>
        )
      });
      return productsList;
    }
  };

  render() {
    console.log("store props", this.props);
    return (
      <div>
        <StoreTopFilter />
        <div className="row">
          {this.createProducts()}
        </div>
      </div>
    );
  }
}
