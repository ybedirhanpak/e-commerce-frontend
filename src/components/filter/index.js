import React, { Component } from "react";
import './style.css'

//Components
import SelectBox from "../select-box";
import Box from '../city-dropdown/box'
import CategorySelectBox from '../category-select-box/category-select-box';

export default class Filter extends Component {
  render() {
    return (
      <div className="aside-filter">
        <CategorySelectBox data={this.categories} currentCategories={this.props.currentCategories} />

        <div className="aside">
          <h3 className="aside-title">Price</h3>
          <div className="price-filter">
            <div id="price-slider" />
            <div className="input-number price-min">
              <input id="price-min" type="number" />
              <span className="qty-up">+</span>
              <span className="qty-down">-</span>
            </div>
            <span>-</span>
            <div className="input-number price-max">
              <input id="price-max" type="number" />
              <span className="qty-up">+</span>
              <span className="qty-down">-</span>
            </div>
          </div>
        </div>
        
        <Box data={this.cities}/>
       
        <SelectBox data={this.brands} />
        
      </div>
    );
  }


  categories = {
    title: "CATEGORIES",
    options: [
      {
        name: "Laptops",
        quantity: 120
      },
      {
        name: "Smartphones",
        quantity: 740
      },
      {
        name: "Cameras",
        quantity: 1450
      },
      {
        name: "Accessories",
        quantity: 500
      },
      {
        name: "Laptops",
        quantity: 120
      },
      {
        name: "Smartphones",
        quantity: 740
      }
    ]
  };
  brands = {
    title: "BRAND",
    options: [
      {
        name: "SAMSUNG",
        quantity: 120
      },
      {
        name: "LG",
        quantity: 740
      },
      {
        name: "SONY",
        quantity: 1450
      },
      {
        name: "SAMSUNG",
        quantity: 500
      },
      {
        name: "LG",
        quantity: 120
      },
      {
        name: "SONY",
        quantity: 740
      }
    ]
  };

  cities= [
    {
        "name": "İstanbul"
    },
    {
        "name": "Hatay"
    },
    {
        "name": "Ankara"
    },
    {
        "name": "Bursa"
    },
    {
        "name": "İzmir"
    }
]
}
