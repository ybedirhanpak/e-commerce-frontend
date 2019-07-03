import React, {Component} from 'react';
import './App.css';

//Components
import MainHeader from './components/main-header/main-header'
import NavigationBar from './components/navigation-bar/navigation-bar';
import ProductCard from './components/product-card/index';

export default class App extends Component {
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

