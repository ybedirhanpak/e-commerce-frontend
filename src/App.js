import React, {Component} from 'react';
import './App.css';

//Components
import MainHeader from './components/main-header/main-header'
import NavigationBar from './components/navigation-bar/navigation-bar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App-body">
          <MainHeader/>
          <NavigationBar/>
        </body>
        
        
        
      </div>
    );
  }
}

