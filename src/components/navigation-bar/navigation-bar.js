import React, { Component } from "react";
import './navigation-bar.css'

//Redux
import { connect } from "react-redux";
import { fetchAllCategories } from "../../redux/category/actions";

//Components
import Category from "../category/category";

//Route
import { Link } from 'react-router-dom';
import LoadingSpinner from "../loading-spinner/loading-spinner";

class NavigationBar extends Component {

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  generateCategories = () => {
    if(this.props.fetchInProgress) {
      return(
        <li>
          <LoadingSpinner/>
        </li>
      )
    }else {
      //All categories without hierarchy
      const allCategories = this.props.categories;
      //Categories that will be shown in navigation bar
      const mainCategories = allCategories.filter(x => x.parentId === null);
      //Create category components
      const categories = mainCategories.map(mainCategory => {
        const subHeaders = allCategories.filter(x => x.parentId === mainCategory.id);
        const sections = subHeaders.map(header => {
          const subcategories = allCategories.filter(x => x.parentId === header.id);
          return(
            {
              header:header,
              subcategories:subcategories
            }
          )
        });
        return(
          <Category key={mainCategory.id} mainCategory={mainCategory} sections={sections}/>
        );
      });

      return categories;
    }
  };

  render() {
    return (
      <nav id="navigation" className="navbar navbar-default navbar-static">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
      
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
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


export default connect (mapStateToProps, mapDispatchToProps)(NavigationBar);
