import React, { Component } from "react";

//Utils
import { isNullOrUndefined } from "util";

//Redux
import { connect } from "react-redux";
import { updateFilters } from "../../redux/product/actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: {},
      searchText: ""
    };
  }

  generateCategories = () => {
    const mainCategories = this.props.categories.filter(c =>
      isNullOrUndefined(c.parentId)
    );
    const optionList = mainCategories.map(mainCategory => (
      <option key={mainCategory.id} value={mainCategory.id}>
        {mainCategory.name}
      </option>
    ));
    return optionList;
  };

  handleSelectChange = event => {
    this.setState({
      selectedCategory: event.target.value
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = event => {
    event.preventDefault();
    //Update redux
    this.props.updateFilters({
      type: "searchBar",
      searchText: this.state.searchText,
      mainCategoryId: this.state.selectedCategory
    });
  };

  render() {
    console.log("search bar state", this.state.selectedCategory.id);
    return (
      <div className="header-search">
        <form>
          <select className="input-select" onChange={this.handleSelectChange}>
            <option value="0">All Categories</option>
            {this.generateCategories()}
          </select>
          <input
            name="searchText"
            className="input"
            placeholder="Search here"
            onChange={this.handleInputChange}
          />
          <button className="search-btn" onClick={this.handleClick}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    categories: state.category.categories
  };
};

const mapDispatchToProps = {
  updateFilters
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(SearchBar);
