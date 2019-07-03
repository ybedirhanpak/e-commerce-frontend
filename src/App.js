import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product-card'
//Components
import TopHeader from './components/top-header/top-header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

