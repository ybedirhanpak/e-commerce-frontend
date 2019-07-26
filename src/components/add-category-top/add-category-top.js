import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCategory,
  apiUpdateCategory,
  apiDeleteCategory
} from "../../redux/category/actions";

import { generateLinkWithName } from "../../services/link-generator";

class AddCategoryTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
      selectedId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  saveCategory() {
    if (this.state.categoryInput !== "") {
      const category = {
        Name: this.state.categoryInput,
        Path: generateLinkWithName(this.state.categoryInput)
      };
      this.props.addCategory(category);
    }
  }

  updateCategory(event) {
    event.preventDefault();
    const category = {
      Name: this.state.categoryInput,
      Path: this.state.categoryInput
    };
    this.props.apiUpdateCategory(this.state.selectedId, category);
  }
  deleteCategory() {
    this.props.apiDeleteCategory(this.state.selectedId);
    this.props.clearParents("both");
  }

  selectCategory(event) {
    this.setState({
      selectedId: event.target.id
    });
    const id = event.target.id;

    this.props.setSub(1, id);
  }

  onChange = event => {
    //debugger;
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    var categories = this.props.categoryList.filter(
      element => element.parentId === null
    );
    categories = categories.map(element => (
      <option key={element.id} id={element.id} onClick={this.selectCategory}>
        {element.name}
      </option>
    ));

    return (
      <>
        <div className="form-group">
          <label htmlFor="product">Sub Category</label>
          <input
            type="text"
            id="subcategory"
            className="form-control"
            placeholder="Main category name"
            required
            name="categoryInput"
            onChange={this.onChange}
          />
        </div>

        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={this.saveCategory}
          style={{marginBottom:10}}
        >
          Save
        </button>

        <form style={{marginBottom:10}}>
          <label htmlFor="categories">Categories</label>
          <select
            multiple
            className="form-control"
            id="sel2"
            name="categories"
            onChange={this.onChange}
          >
            {categories}
          </select>
        </form>

        <div className="row">
          <div className="col-md-4" style={{float:'left'}}>
            <button
              className="btn btn-danger btn-lg btn-block"
              onClick={this.updateCategory}
            >
              Edit
            </button>
          </div>
          <div className="col-md-4" style={{float:'right'}}>
            <button
              className="btn btn-danger btn-lg btn-block"
              onClick={this.deleteCategory}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  addCategory,
  apiUpdateCategory,
  apiDeleteCategory
};

export default connect(
  null,
  mapDispatchToProps
)(AddCategoryTop);
