import React, { Component } from 'react'
import "../..//utils/style.css";

export default class ProductMainImg extends Component {
    render() {
        return (
            <div class="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div class="product-preview">
                        <img src="./img/product01.png" alt=""></img>
                    </div>

                    <div class="product-preview">
                        <img src="./img/product03.png" alt=""></img>
                    </div>

                    <div class="product-preview">
                        <img src="./img/product06.png" alt=""></img>
                    </div>

                    <div class="product-preview">
                        <img src="./img/product08.png" alt=""></img>
                    </div>
                </div>
            </div>
        );
    }
}
