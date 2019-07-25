import React, { Component } from "react";
import "./category-select-box.css";

//Redux
import { connect } from "react-redux";
import { isNullOrUndefined } from "util";

//Route
import { Link } from 'react-router-dom'

class CategorySelectBox extends Component {

  generateSubCategories = (_subheader) => {
    const _subcategories = this.props.allCategories.filter(x => x.parentId == _subheader.id);
    //Create _subcategories list
    const subCategoriesCheckboxList = _subcategories.map((subcategory, index) => 
    {
      return (
      <>
        <div key={subcategory.id + index} >
          <div className="input-checkbox">
            <input type="checkbox" id={subcategory.id} />
            <label htmlFor={subcategory.id}>
              <span />
              {subcategory.name}
            </label>
          </div>
        </div>
      </>
    )});
    return subCategoriesCheckboxList;
  }

  generateSubHeaders = (_mainCategory) => {
    const _subheaders = this.props.allCategories.filter(x => x.parentId == _mainCategory.id);
    //Create subheader list
    const subheaderCheckboxList = _subheaders.map((subheader, index) => 
    {
      const subHeaderPath = `/show/${_mainCategory.path}/${subheader.path}/`
      return (
      <>
        <div key={subheader.id + index} >
          <div className="input-checkbox">
            <input type="checkbox" id={subheader.id} />
            <label htmlFor={subheader.id}>
              <span />
              <Link to={subHeaderPath}>{subheader.name}</Link>
            </label>
          </div>
        </div>
      </>
    )});
    return subheaderCheckboxList;
  }

  render() {
    console.log("category select box props",this.props);
    const { _mainCategory, _subheader } = this.props.currentCategories;
    const title = (!isNullOrUndefined(_subheader)) ? (_subheader.name) : (_mainCategory.name)
    return (
      <div className="aside">
        <h3 className="aside-title" >
          {title}
        </h3>
        <div>
        {
          (!isNullOrUndefined(_subheader)) ?
          (this.generateSubCategories(_subheader)) : 
          (this.generateSubHeaders(_mainCategory))
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCategories: state.category.categories
  };
}

export default connect(
  mapStateToProps,
  null
)(CategorySelectBox);