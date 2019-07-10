import React, { Component } from 'react'

//Components
import ProductCard from '../../components/product-card/index';

export default class ProductDetailedContainer extends Component {

    constructor(props){
        super(props);

        console.log(this.props);
    }

    render() {

        var dummyProduct = {
            name: "Product1",
            imgSource: "./img/product01.png",
            discount: "%30",
            new: false,
            category: "computer",
            price: "210",
            oldPrice: "300"
        };

        return (
            <div>
                <ProductCard product={dummyProduct}/>
            </div>
        )
    }
}
