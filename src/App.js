import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product-card'
//Components
import SlideProduct from './components/slide-product/slide-product';

export default class App extends Component {
  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

