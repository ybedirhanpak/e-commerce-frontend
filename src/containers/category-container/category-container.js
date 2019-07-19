import React, { Component } from 'react'
import './category-container.css'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import BreadCrumb from '../../components/breadcrumb/breadcrumb'

//Redux
import { connect } from "react-redux";
import { getProductList } from "../../redux/product/actions";


class CategoryContainer extends Component {

    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        console.log("category-container props:", this.props);
        const { productId} = this.props.match.params;
        //const { _mainCategory, _subcategory, _subheader } = this.props.categories;
        return (
            <div className="category-container">
                <BreadCrumb params={this.props.categories} productId={productId}/>
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-md-3">
                            {/* Filter Component */}
                            <Filter/>
                        </div>
                        <div id="store" className="col-md-9">
                            {/* Store Component */}
                            <Store 
                                apiProducts={this.props.apiProducts}
                                fetchInProgress={this.props.fetchInProgress}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      apiProducts: state.product.productList,
      fetchInProgress: state.product.fetchInProgress
    };
  };
  
  const mapDispatchToProps = {
    getProductList
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategoryContainer);
