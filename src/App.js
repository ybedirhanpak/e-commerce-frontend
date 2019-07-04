import React, { Component } from "react";
import "./App.css";

//Components
import MainHeader from "./components/main-header/main-header";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import ProductContainer from './components/product-container/product-container';
import Footer from "./components/bottom-footer/footer";
import Slide from "./components/slides/slide"


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
      <div className="App">
        <body className="App-body">
          <MainHeader />
          <NavigationBar />
          <ProductContainer/>
          <Slide />
          <Footer />
      
        </body>
      </div>
    );
  }
}
