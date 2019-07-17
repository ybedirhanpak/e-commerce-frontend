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
    if(this.props.fetchInProgress) {
      return(
        <li>
            <a href='/home'>
              Loading...
            </a>
        </li>
      )
    }else {
      const categories = this.props.categories.map(category => (
        <Category key={category.id} category={category} />
      ));
      return categories;
    }
  };

  render() {
    return (
      // <nav id="navigation" className="navbar navbar-default navbar-static">
      //   <div className="container">
      //     <div id="responsive-nav" className="collapse navbar-collapse js-navbar-collapse">
      //       <ul className="main-nav nav navbar-nav">
      //         <li>
      //           <Link to='/home'>Home </Link>
      //         </li>
      //         {this.generateCategories()}
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
      
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li>
                  <Link to='/home'>Home </Link>
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
    categories: state.category.categories,
    fetchInProgress: state.category.fetchInProgress
  };
};

const mapDispatchToProps = {
  fetchAllCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
