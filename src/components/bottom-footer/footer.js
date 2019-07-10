import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div>
				<footer id="footer">
	
				<div className="section">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">About Us</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
									<ul className="footer-links">
										<li><a href="address-location"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
										<li><a href="phone-contact"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
										<li><a href="email-contact"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
									</ul>
								</div>
							</div>

							<div className="clearfix visible-xs"></div>

							<div className="col-md-4 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Information</h3>
									<ul className="footer-links">
										<li><a href="about">About Us</a></li>
										<li><a href="contact">Contact Us</a></li>
										<li><a href="privacy">Privacy Policy</a></li>
										<li><a href="terms">Terms & Conditions</a></li>
									</ul>
								</div>
							</div>

							<div className="col-md-4 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Service</h3>
									<ul className="footer-links">
										<li><a href="account">My Account</a></li>
										<li><a href="cart">View Cart</a></li>
										<li><a href="track">Track My Order</a></li>
										<li><a href="help">Help</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="bottom-footer" className="section">
					<div className="container">
				
						<div className="row">
							<div className="col-md-12 text-center">
								<ul className="footer-payments">
									<li><a href="visa"><i className="fa fa-cc-visa"></i></a></li>
									<li><a href="credit-card"><i className="fa fa-credit-card"></i></a></li>
									<li><a href="paypal"><i className="fa fa-cc-paypal"></i></a></li>
									<li><a href="mastercard"><i className="fa fa-cc-mastercard"></i></a></li>
									<li><a href="discover"><i className="fa fa-cc-discover"></i></a></li>
									<li><a href="amex"><i className="fa fa-cc-amex"></i></a></li>
								</ul>
								<span className="copyright">
								<i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://www.arutesolutions.com" target="_blank" rel="noopener noreferrer">Arute Solutions</a>
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
