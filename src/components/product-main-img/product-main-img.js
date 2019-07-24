import React, { Component } from 'react'
import "../..//utils/style.css";
import './product-main-img.css';

export default class ProductMainImg extends Component {
    render() {
        const product = this.props.product;
        const imgSource = product.imgSource;
        return (
            <img className="product-image" alt='Product' src={imgSource}></img>
        );
    }
}
