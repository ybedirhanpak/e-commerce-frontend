import React, {Component} from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="header-search">
                <form>
                    <select className="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                    </select>
                    <input className="input" placeholder="Search here"></input>
                    <button className="search-btn">Search</button>
                </form>
            </div>
        );
    }
}