import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div>
				<footer id="footer">
	
				<div class="section">
					<div class="container">
						<div class="row">
							<div class="col-md-4 col-xs-6">
								<div class="footer">
									<h3 class="footer-title">About Us</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
									<ul class="footer-links">
										<li><a href="address"><i class="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
										<li><a href="phone"><i class="fa fa-phone"></i>+021-95-51-84</a></li>
										<li><a href="mail"><i class="fa fa-envelope-o"></i>email@email.com</a></li>
									</ul>
								</div>
							</div>

							<div class="clearfix visible-xs"></div>

							<div class="col-md-4 col-xs-6">
								<div class="footer">
									<h3 class="footer-title">Information</h3>
									<ul class="footer-links">
										<li><a href="about">About Us</a></li>
										<li><a href="contact">Contact Us</a></li>
										<li><a href="privacy">Privacy Policy</a></li>
										<li><a href="orders">Orders and Returns</a></li>
										<li><a href="terms">Terms & Conditions</a></li>
									</ul>
								</div>
							</div>

							<div class="col-md-4 col-xs-6">
								<div class="footer">
									<h3 class="footer-title">Service</h3>
									<ul class="footer-links">
										<li><a href="account">My Account</a></li>
										<li><a href="cart">View Cart</a></li>
										<li><a href="tract">Track My Order</a></li>
										<li><a href="help">Help</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="bottom-footer" class="section">
					<div class="container">
				
						<div class="row">
							<div class="col-md-12 text-center">
								<ul class="footer-payments">
									<li><a href="visa"><i class="fa fa-cc-visa"></i></a></li>
									<li><a href="credit-card"><i class="fa fa-credit-card"></i></a></li>
									<li><a href="paypal"><i class="fa fa-cc-paypal"></i></a></li>
									<li><a href="mastercard"><i class="fa fa-cc-mastercard"></i></a></li>
									<li><a href="discover"><i class="fa fa-cc-discover"></i></a></li>
									<li><a href="amex"><i class="fa fa-cc-amex"></i></a></li>
								</ul>
								<span class="copyright">
								<i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://www.arutesolutions.com" target="_blank" rel="noopener noreferrer">Arute Solutions</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				</footer>
            </div>
        )
    }
}
