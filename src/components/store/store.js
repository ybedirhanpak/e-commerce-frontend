import React, { Component } from "react";

//Components
import StoreTopFilter from "../store-top-filter/store-top-filter";
import ProductCard from "../product-card/index";
import LoadingSpinner from "../loading-spinner/loading-spinner";

export default class Store extends Component {
  constructor(props) {
    super(props);

    //Bind Functions
    this.createProducts = this.createProducts.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }
  //String(Number(filters.price.min))
  filterProducts = () => {
    const filters = this.props.filters;
    this.props.apiProducts.map(x=> console.log( Number(x.price)));
    let filteredProducts = this.props.apiProducts.filter(product => Number(product.price) >= 90 && Number(product.price) <= 200 )
    console.log("filtrelenmiş",filteredProducts);

  }

  createProducts = () => {
    this.filterProducts();
    if(this.props.fetchInProgress) {
      return(
        <LoadingSpinner/>
      )
    }else {
      const productsList = this.props.apiProducts.map(product => {
        return (
          <div key={product.id} className="col-xs-12 col-md-4">
            <ProductCard product={product} />
          </div>
        );
      });

      return productsList;
    }
  };

  render() {
    console.log("store props", this.props);
    return (
      <>
        <StoreTopFilter />
        <div className="row">{this.createProducts()}</div>
      </>
    );
  }
}
