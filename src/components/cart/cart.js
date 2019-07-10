import React, {Component} from 'react';

export default class Cart extends Component {
    render() {
        return (
            <div class="dropdown">
                <button class="btn btn-default btn-rounded my-6" href="cart">
                    <i class="fa fa-shopping-cart"></i>
                    <span> Your Cart</span>
                </button>
            </div>
        );
    }
}