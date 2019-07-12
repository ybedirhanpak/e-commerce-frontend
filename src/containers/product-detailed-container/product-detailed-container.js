import React, { Component } from 'react'
//Components
import ProductMainImg from '../../components/product-main-img/product-main-img'
import ProductThumb from '../../components/product-thumb/product-thumb'
import ProductDetails from '../../components/product-details/product-details'
import ProductTab from '../../components/product-tab/product-tab'


export default class ProductDetailedContainer extends Component {

    constructor(props) {
        super(props);
        console.log("Product Detailed Props")
        console.log(this.props);
    }

    render() {

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div class="col-md-5 col-md-push-2">
                            <ProductMainImg/>
                        </div>
                        <div className="col-md-2  col-md-pull-5">
                            {/* <ProductThumb/> */}
                        </div>
                        <div className="col-md-5">
                            <ProductDetails/>
                        </div>
                        <div className="col-md-12">
                            <ProductTab/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
