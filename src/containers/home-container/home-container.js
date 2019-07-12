import React, { Component } from 'react'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import SlideProduct from '../../components/slide-product/slide'

export default class ProductContainer extends Component {
    render() {
        var dummyProducts = [
            {
                name: "Product1",
                imgSource: "./img/product01.png",
                discount: "%30",
                new: false,
                category: "computer",
                price: "210",
                oldPrice: "300"
            },
            {
                name: "Product2",
                imgSource: "./img/product02.png",
                discount: "%30",
                new: false,
                category: "computer",
                price: "210",
                oldPrice: "300"
            },
            {
                name: "Product3",
                imgSource: "./img/product03.png",
                discount: "%30",
                new: false,
                category: "computer",
                price: "210",
                oldPrice: "300"
            },
            {
                name: "Product4",
                imgSource: "./img/product04.png",
                discount: "%30",
                new: false,
                category: "computer",
                price: "210",
                oldPrice: "300"
            }
        ];

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-md-3">
                            {/* Filter Component */}
                            <Filter/>
                        </div>
                        <div id="store" className="col-md-9">
                            {/* Store Component */}
                            <Store products={dummyProducts}/>
                        </div>
                    </div>
                </div>
                <SlideProduct/>
            </div>
        )
    }
}
