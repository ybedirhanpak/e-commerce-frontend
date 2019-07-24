import React, { Component } from 'react'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import SlideProduct from '../../components/slide-product/slide';

//Redux
import { connect } from "react-redux";
import { getProductList } from "../../redux/product/actions";

class HomeContainer extends Component {

    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        console.log("home container props", this.props);
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-sm-6 col-md-3">
                            {/* Filter Component */}
                            {/* <Filter/> */}
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
                <SlideProduct date={`${year}-07-26T18:00:00`} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apiProducts: state.product.productList,
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
