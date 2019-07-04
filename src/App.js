import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product-card'
//Components
import TopHeader from './components/top-header/top-header';
import UserLogin from './components/user-login';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserLogin />
      </div>
    );
  }
}

