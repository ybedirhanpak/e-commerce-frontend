import React, { Component } from "react";
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
        <div class="aside">
          <h3 class="aside-title">Categories</h3>
          <div class="checkbox-filter">
            <div class="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label for="category-1">
                <span />
                Laptops
                <small>(120)</small>
              </label>
            </div>

            <div class="input-checkbox">
              <input type="checkbox" id="category-2" />
              <label for="category-2">
                <span />
                Smartphones
                <small>(740)</small>
              </label>
            </div>

            <div class="input-checkbox">
              <input type="checkbox" id="category-3" />
              <label for="category-3">
                <span />
                Cameras
                <small>(1450)</small>
              </label>
            </div>

            <div class="input-checkbox">
              <input type="checkbox" id="category-4" />
              <label for="category-4">
                <span />
                Accessories
                <small>(578)</small>
              </label>
            </div>

            <div class="input-checkbox">
              <input type="checkbox" id="category-5" />
              <label for="category-5">
                <span />
                Laptops
                <small>(120)</small>
              </label>
            </div>

            <div class="input-checkbox">
              <input type="checkbox" id="category-6" />
              <label for="category-6">
                <span />
                Smartphones
                <small>(740)</small>
              </label>
            </div>
          </div>
        </div>

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

        <div class="aside">
          <h3 class="aside-title">Brand</h3>
          <div class="checkbox-filter">
            <div class="input-checkbox">
              <input type="checkbox" id="brand-1" />
              <label for="brand-1">
                <span />
                SAMSUNG
                <small>(578)</small>
              </label>
            </div>
            <div class="input-checkbox">
              <input type="checkbox" id="brand-2" />
              <label for="brand-2">
                <span />
                LG
                <small>(125)</small>
              </label>
            </div>
            <div class="input-checkbox">
              <input type="checkbox" id="brand-3" />
              <label for="brand-3">
                <span />
                SONY
                <small>(755)</small>
              </label>
            </div>
            <div class="input-checkbox">
              <input type="checkbox" id="brand-4" />
              <label for="brand-4">
                <span />
                SAMSUNG
                <small>(578)</small>
              </label>
            </div>
            <div class="input-checkbox">
              <input type="checkbox" id="brand-5" />
              <label for="brand-5">
                <span />
                LG
                <small>(125)</small>
              </label>
            </div>
            <div class="input-checkbox">
              <input type="checkbox" id="brand-6" />
              <label for="brand-6">
                <span />
                SONY
                <small>(755)</small>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
