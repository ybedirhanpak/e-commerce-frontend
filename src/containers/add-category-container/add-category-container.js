import React, { Component } from "react";
import AddCategoryRight from "../../components/add-category-right/add-category-right";
import AddCategoryTop from "../../components/add-category-top/add-category-top";
import AddCategoryLeft from "../../components/add-category-left/add-category-left";
import { connect } from "react-redux";

class AddCategoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      parentId1: "",
      parentId2: ""
    };
    this.setSubCategories = this.setSubCategories.bind(this);
    this.clearParents = this.clearParents.bind(this);
  }

  setSubCategories(subType, parentId) {
    if (subType === 1) {
      this.setState({
        parentId1: parentId,
        parentId2: ""
      });
    } else {
      this.setState({
        parentId2: parentId
      });
    }
  }
  clearParents(type) {
    if (type === "both") {
      this.setState({
        parentId1: "",
        parentId2: ""
      });
    } else {
      this.setState({
        parentId2: ""
      });
    }
  }

  render() {
    return (
      <div className="row container">
        <div className="col-md-12">
          <h1>Main Categories</h1>
          <AddCategoryTop
            setSub={this.setSubCategories}
            categoryList={this.props.categories}
            clearParents={this.clearParents}
          />
        </div>
        <div>
          <div className="col-md-6">
            <h1>Sub Categories</h1>
            <AddCategoryLeft
              setSub={this.setSubCategories}
              allCategories={this.props.categories}
              parentId={this.state.parentId1}
              clearParents={this.clearParents}
            />
          </div>
          <div className="col-md-6">
            <h1>Sub Categories2</h1>
            <AddCategoryRight
              parentId={this.state.parentId2}
              allCategories={this.props.categories}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categories
  };
};

export default connect(
  mapStateToProps,
  null
)(AddCategoryContainer);
