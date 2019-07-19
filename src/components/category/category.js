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

  generateLink = (mainCategory, section) => {
    return '/' + mainCategory.path + '/' + section.header.path + '/' + section.subcategory.path;
  }
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
              <li className="dropdown-header">{this.props.sections[0].header.name}</li>
              {this.generateSubCategories(this.props.sections[0])}

              <li className="divider" />

              {/* Section B */}
              <li className="dropdown-header">{this.props.sections[1].header.name}</li>
              {this.generateSubCategories(this.props.sections[1])}
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section C */}
              <li className="dropdown-header">{this.props.sections[2].header.name}</li>
              {this.generateSubCategories(this.props.sections[2])}

              <li className="divider" />

              {/* Section D */}
              <li className="dropdown-header">{this.props.sections[3].header.name}</li>
              {this.generateSubCategories(this.props.sections[3])}
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section E */}
              <li className="dropdown-header">{this.props.sections[4].header.name}</li>
              {this.generateSubCategories(this.props.sections[4])}

              <li className="divider" />

              {/* Section F */}
              <li className="dropdown-header">{this.props.sections[5].header.name}</li>
              {this.generateSubCategories(this.props.sections[5])}
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section G */}
              <li className="dropdown-header">{this.props.sections[6].header.name}</li>
              {this.generateSubCategories(this.props.sections[6])}
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}
