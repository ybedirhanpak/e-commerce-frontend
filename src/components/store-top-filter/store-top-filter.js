import React, { Component } from 'react'

export default class StoreTopFilter extends Component {
    render() {
        return (
            <div className="store-filter clearfix">
                <div className="store-sort">
                    <label>
                        Sort By:
                        <select className="input-select">
                            <option value="0">Popular</option>
                            <option value="1">Position</option>
                        </select>
                    </label>

                    <label>
                        Show:
                        <select className="input-select">
                            <option value="0">20</option>
                            <option value="1">50</option>
                        </select>
                    </label>
                </div>
                <ul className="store-grid">
                    <li className="active"><i className="fa fa-th"></i></li>
                    <li><a href="filter"><i className="fa fa-th-list"></i></a></li>
                </ul>
            </div>
        )
    }
}
