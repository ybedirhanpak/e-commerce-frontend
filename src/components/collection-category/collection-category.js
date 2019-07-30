import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class CollectionCategory extends Component {
  render() {
    return (
      <div className="shop" style={{ maxHeight: 400 }}>
        <div className="shop-img">
          <img src={this.props.imgSource} alt="Category" />
        </div>
        <div className="shop-body">
          <h3>{this.props.header}</h3>
          <Link to={this.props.path} class="cta-btn">
            Shop now <i className="fa fa-arrow-circle-right" />
          </Link>
        </div>
      </div>
    );
  }
}
