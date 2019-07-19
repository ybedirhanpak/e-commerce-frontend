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
    return (
      <div>
        <li className="dropdown-header">{this.props.sections[index].header.name}</li>
        {this.generateSubCategories(this.props.sections[index])}
      </div>
    )
  } 

  generateSubCategories = (section) => {
    let resultList = [];
    for (var i = 0; i < section.subcategories.length; i++) {
      const path = `/show/${this.props.mainCategory.path}/${section.header.path}/${section.subcategories[i].path}`;
      resultList.push(
        <li key={i}>
          <Link to={{
            pathname: path
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
        <ul className="dropdown-menu dropdown-menu-large row">
          <li className="col-sm-3">
            <ul>
              {/* Section A */}
              {
                (this.props.sections.length > 0) ? (this.generateSection(0)) : (null)
              }
              <li className="divider" />

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

              <li className="divider" />

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

              <li className="divider" />

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