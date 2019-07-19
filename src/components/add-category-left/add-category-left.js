import React, { Component } from "react";

export default class AddCategoryLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: "",
      category1: "addNewSubCategory",
      categories: "",
      categorySelected: false
    };
    this.onChange = this.onChange.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory(event) {
    const id = event.target.id;

    const subList = this.props.allCategories.filter(
      element => element.parentId === id
    );

    this.props.setSub(subList, 2);
  }

  onChange = event => {
    //debugger;
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const categories = this.props.categoryList.map(element => (
      <option id={element.id} onClick={this.selectCategory}>
        {element}
      </option>
    ));
    console.log(this.state);
    return (
      <div className="row container">
        <div className="col-md-6">
          <div className="col-md-6">
            <div className="form-group">
              <label for="product">Sub Category</label>
              <input
                type="text"
                id="subcategory"
                class="form-control"
                placeholder="Product Name..."
                required
                name="subCategory"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="select1">Main Category</label>
              <select
                name="category1"
                className="form-control"
                onChange={this.onChange}
              >
                <option value="addNewSubCategory" active>
                  Add New Sub Category
                </option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
              </select>
            </div>
            {this.state.category1 === "addNewSubCategory" ? (
              <div className="col-md-12">
                <button
                  className="btn btn-danger btn-lg btn-block"
                  onClick={this.sendMessage}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="row container">
                <div className="col-md-2">
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    onClick={this.sendMessage}
                  >
                    Edit
                  </button>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    onClick={this.sendMessage}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
          <form>
            <div class="form-group col-md-6">
              <label htmlFor="categories">Categories</label>
              <select
                multiple
                class="form-control"
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
