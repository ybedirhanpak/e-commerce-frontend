import React, { Component } from "react";
import "./category.css";

//Services
import { generateLinkWithName } from "../../services/link-generator";

export default class Category extends Component {
  constructor(props) {
    super(props);

    //Bind functions
    this.generateSubCategories = this.generateSubCategories.bind(this);
  }

  generateSubCategories = subcategoriesList => {
    let resultList = [];
    for (var i = 0; i < subcategoriesList.length; i++) {
      resultList.push(
        <li key={i}>
          <a href={generateLinkWithName(subcategoriesList[i])}>
            {subcategoriesList[i]}
          </a>
        </li>
      );
    }
    return resultList;
  };

  render() {
    const category = this.props.category;

    return (
      <li className="dropdown dropdown-large">
        <a href="dropdown" className="dropdown-toggle" data-toggle="dropdown">
          {category.title} <b className="caret" />
        </a>

        <ul className="dropdown-menu dropdown-menu-large row">
          <li className="col-sm-3">
            <ul>
              {/* Section A */}
              <li className="dropdown-header">{category.sectionA.header}</li>
              {this.generateSubCategories(category.sectionA.subcategories)}

              <li className="divider" />

              {/* Section B */}
              <li className="dropdown-header">{category.sectionB.header}</li>
              {this.generateSubCategories(category.sectionB.subcategories)}
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section C */}
              <li className="dropdown-header">{category.sectionC.header}</li>
              {this.generateSubCategories(category.sectionC.subcategories)}

              <li className="divider" />

              {/* Section D */}
              <li className="dropdown-header">{category.sectionD.header}</li>
              {this.generateSubCategories(category.sectionD.subcategories)}
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section E */}
              <li className="dropdown-header">{category.sectionE.header}</li>
              {this.generateSubCategories(category.sectionE.subcategories)}

              <li className="divider" />

              {/* Section F */}
              <li className="dropdown-header">{category.sectionF.header}</li>
              {this.generateSubCategories(category.sectionF.subcategories)}
            </ul>
          </li>
          <li className="col-sm-3">
            <ul>
              {/* Section G */}
              <li className="dropdown-header">{category.sectionG.header}</li>
              {this.generateSubCategories(category.sectionG.subcategories)}
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}
