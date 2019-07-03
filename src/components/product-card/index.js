import React from "react";

export default function index() {
  return (
    <div class="product">
      <div class="product-img">
        <img src="./img/product01.png" alt="" />
        <div class="product-label">
          <span class="sale">-30%</span>
          <span class="new">NEW</span>
        </div>
      </div>
      <div class="product-body">
        <p class="product-category">Category</p>
        <h3 class="product-name">
          <a href="#">product name goes here</a>
        </h3>
        <h4 class="product-price">
          $980.00 <del class="product-old-price">$990.00</del>
        </h4>
        <div class="product-rating">
          <i class="fa fa-star" />
          <i class="fa fa-star" />
          <i class="fa fa-star" />
          <i class="fa fa-star" />
          <i class="fa fa-star" />
        </div>
        <div class="product-btns">
          <button class="add-to-wishlist">
            <i class="fa fa-heart-o" />
            <span class="tooltipp">add to wishlist</span>
          </button>
          <button class="add-to-compare">
            <i class="fa fa-exchange" />
            <span class="tooltipp">add to compare</span>
          </button>
          <button class="quick-view">
            <i class="fa fa-eye" />
            <span class="tooltipp">quick view</span>
          </button>
        </div>
      </div>
      <div class="add-to-cart">
        <button class="add-to-cart-btn">
          <i class="fa fa-shopping-cart" /> add to cart
        </button>
      </div>
    </div>
  );
}
