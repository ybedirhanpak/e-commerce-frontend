import React, { Component } from 'react'
import './category-container.css'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import BreadCrumb from '../../components/breadcrumb/breadcrumb'

//Redux
import { connect } from "react-redux";
import { getProductList, getProductListWithCategory } from "../../redux/product/actions";
import { isNullOrUndefined } from 'util';

class CategoryContainer extends Component {

    componentDidMount() {
        if(!isNullOrUndefined(this.props.categories._subcategory)) {
            const subcategoryId = this.props.categories._subcategory.id;
            this.props.getProductListWithCategory(subcategoryId);
        } else if(!isNullOrUndefined(this.props.categories._subheader)) {
            const subheaderId = this.props.categories._subheader.id;
            this.props.getProductListWithCategory(subheaderId);
        } else if(!isNullOrUndefined(this.props.categories._mainCategory)) {
            const mainCategoryId = this.props.categories._mainCategory.id;
            this.props.getProductListWithCategory(mainCategoryId);
        } else {
            this.props.getProductList();
        }
    }

    render() {
        console.log("category-container props:", this.props);
        const { productId } = this.props.match.params;
        return (
            <div className="section category-container">
                <BreadCrumb params={this.props.categories} productId={productId}/>
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-sm-6 col-md-3">
                            {/* Filter Component */}
                            <Filter/>
                        </div>
                        <div id="store" className="col-sm-6 col-md-9">
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
    getProductList,
    getProductListWithCategory
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategoryContainer);
