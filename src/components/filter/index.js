import React, { Component } from "react";
import './style.css'

//Components
import SelectBox from "../select-box";
import Box from '../city-dropdown/box'
import CategorySelectBox from '../category-select-box/category-select-box';
import PriceFilter from '../price-filter/price-filter'

export default class Filter extends Component {
  render() {
    return (
      <div className="aside-filter">
        <CategorySelectBox data={this.categories} currentCategories={this.props.currentCategories} />
        <SelectBox data={this.categories} />
        <PriceFilter url={this.props.url}/>
               
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
