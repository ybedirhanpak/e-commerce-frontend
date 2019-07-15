import React, { Component } from 'react'
import "../..//utils/style.css";
import './product-main-img.css';

export default class ProductMainImg extends Component {
    
    render() {
        const product = this.props.product;
        const imgSource = product.imgSource ? product.imgSource.substring(1) : '';
        return (
            <img className="product-image" alt='Product' src={imgSource}></img>
        );
    }
}
