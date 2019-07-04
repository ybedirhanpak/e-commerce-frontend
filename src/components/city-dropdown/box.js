import React, { Component } from 'react'
import './style.css'

class Box extends Component {

    render() {
        const dataList = this.props.data.map((element) =>
            <li className="list-group-item my-item" key={element.name} value={element} id={element.name}>{element.name}</li>
        );

        return (

            <div className="list-group">
               {dataList}   
            </div>

<div class="aside">
<h3 class="aside-title" onClick={()=>this.props.handleClick(element)}  >Categories</h3>
<div class="checkbox-filter">

    <div class="input-checkbox">
        <input type="checkbox" id="category-1">
        <label for="category-1">
            <span></span>
            Laptops
            <small>(120)</small>
        </label>
    </div>

    <div class="input-checkbox">
        <input type="checkbox" id="category-2">
        <label for="category-2">
            <span></span>
            Smartphones
            <small>(740)</small>
        </label>
    </div>

    <div class="input-checkbox">
        <input type="checkbox" id="category-3">
        <label for="category-3">
            <span></span>
            Cameras
            <small>(1450)</small>
        </label>
    </div>

    <div class="input-checkbox">
        <input type="checkbox" id="category-4">
        <label for="category-4">
            <span></span>
            Accessories
            <small>(578)</small>
        </label>
    </div>

    <div class="input-checkbox">
        <input type="checkbox" id="category-5">
        <label for="category-5">
            <span></span>
            Laptops
            <small>(120)</small>
        </label>
    </div>

    <div class="input-checkbox">
        <input type="checkbox" id="category-6">
        <label for="category-6">
            <span></span>
            Smartphones
            <small>(740)</small>
        </label>
    </div>
</div>
</div>
        )
    }
}

export default Box