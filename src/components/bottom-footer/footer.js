import React, { Component } from 'react'

//Route
import { Link } from 'react-router-dom'

export default class footer extends Component {
    render() {
        return (
            <div>
				<footer id="footer">
	
				<div className="section">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-xs-12">
								<div className="footer">
									<h3 className="footer-title">About Us</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
									<ul className="footer-links">
										<li><Link to="address-location"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</Link></li>
										<li><Link to="phone-contact"><i className="fa fa-phone"></i>+021-95-51-84</Link></li>
										<li><Link to="email-contact"><i className="fa fa-envelope-o"></i>email@email.com</Link></li>
									</ul>
								</div>
							</div>

							<div className="clearfix visible-xs"></div>

							<div className="col-md-4 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Information</h3>
									<ul className="footer-links">
										<li><Link to="about">About Us</Link></li>
										<li><Link to="contact">Contact Us</Link></li>
										<li><Link to="privacy">Privacy Policy</Link></li>
										<li><Link to="terms">Terms & Conditions</Link></li>
									</ul>
								</div>
							</div>

							<div className="col-md-4 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Service</h3>
									<ul className="footer-links">
										<li><Link to="account">My Account</Link></li>
										<li><Link to="cart">View Cart</Link></li>
										<li><Link to="track">Track My Order</Link></li>
										<li><Link to="help">Help</Link></li>
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
									<li><Link to="visa"><i className="fa fa-cc-visa"></i></Link></li>
									<li><Link to="credit-card"><i className="fa fa-credit-card"></i></Link></li>
									<li><Link to="paypal"><i className="fa fa-cc-paypal"></i></Link></li>
									<li><Link to="mastercard"><i className="fa fa-cc-mastercard"></i></Link></li>
									<li><Link to="discover"><i className="fa fa-cc-discover"></i></Link></li>
									<li><Link to="amex"><i className="fa fa-cc-amex"></i></Link></li>
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
