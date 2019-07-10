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
import AboutUsContainer from './containers/about-us-container/about-us-container';
import ContactUsContainer from './containers/contact-us-container/contact-us-container';
import PrivacyPolicyContainer from './containers/privacy-policy-container/privacy-policy-container';
import TermsContainer from './containers/terms-container/terms-container';
import AddressLocationContainer from "./containers/address-location-container/address-location-container";
import PhoneContactContainer from "./containers/phone-contact-container/phone-contact-container";
import EmailContactContainer from "./containers/email-contact-container/email-contact-container";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App-body">
          <BrowserRouter>
            <MainHeader />
            <NavigationBar />
            <Switch>
              <Route path="/" component={HomeContainer} exact/>
              <Route path="/home" component={HomeContainer} exact/>
              <Route path="/productDetailed" component={ProductDetailedContainer}/>
              <Route path="/about" component={AboutUsContainer}/>
              <Route path="/contact" component={ContactUsContainer}/>
              <Route path="/privacy" component={PrivacyPolicyContainer}/>
              <Route path="/terms" component={TermsContainer}/>
              <Route path="/address-location" component={AddressLocationContainer}/>
              <Route path="/phone-contact" component={PhoneContactContainer}/>
              <Route path="/email-contact" component={EmailContactContainer}/>
            </Switch>
            <Footer />
          </BrowserRouter>
        </body>
      </div>
    );
  }
}
