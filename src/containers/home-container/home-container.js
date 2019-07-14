import React, { Component } from 'react'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import SlideProduct from '../../components/slide-product/slide'

export default class ProductContainer extends Component {
    render() {
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
                            <Store />
                        </div>
                    </div>
                </div>
                <SlideProduct/>
            </div>
        )
    }
}
