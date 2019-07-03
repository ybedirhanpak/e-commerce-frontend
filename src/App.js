import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product-card";
//Components
import TopHeader from "./components/top-header/top-header";

export default class App extends Component {
  product = {
    name: "Product1",
    imgSource: "./img/product01.png",
    discount: "%30",
    new: false,
    category: "computer",
    price: "210",
    oldPrice: "300"
  };
  render() {
    return (
      <div>
        {Product(this.product)}
      </div>
    );
  }
}
