//CSS
import "./App.css";

//Imports
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Components
import MainHeader from "./components/main-header/main-header";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Footer from "./components/bottom-footer/footer";
import Logout from "./components/logout/logout";
import PrivateRoute from "./components/private-route/private-route";

//Containers
import HomeContainer from "./containers/home-container/home-container";
import ProductDetailedContainer from "./containers/product-detailed-container/product-detailed-container";
import AboutUsContainer from "./containers/about-us-container/about-us-container";
import ContactUsContainer from "./containers/contact-us-container/contact-us-container";
import PrivacyPolicyContainer from "./containers/privacy-policy-container/privacy-policy-container";
import TermsContainer from "./containers/terms-container/terms-container";
import AddressLocationContainer from "./containers/address-location-container/address-location-container";
import PhoneContactContainer from "./containers/phone-contact-container/phone-contact-container";
import EmailContactContainer from "./containers/email-contact-container/email-contact-container";
import MyAccountContainer from "./containers/my-account-container/my-account-container";
import WiewCardContainer from "./containers/wiew-cart-container/wiew-card-container";
import TrackMyOrderContainer from "./containers/track-my-order-container/track-my-order-container";
import HelpContainer from "./containers/help-container/help-container";
import LoginContainer from "./containers/login-container/login-container";
import RegisterContainer from "./containers/register-container/register-container";
import NoPageContainer from "./containers/no-page-container/no-page-container";
import CategoryContainer from "./containers/category-container/category-container";
import AdminPanelContainer from "./containers/admin-panel-container/admin-panel-container";
import Checkoutcontainer from "./containers/checkout-container/checkout-container";
import AddCategoryContainer from "./containers/add-category-container/add-category-container";
import AllOrders from "./components/all-orders/all-orders";
import ForgotPasswordContainer from "./containers/forgot-password-container/forgot-password-container";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <BrowserRouter>
            {/* Main Header and Navigation Bar */}
            <MainHeader />
            <NavigationBar />

            <Switch>
              {/* Home Routes */}

              <Route exact path="/" render={() => <Redirect to="home" />} />
              <Route path="/home" component={HomeContainer} exact />

              {/* Category Routes */}

              <Route
                exact
                path="/show/:mainCategory"
                render={props => {
                  return (
                    <CategoryContainer
                      location={props.location}
                      match={props.match}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/show/:mainCategory/:subheader"
                render={props => {
                  return (
                    <CategoryContainer
                      location={props.location}
                      match={props.match}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/show/:mainCategory/:subheader/:productId"
                render={props => {
                  return (
                    <ProductDetailedContainer
                      location={props.location}
                      match={props.match}
                    />
                  );
                }}
              />

              {/* Static Route Pages */}

              <Route path="/login" component={LoginContainer} />
              <Route path="/register" component={RegisterContainer} />
              <Route path="/account" component={MyAccountContainer} />
              <Route path="/logout" component={Logout} />
              <Route path="/about" component={AboutUsContainer} />
              <Route path="/contact" component={ContactUsContainer} />
              <Route path="/privacy" component={PrivacyPolicyContainer} />
              <Route path="/terms" component={TermsContainer} />
              <Route
                path="/address-location"
                component={AddressLocationContainer}
              />
              <Route path="/phone-contact" component={PhoneContactContainer} />
              <Route path="/email-contact" component={EmailContactContainer} />
              <Route path="/cart" component={WiewCardContainer} />
              <Route path="/track" component={TrackMyOrderContainer} />
              <Route path="/help" component={HelpContainer} />
              <Route
                path="/address-location"
                component={AddressLocationContainer}
              />
              <Route path="/checkout" component={Checkoutcontainer} />

              <Route
                path="/forgot-password"
                component={ForgotPasswordContainer}
              />

              <PrivateRoute
                path="/add-product"
                component={AdminPanelContainer}
              />
              <PrivateRoute
                path="/add-category"
                component={AddCategoryContainer}
              />

              <PrivateRoute path="/all-orders" component={AllOrders} />

              <Route component={NoPageContainer} />
            </Switch>

            {/* Footer */}
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
