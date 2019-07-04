import React, { Component } from 'react';

//Components
import StoreTopFilter from '../store-top-filter/store-top-filter';
import ProductCard from '../product-card/index';

export default class Store extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            products: []
        }

        //Bind Functions
        this.createProducts = this.createProducts.bind(this);
    }

    createProducts = () => {
        const productsList = this.props.products.map(product => 
            <div className="col-md-4 col-xs-6">
                <ProductCard product={product}/>
            </div>
        )
        return productsList;
    }

    render() {
        return (
            <div>
                <StoreTopFilter/>
                <div className="row">
                    {this.createProducts()}
                </div>
            </div>
        );
    }
}
