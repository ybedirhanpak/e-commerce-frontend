import React, { Component } from "react";

//Components
import SlideProduct from "../../components/slide-product/slide";
import ProductSlide from "../../components/product-slide/product-slide";

//Redux
import { connect } from "react-redux";
import { getProductList } from "../../redux/product/actions";
import Collection from "../../components/collection/collection";
import TopSelling from "../../components/top-selling/top-selling";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getProductList();
  }

  getLastProducts(quantity, productList) {
    return productList.slice(productList.length - quantity);
  }

  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="section">
        <div className="row">
          <div className="col-sm-12">
            <Collection />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <SlideProduct date={`${year}-07-26T18:00:00`} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ProductSlide
                products={this.getLastProducts(
                  10,
                  this.props.apiProducts
                ).reverse()}
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div>{/*} <TopSelling products={this.props.apiProducts} /> */}</div>
=======
        <div>{/* <TopSelling products={this.props.apiProducts} /> */}</div>
>>>>>>> d95be14b5120f953db6c27ce79ef938b483e5b2b
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    apiProducts: state.product.productList,
    filters: state.product.filters,
    fetchInProgress: state.product.fetchInProgress,
    allCategories: state.category.categories
  };
};

const mapDispatchToProps = {
  getProductList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
