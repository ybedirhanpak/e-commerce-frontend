import React, { Component } from "react";
import "./category.css";

//Route
import { Link } from 'react-router-dom';

export default class Category extends Component {
  constructor(props) {
    super(props);

    //Bind functions
    this.generateSubCategories = this.generateSubCategories.bind(this);
  }

  generateSection = (index) => {
    const subheaderPath = `/show/${this.props.mainCategory.path}/${this.props.sections[index].header.path}/`;
    return (
      <>
        <Link to={subheaderPath}> <li className="dropdown-header">{this.props.sections[index].header.name}</li> </Link>
        {this.generateSubCategories(this.props.sections[index])}
      </>
    )
  } 

  generateSubCategories = (section) => {
    let resultList = [];
    for (var i = 0; i < section.subcategories.length; i++) {
      const subheaderPath = `/show/${this.props.mainCategory.path}/${section.header.path}`;
      resultList.push(
        <li key={i}>
          <Link to={{
            pathname: subheaderPath,
            state: {
              selectedSubCategory:section.subcategories[i].id
            }
          }}>
            {section.subcategories[i].name}
          </Link>
        </li>
      );
    }
    return resultList;
  };

  render() {
    console.log("category props", this.props);
    return (
      <li className="dropdown dropdown-large">
          <a href="dropdown" className="dropdown-toggle" data-toggle="dropdown">
          {/* Main Hedaer */}
          {this.props.mainCategory.name} <b className="caret" />
          </a>
        <ul className="dropdown-menu dropdown-menu-large row category">
          <li className="col-sm-3">
            <ul>
              {/* Section A */}
              {
                (this.props.sections.length > 0) ? (this.generateSection(0)) : (null)
              }

              {
                (this.props.sections.length > 1) ? (
                  <li className="divider" />
                ) : (null)
              }
              
              {/* Section B */}
              {
                (this.props.sections.length > 1) ? (this.generateSection(1)) : (null)
              }
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section C */}
              {
                (this.props.sections.length > 2) ? (this.generateSection(2)) : (null)
              }

              {
                (this.props.sections.length > 3) ? (
                  <li className="divider" />
                ) : (null)
              }
              
              {/* Section D */}
              {
                (this.props.sections.length > 3) ? (this.generateSection(3)) : (null)
              }
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section E */}
              {
                (this.props.sections.length > 4) ? (this.generateSection(4)) : (null)
              }

              {
                (this.props.sections.length > 5) ? (
                  <li className="divider" />
                ) : (null)
              }

              {/* Section F */}
              {
                (this.props.sections.length > 5) ? (this.generateSection(5)) : (null)
              }
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section G */}
              {
                (this.props.sections.length > 6) ? (this.generateSection(6)) : (null)
              }
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}
