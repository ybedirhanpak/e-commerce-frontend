import React, {Component} from 'react';

export default class Cart extends Component {
    render() {
        return (
            <div class="dropdown">
                <a href="cart">
                    <i class="fa fa-shopping-cart"></i>
                    <span>Your Cart</span>
                    <div class="qty">3</div>
                </a>
            </div>
        );
    }
}