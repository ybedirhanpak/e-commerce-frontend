import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCategory,
  apiUpdateCategory,
  apiDeleteCategory
} from "../../redux/category/actions";

class AddCategoryLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
      categories: "",
      categorySelected: false,
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
        Path: this.state.categoryInput,
        ParentId: this.props.parentId
      };
      this.props.addCategory(category);
    }
  }
  updateCategory() {
    const category = {
      ParentId: this.props.parentId,
      Name: this.state.categoryInput,
      Path: this.state.categoryInput
    };
    this.props.apiUpdateCategory(this.state.selectedId, category);
  }

  selectCategory(event) {
    this.setState({
      selectedId: event.target.id
    });
    const id = event.target.id;

    this.props.setSub(2, id);
  }
  deleteCategory() {
    this.props.apiDeleteCategory(this.state.selectedId);
    this.props.clearParents();
  }

  onChange = event => {
    //debugger;
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const categoryList = this.props.allCategories.filter(
      element => element.parentId === this.props.parentId
    );
    const categories = categoryList.map(element => (
      <option key={element.id} id={element.id} onClick={this.selectCategory}>
        {element.name}
      </option>
    ));
    return (
      <div className="row container">
        <div className="col-md-6">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="product">Sub Category</label>
              <input
                type="text"
                id="categoryInput"
                className="form-control"
                placeholder="Sub Category"
                required
                name="categoryInput"
                onChange={this.onChange}
              />
            </div>
            <div className="row container">
              <div className="col-md-2">
                <button
                  className="btn btn-danger btn-lg btn-block"
                  onClick={this.saveCategory}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="row container">
              <div className="col-md-2">
                <button
                  className="btn btn-danger btn-lg btn-block"
                  onClick={this.updateCategory}
                >
                  Edit
                </button>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger btn-lg btn-block"
                  onClick={this.deleteCategory}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <form>
            <div className="form-group col-md-6">
              <label htmlFor="categories">Categories</label>
              <select
                multiple
                className="form-control"
                id="sel2"
                name="categories"
                onChange={this.onChange}
                onClick={this.onClick}
              >
                {categories}
              </select>
            </div>
          </form>
        </div>
      </div>
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
)(AddCategoryLeft);
