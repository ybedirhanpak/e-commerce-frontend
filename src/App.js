import React, { Component } from "react";
import "./App.css";

//Components
import MainHeader from "./components/main-header/main-header";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import ProductCard from "./components/product-card/index";
import Filter from "./components/filter";
import Dropdown from "./components/city-dropdown/dropdown"

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
  data= [
    {
        "name": "İstanbul"
    },
    {
        "name": "Hatay"
    },
    {
        "name": "Ankara"
    },
    {
        "name": "Bursa"
    },
    {
        "name": "İzmir"
    }
]
  render() {
    return (
      <div className="App">
        <body className="App-body">
          <MainHeader />
          <NavigationBar />
          <Filter />
          <ProductCard product={this.product} />
          <div className="App">
        <div className="container fluid">
            <div className="row">
                <div className="col-sm-12">
                    <Dropdown data = {this.data}/>
                </div>
            </div>
        </div>
    </div>
      
        </body>
      </div>
    );
  }
}
