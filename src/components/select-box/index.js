import React, { Component } from "react";
import './style.css'

export default class index extends Component {
 

  render() {
    const optionsList = this.props.data.options.map((option,index) => (
      <div class="input-checkbox">
        <input type="checkbox" id={"category-" + index} />
        <label for={"category-" + index}>
          <span />
          {option.name}
          <small className="small">{"(" + option.quantity + ")"}</small>
        </label>
      </div>
    ));
    return (
      <div class="aside">
        <h3 class="aside-title">{this.props.data.title}</h3>
        <div class="input-checkbox">{optionsList}</div>
      </div>
    );
  }
}
