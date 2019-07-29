import React, { Component } from "react";

export default class Collection extends Component {
  render() {
    return (
      <div>
        <div class="section" />
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-6">
              <div class="shop">
                <div class="shop-img">
                  <img src="./img/shop01.png" alt="" />
                </div>
                <div class="shop-body">
                  <h3>
                    Laptop<br>Collection</br>
                  </h3>
                  <a href="#" class="cta-btn">
                    Shop now <i class="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xs-6">
              <div class="shop">
                <div class="shop-img">
                  <img src="./img/shop03.png" alt="" />
                </div>
                <div class="shop-body">
                  <h3>
                    Accessories<br>Collection</br>
                  </h3>
                  <a href="#" class="cta-btn">
                    Shop now <i class="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xs-6">
              <div class="shop">
                <div class="shop-img">
                  <img src="./img/shop02.png" alt="" />
                </div>
                <div class="shop-body">
                  <h3>
                    Cameras<br>Collection</br>
                  </h3>
                  <a href="#" class="cta-btn">
                    Shop now <i class="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
