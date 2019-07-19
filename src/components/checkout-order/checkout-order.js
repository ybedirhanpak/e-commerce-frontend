import React, { Component } from 'react'

 class CheckoutOrder extends Component {
    constructor(props){
        super(props);

        this.createOrderCart=this.createOrderCart.bind(this)
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
                <div class="order-col" style={{marginBottom:10}}>
                    <div class="input-number">
                        <span class="qty-up">+</span>
                        <span class="qty-down">-</span>
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
        return (
            <div>
						<div class="section-title text-center">
							<h3 class="title">Your Order</h3>
						</div>
						<div class="order-summary">
							<div class="order-col">
								<div><strong>PRODUCT</strong></div>
								<div><strong>TOTAL</strong></div>
							</div>
                            {this.createOrderCart()}
							<div class="order-col">
								<div>Shiping</div>
								<div><strong>FREE</strong></div>
							</div>
							<div class="order-col">
								<div><strong>TOTAL</strong></div>
								<div><strong class="order-total">${this.props.cart.totalPrice}</strong></div>
							</div>
						</div>
						<div class="payment-method">
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-1"/>
								<label for="payment-1">
									<span></span>
									Direct Bank Transfer
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-2"/>
								<label for="payment-2">
									<span></span>
									Cheque Payment
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-3"/>
								<label for="payment-3">
									<span></span>
									Paypal System
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="input-checkbox">
							<input type="checkbox" id="terms"/>
							<label for="terms">
								<span></span>
								I've read and accept the <a href="#">terms & conditions</a>
							</label>
						</div>
						<a href="#" class="primary-btn order-submit">Place order</a>
			
				</div>
		
		
		
		
        )
    }
}
export default CheckoutOrder
