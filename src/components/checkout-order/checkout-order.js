import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/cart/actions'

 class CheckoutOrder extends Component {
    constructor(props){
        super(props);
	
		this.createOrderCart=this.createOrderCart.bind(this)
	}
	
	handleIncrease = (event, product) => {
		event.preventDefault();
		this.props.updateQuantity({...product, quantity:1});
	}

	handleDecrease = (event, product) => {
		event.preventDefault();
		this.props.updateQuantity({...product, quantity:-1});
	}

    createOrderCart = () => {
        if(!this.props.cart.anyProduct){
            return(
                <div>
                    <strong>SEPETİNİZ BOŞ</strong>
                </div>
            )
        } else {
            const resultList = this.props.cart.productsList.map(product =>
                <div className="order-col" style={{marginBottom:10}} key={product.id}>
                    <div className="input-number">
                        <span className="qty-up" onClick={(event) => this.handleIncrease(event, product)}>+</span>
                        <span className="qty-down" onClick={(event) => this.handleDecrease(event, product)}>-</span>
                    </div>
                    <div>
                        {product.quantity+'x ' + product.name} {}
                    </div>
                    <div>${product.price}</div>
                </div>
            )
            return resultList;
        }
    }

    render() {
		console.log("checkout order props", this.props);
        return (
            <div>
				<div className="section-title text-center">
					<h3 className="title">Your Order</h3>
				</div>
				<div className="order-summary">
					<div className="order-col">
						<div><strong>PRODUCT</strong></div>
						<div><strong>TOTAL</strong></div>
					</div>
					{this.createOrderCart()}
					<div className="order-col">
						<div>Shiping</div>
						<div><strong>FREE</strong></div>
					</div>
					<div className="order-col">
						<div><strong>TOTAL</strong></div>
						<div><strong className="order-total">${this.props.cart.totalPrice}</strong></div>
					</div>
				</div>
				<div className="payment-method">
					<div className="input-radio">
						<input type="radio" name="payment" id="payment-1"/>
						<label for="payment-1">
							<span></span>
							Direct Bank Transfer
						</label>
						<div className="caption">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<div className="input-radio">
						<input type="radio" name="payment" id="payment-2"/>
						<label for="payment-2">
							<span></span>
							Cheque Payment
						</label>
						<div className="caption">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<div className="input-radio">
						<input type="radio" name="payment" id="payment-3"/>
						<label for="payment-3">
							<span></span>
							Paypal System
						</label>
						<div className="caption">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
				<div className="input-checkbox">
					<input type="checkbox" id="terms"/>
					<label for="terms">
						<span></span>
						I've read and accept the <a href="#">terms & conditions</a>
					</label>
				</div>
				<a href="#" className="primary-btn order-submit">Place order</a>
			</div>
        )
    }
}

const mapDispatchToProps = {
	updateQuantity: actionCreators.addtoCART
};

export default connect(null,mapDispatchToProps)(CheckoutOrder)



