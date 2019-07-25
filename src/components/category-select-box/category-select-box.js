import React, { Component } from "react";
import "./category-select-box.css";

//Redux
import { connect } from "react-redux";
import { isNullOrUndefined } from "util";
import { updateFilters } from "../../redux/product/actions";

//Route
import { Link } from 'react-router-dom'

class CategorySelectBox extends Component {

  handleSubcategoryClick = (event, subcategoryChecked) => {
    //Get filter categories from redux
    const filterCategories = this.props.filterCategories;
    let newFilterCategories = [];
    if(subcategoryChecked) {
      console.log("Remove")
      newFilterCategories = filterCategories.filter(x => x !== event.target.id)
    } else {
      console.log("Add")
      newFilterCategories = [...filterCategories, event.target.id]
    }

    this.props.updateFilters({
      type:"subcategories",
      subcategories:newFilterCategories
    })

  }

  generateSubCategories = (_subheader) => {
    //Get filter categories from redux
    const filterCategories = this.props.filterCategories;
    //Find all subcategories
    const _subcategories = this.props.allCategories.filter(x => x.parentId == _subheader.id);
    //Create _subcategories list
    const subCategoriesCheckboxList = _subcategories.map((subcategory, index) => 
    {
      const subcategoryChecked = filterCategories.includes(subcategory.id);
      return (
      <>
        <div key={subcategory.id + index} >
          <div className="input-checkbox">
            <input 
            checked={subcategoryChecked} 
            type="checkbox" 
            id={subcategory.id} 
            onClick={(event) => this.handleSubcategoryClick(event, subcategoryChecked)}
            >
            </input>
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
    allCategories: state.category.categories,
    filterCategories: state.product.filters.subcategories
  };
}

const mapDispatchToProps = {
  updateFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelectBox);