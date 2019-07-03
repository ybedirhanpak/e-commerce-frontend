

import React, {Component} from 'react';
import './App.css';

//Components
import MainHeader from './components/main-header/main-header'
import NavigationBar from './components/navigation-bar/navigation-bar';
import ProductCard from './components/product-card/index';


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
          <MainHeader/>
          <NavigationBar/>
          <ProductCard/>
        </body>
      </div>
    );
  }
}
