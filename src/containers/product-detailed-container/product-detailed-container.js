import React, { Component } from "react";
import "./product-detailed-container.css";

//Redux
import { connect } from "react-redux";
import { getProduct } from "../../redux/product/actions";

//Components
import ProductMainImg from "../../components/product-main-img/product-main-img";
import ProductDetails from "../../components/product-details/product-details";
import ProductTab from "../../components/product-tab/product-tab";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

/**
 * CategoryContainer is used when application is on this path:
 * - /show/:mainCategory/:subheader/:subcategory/:productId
 *
 * props: {
 *  match: {
 *      params: {
 *          mainCategory,
 *          subheader,
 *          subcategory,
 *          productId,
 *      },
 *      url,
 *  }
 * }
 *
 * Example: "http://localhost:3000/show/erkek/giyim/t-shirt/5d37fe781f3d7773f2aa3a57"
 *
 * mainCategory: "erkek"
 * subheader: "giyim"
 * subcategory: "t-shirt"
 * productId: "5d37fe781f3d7773f2aa3a57"
 * url: "/show/erkek/giyim/t-shirt"
 *
 */
class ProductDetailedContainer extends Component {
  /**
   * Executed when component is mounted
   */
  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  /**
   * Executed when another productDetailedContainer is used insted of current one.
   * @param {*} prevProps is previous productDetailedContainer's props.
   */
  componentDidUpdate(prevProps) {
    if (this.props.match.url !== prevProps.match.url) {
      this.props.getProduct(this.props.match.params.productId);
    }
  }

  /**
   * Creates category objects according to the path given.
   */
  findCategoryWithPath = (mainCategory = null, subheader = null) => {
    //All categories without hierarchy
    const allCategories = this.props.apiCategories;
    const _mainCategory =
      mainCategory !== null
        ? allCategories.filter(x => x.path === mainCategory)[0]
        : null;
    const _subheader =
      _mainCategory !== null && subheader !== null
        ? allCategories.filter(
            x => x.path === subheader && x.parentId === _mainCategory.id
          )[0]
        : null;
    return {
      _mainCategory,
      _subheader
    };
  };

  render() {
    // Category paths that are fetched from url
    const { mainCategory, subheader } = this.props.match.params;
    // Category objects created from paths
    const categories = this.findCategoryWithPath(mainCategory, subheader);

    // If product hasn't been fetched yet, show loading spinner
    if (this.props.fetchInProgress) {
      return (
        <div className="container" style={{ height: 200 }}>
          <LoadingSpinner />
        </div>
      );
    }
    //If product is fetched show product details
    return (
      <div className="product-detailed">
        <BreadCrumb categories={categories} product={this.props.product} />
        <div className="container" style={{ padding: 40 }}>
          <div className="row">
            <div className="col-md-7">
              <ProductMainImg product={this.props.product} />
            </div>
            <div className="col-md-5">
              <ProductDetails product={this.props.product} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ProductTab product={this.props.product} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiCategories: state.category.categories,
    product: state.product.currentProduct,
    fetchInProgress: state.product.fetchInProgress
  };
};

const mapDispatchToProps = {
  getProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailedContainer);
