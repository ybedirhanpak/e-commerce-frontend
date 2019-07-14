import React,{Component} from 'react'
import "../../utils/style.css";

export default class ProductThumb extends Component {
    render() {
        return (
            <div id="product-imgs">
                <div className="product-preview">
                    <img src="./img/product01.png" alt="" />
                </div>

                <div className="product-preview">
                    <img src="./img/product03.png" alt="" />
                </div>

                <div className="product-preview">
                    <img src="./img/product06.png" alt="" />
                </div>

                <div className="product-preview">
                    <img src="./img/product08.png" alt="" />
                </div>
            </div>
        );
    }
}
