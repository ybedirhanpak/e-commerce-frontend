import React, { Component } from "react";

export default class ProductDetails extends Component {
	render() {
		const product = this.props.product;
		return (
			<div className="product-details">
				<h2 className="product-name">{product.name}</h2>
				<div>
					<div className="product-rating">
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star-o"></i>
					</div>
					<a className="review-link" href="add-review">{this.props.product.reviews.length} Review(s) | Add your review</a>
				</div>
				<div>
					<h3 className="product-price">{'$'+ product.price }<del className="product-old-price">{'$'+ product.oldPrice}</del></h3>
					<span className="product-available">{product.quantity > 0 ? 'In Stock (' + product.quantity + ')' : 'Not In Stock'}</span>
				</div>
				<p>{product.description}</p>
				<div className="product-options">
					<label>
						Size
								<select className="input-select">
							<option value="0">X</option>
						</select>
					</label>
					<label>
						Color
								<select className="input-select">
							<option value="0">Red</option>
						</select>
					</label>
				</div>

				<div className="add-to-cart">
					<div className="qty-label">
						Qty
								<div className="input-number">
							<input type="number" />
							<span className="qty-up">+</span>
							<span className="qty-down">-</span>
						</div>
					</div>
					<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
				</div>
			</div>
		);
	}
}
