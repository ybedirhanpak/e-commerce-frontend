import React from "react";
import Image from "react-image-resizer";
import "./style.css";

//"./img/product01.png"
export default class index extends React.Component{
  render() {
    const product = this.props.product
    return (
      <div>
        <div class="product">
          <div class="product-img">
            <Image width={240} height={240} src={product.imgSource} alt="" />
            <div class="product-label">
              {product.discount && (
                <span class="sale">-{product.discount}</span>
              )}
              {product.new && <span class="new">{product.new && "NEW"}</span>}
            </div>
          </div>
          <div class="product-body">
            <p class="product-category">{product.category}</p>
            <h3 class="product-name">
              <a href="productDetailed">{product.name}</a>
            </h3>
            <h4 class="product-price">
              {product.price}
              <del class="product-old-price">
                {product.oldprice && product.oldprice}
              </del>
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
      </div>
    );
  }
}
