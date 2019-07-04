import React, { Component } from 'react'
import Store from '../store/store';

export default class ProductContainer extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-md-3">
                            {/* Filter Component */}
                        </div>
                        <div id="store" className="col-md-9">
                            {/* Store Component */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
