import React, { Component } from "react";
import './navigation-bar.css'

//Components
import Category from "../category/category";

//Route
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
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
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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

