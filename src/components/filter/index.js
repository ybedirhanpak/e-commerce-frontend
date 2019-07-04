import React, { Component } from "react";

import SelectBox from "../select-box";
import Box from '../city-dropdown/box'
import './style.css'



export default class index extends Component {

  data= [
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
      <div>
        <Box data={this.data}/>
       
        <SelectBox data={this.categories} />

        <div class="aside">
          <h3 class="aside-title">Price</h3>
          <div class="price-filter">
            <div id="price-slider" />
            <div class="input-number price-min">
              <input id="price-min" type="number" />
              <span class="qty-up">+</span>
              <span class="qty-down">-</span>
            </div>
            <span>-</span>
            <div class="input-number price-max">
              <input id="price-max" type="number" />
              <span class="qty-up">+</span>
              <span class="qty-down">-</span>
            </div>
          </div>
        </div>

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
