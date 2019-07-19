import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/category/actions";

class AddCategoryTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
      selected: false
    };
    this.onChange = this.onChange.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
  }

  saveCategory() {
    const category = {
      Name: this.state.categoryInput,
      Path: this.state.categoryInput
    };
    this.props.addCategory(category);
  }

  selectCategory(event) {
    this.setState({
      selected: true
    });
    const id = event.target.id;

    const subList = this.props.categoryList.filter(
      element => element.parentId === id
    );

    this.props.setSub(subList, 1);
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
      <option id={element.id} onClick={this.selectCategory}>
        {element}
      </option>
    ));
    console.log(this.state);
    return (
      <div className="row container" onClick={this.onClick}>
        <div className="col-md-12">
          <div className="form-group">
            <label for="product">Sub Category</label>
            <input
              type="text"
              id="subcategory"
              class="form-control"
              placeholder="Main category name"
              required
              name="categoryInput"
              onChange={this.onChange}
            />
          </div>
          {!this.state.selected ? (
            <button
              className="btn btn-danger btn-lg btn-block"
              onClick={this.saveCategory}
            >
              Save
            </button>
          ) : (
            <div className="row container">
              <div className="col-md-3">
                <button
                  className="btn btn-danger btn-lg btn-block"
                  onClick={this.sendMessage}
                >
                  Edit
                </button>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-danger btn-lg btn-block"
                  onClick={this.sendMessage}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
          <form>
            <label htmlFor="categories">Categories</label>
            <select
              multiple
              class="form-control"
              id="sel2"
              name="categories"
              onChange={this.onChange}
            >
              {categories}
            </select>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addCategory
};

export default connect(
  null,
  mapDispatchToProps
)(AddCategoryTop);
