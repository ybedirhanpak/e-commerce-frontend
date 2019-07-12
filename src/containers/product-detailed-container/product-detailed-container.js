import React, { Component } from 'react'
//Components
import ProductMainImg from '../../components/product-main-img/product-main-img'
import ProductThumb from '../../components/product-thumb/product-thumb'
import ProductDetails from '../../components/product-details/product-details'
import ProductTab from '../../components/product-tab/product-tab'


export default class ProductDetailedContainer extends Component {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render() {

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <ProductMainImg/>
                        <ProductThumb/>
                        <ProductDetails/>
                        <ProductTab/>
                    </div>
                </div>
            </div>
        )
    }
}
