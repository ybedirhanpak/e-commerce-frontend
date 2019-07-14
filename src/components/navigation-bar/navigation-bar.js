import React, { Component } from "react";
import Category from "../category/category";

//Route
import { Link } from 'react-router-dom';

//Redux
import { connect } from "react-redux";
import { fetchAllCategories } from "../../redux/category/actions";

class NavigationBar extends Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }

  generateCategories = () => {
    const categories = this.props.categories.map(category => (
      <Category key={category.id} category={category} />
    ));
    return categories;
  };

  render() {
    return (
      <nav id="navigation" className="navbar navbar-default navbar-static">
        <div className="container">
          <div
            id="responsive-nav"
            className="collapse navbar-collapse js-navbar-collapse"
          >
            <ul className="main-nav nav navbar-nav">
              <li>
                <Link to='/home' activeClassName='active'>Home </Link>
              </li>
              {this.generateCategories()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categories
  };
};

const mapDispatchToProps = {
  fetchAllCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
