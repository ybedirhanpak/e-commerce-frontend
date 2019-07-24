import React, { Component } from "react";

import SelectBox from "../select-box";
import Box from '../city-dropdown/box'
import './style.css'
import PriceFilter from "../price-filter/price-filter"

export default class index extends Component {

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
  

  render() {
    return (
      <div className="aside-filter">
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
}
