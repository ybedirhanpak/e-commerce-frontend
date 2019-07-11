import React,{Component} from 'react'

export default class ProductThumb extends Component {
    render() {
        return (
            <div class="col-md-2  col-md-pull-5">
                <div id="product-imgs">
                    <div class="product-preview">
                        <img src="./img/product01.png" alt="" />
                    </div>

                    <div class="product-preview">
                        <img src="./img/product03.png" alt="" />
                    </div>

                    <div class="product-preview">
                        <img src="./img/product06.png" alt="" />
                    </div>

                    <div class="product-preview">
                        <img src="./img/product08.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
