//CSS
import "./App.css";

//Imports
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { fetchAllCategories } from "./redux/category/actions";

//Components
import MainHeader from "./components/main-header/main-header";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Footer from "./components/bottom-footer/footer";
import Logout from './components/logout/logout';

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
import LoginContainer from './containers/login-container/login-container';
import RegisterContainer from './containers/register-container/register-container';
import NoPageContainer from "./containers/no-page-container/no-page-container";
import CategoryContainer from './containers/category-container/category-container';
import AdminPanelContainer from "./containers/admin-panel-container/admin-panel-container";
import AddCategoryContainer from "./containers/add-category-container/add-category-container"

class App extends Component {

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  findCategoryWithPath = (mainCategory=null, subheader=null, subcategory=null) => {
    //All categories without hierarchy
    const allCategories = this.props.categories;
    const _mainCategory = (mainCategory !== null) ? allCategories.filter(x => x.path === mainCategory)[0] : null;
    const _subheader = (_mainCategory !== null && subheader !== null) ? 
     allCategories.filter(x => x.path === subheader && x.parentId === _mainCategory.id)[0] : null;
    const _subcategory = (_subheader !== null && subcategory !== null) ? 
      allCategories.filter(x=> x.path === subcategory && x.parentId === _subheader.id)[0] : null;
    return {
      _mainCategory,
      _subheader,
      _subcategory
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <BrowserRouter>

            {/* Main Header and Navigation Bar */}

            <MainHeader />
            <NavigationBar 
              categories={this.props.categories} 
              fetchInProgress={this.props.categoriesFetchInProgress}
            />

            <Switch>
              {/* Home Routes */}

              <Route exact path="/" render={() => <Redirect to="home" />} />
              <Route path="/home" component={HomeContainer} exact />

              {/* Category Routes */}

              <Route exact path="/show/:mainCategory" render={(props) => {
                return(
                  <CategoryContainer 
                  {...props}
                  categories={this.findCategoryWithPath(props.match.params.mainCategory)}
                  />
                )
              }}/>

              <Route exact path="/show/:mainCategory/:subheader" render={(props) => {
                return(
                  <CategoryContainer 
                  {...props}
                  categories={this.findCategoryWithPath(
                    props.match.params.mainCategory,
                    props.match.params.subheader
                    )}
                  />
                )
              }}/>

              <Route exact path="/show/:mainCategory/:subheader/:subcategory" render={(props) => {
                return(
                  <CategoryContainer 
                  {...props}
                  categories={this.findCategoryWithPath(
                    props.match.params.mainCategory,
                    props.match.params.subheader,
                    props.match.params.subcategory
                    )}
                  />
                )
              }}/>

              <Route exact path="/show/:mainCategory/:subheader/:subcategory/:productId" render={(props) => {
                return(
                  <CategoryContainer 
                  {...props}
                  categories={this.findCategoryWithPath(
                    props.match.params.mainCategory,
                    props.match.params.subheader,
                    props.match.params.subcategory
                    )}
                  producutId={props.match.params.productId}
                  />
                )
              }}/>

              <Route path="/productDetailed/:productId" render={(props) => {
                const productId = props.match.params.productId;
                return(
                  <ProductDetailedContainer productId={productId}/>
                )
              }}/>

              {/* Static Route Pages */}

              <Route path="/login" component={LoginContainer}/>
              <Route path="/register" component={RegisterContainer}/>
              <Route path="/account" component={MyAccountContainer}/>
              <Route path="/logout" component={Logout} />
              <Route path="/about" component={AboutUsContainer}/>
              <Route path="/contact" component={ContactUsContainer}/>
              <Route path="/privacy" component={PrivacyPolicyContainer}/>
              <Route path="/terms" component={TermsContainer}/>
              <Route path="/address-location" component={AddressLocationContainer}/>
              <Route path="/phone-contact" component={PhoneContactContainer}/>
              <Route path="/email-contact" component={EmailContactContainer}/>
              <Route path="/cart" component={WiewCardContainer}/>
              <Route path="/track" component={TrackMyOrderContainer}/>
              <Route path="/help" component={HelpContainer}/>
              <Route path="/address-location" component={AddressLocationContainer} />
              <Route path="/admin-panel" component={AdminPanelContainer} />
              <Route path="/add-category" component={AddCategoryContainer} />
              <Route component={NoPageContainer}/>

            </Switch>

            {/* Footer */}
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categories,
    categoriesFetchInProgress: state.category.fetchInProgress
  };
};

const mapDispatchToProps = {
  fetchAllCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);