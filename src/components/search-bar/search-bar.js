import React, {Component} from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div class="header-search">
                <form>
                    <select class="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                    </select>
                    <input class="input" placeholder="Search here"></input>
                    <button class="search-btn">Search</button>
                </form>
            </div>
        );
    }
}