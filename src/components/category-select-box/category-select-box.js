import React, { Component } from "react";
import "./category-select-box.css";

//Redux
import { connect } from "react-redux";
import { isNullOrUndefined } from "util";

class CategorySelectBox extends Component {
  generateSubCategories = _subcategories => {
    const subCategoriesCheckboxList = _subcategories.map(
      (subcategory, index) => {
        const subcategoryChecked =
          !isNullOrUndefined(this.props.currentCategories._subcategory) &&
          this.props.currentCategories._subcategory.id === subcategory.id;

        return (
          <div key={subcategory.id + index}>
            <div className="input-checkbox">
              <input
                checked={subcategoryChecked}
                type="checkbox"
                id={subcategory.id}
              />
              <label htmlFor={subcategory.id}>
                <span />
                {subcategory.name}
              </label>
            </div>
          </div>
        );
      }
    );
    return subCategoriesCheckboxList;
  };

  generateSubHeaders = () => {
    const {
      _mainCategory,
      _subheader,
      _subcategory
    } = this.props.currentCategories;
    const _subheaders = this.props.allCategories.filter(
      x => x.parentId == _mainCategory.id
    );
    const subheaderCheckboxList = _subheaders.map((subheader, index) => {
      const _subcategories = this.props.allCategories.filter(
        y => y.parentId == subheader.id
      );
      const subheaderChecked =
        !isNullOrUndefined(this.props.currentCategories._subheader) &&
        this.props.currentCategories._subheader.id === subheader.id;
      return (
        <>
          <div key={subheader.id + index}>
            <div className="input-checkbox">
              <input
                checked={subheaderChecked}
                type="checkbox"
                id={subheader.id}
                data-toggle="collapse"
                data-target={"#" + subheader.id + "-child"}
              />
              <label htmlFor={subheader.id}>
                <span />
                {subheader.name}
              </label>
            </div>
          </div>
          <div
            className={subheaderChecked ? "" : "collapse"}
            id={subheader.id + "-child"}
            style={{ paddingLeft: 20, fontSize: 12 }}
          >
            {this.generateSubCategories(_subcategories)}
          </div>
        </>
      );
    });
    return subheaderCheckboxList;
  };

  render() {
    return (
      <div className="aside">
        <h3 className="aside-title">
          {this.props.currentCategories._mainCategory.name}
        </h3>
        <div>{this.generateSubHeaders()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCategories: state.category.categories
  };
};

export default connect(
  mapStateToProps,
  null
)(CategorySelectBox);
