//CSS
import "./App.css";

//Imports
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import MainHeader from "./components/main-header/main-header";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Footer from "./components/bottom-footer/footer";

//Containers
import HomeContainer from "./containers/home-container/home-container";
import ProductDetailedContainer from "./containers/product-detailed-container/product-detailed-container";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App-body">
          <BrowserRouter>
            <MainHeader />
            <NavigationBar />
            <Switch>
              <Route path="/home" component={HomeContainer} exact/>
              <Route path="/productDetailed" component={ProductDetailedContainer}/>
            </Switch>
            <Footer />
          </BrowserRouter>
        </body>
      </div>
    );
  }
}
