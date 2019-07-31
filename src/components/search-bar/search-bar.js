import React, { Component } from "react";

//Utils
import { isNullOrUndefined } from "util";

//Redux
import { connect } from "react-redux";
import { updateFilters } from "../../redux/product/actions";

//Route
import { Redirect } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      selectedCategory: "",
      searchText: ""
    };
  }

  findCategoryPath = id => {
    if (this.state.selectedCategory) {
      return this.props.categories.filter(c => c.id === id)[0].path;
    }
    return "home";
  };

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
      searchText: this.state.searchText
    });
    if (this.state.selectedCategory) {
      this.setState({ isSelected: true });
    }
  };

  render() {
    if (this.state.isSelected) {
      this.setState({
        isSelected: false,
        selectedCategory: "",
        searchText: ""
      });
      return (
        <Redirect
          to={{
            pathname: `/show/${this.findCategoryPath(
              this.state.selectedCategory
            )}`,
            state: { isSearchClicked: true }
          }}
        />
      );
    }
    return (
      <div className="header-search">
        <form>
          <select className="input-select" onChange={this.handleSelectChange}>
            <option value="">Please Select</option>
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
