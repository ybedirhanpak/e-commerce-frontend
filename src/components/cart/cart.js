import React, {Component} from 'react';

export default class Cart extends Component {
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-default btn-rounded my-6" href="cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span> Your Cart</span>
                </button>
            </div>
        );
    }
}