import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/category/actions";
class AddCategoryRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
      categories: "",
      categorySelected: false
    };
    this.onChange = this.onChange.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
  }

  saveCategory() {
    const category = {
      Name: this.state.categoryInput,
      Path: this.state.categoryInput,
      ParentId: this.props.parentId
    };
    this.props.addCategory(category);
  }

  selectCategory(event) {
    const id = event.target.id;

    this.setState({
      category2: id
    });
  }

  onChange = event => {
    //debugger;
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const categories = this.props.categoryList.map(element => (
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
                id="subcategory"
                className="form-control"
                placeholder="Product Name..."
                required
                name="categoryInput"
                onChange={this.onChange}
              />
            </div>

            {"a" === "a" ? (
              <div className="col-md-12">
                <button
                  className="btn btn-danger btn-lg btn-block"
                  onClick={this.saveCategory}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="row col-md-12">
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
            <div className="form-group col-md-6">
              <label htmlFor="categories">Categories</label>
              <select
                multiple
                className="form-control"
                id="sel2"
                name="categories2"
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
  addCategory
};

export default connect(
  null,
  mapDispatchToProps
)(AddCategoryRight);
