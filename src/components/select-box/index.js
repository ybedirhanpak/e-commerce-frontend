import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    const optionsList = this.props.data.map((option, index) => (
      <div key={index}>
        <div className="input-checkbox">
          <input type="checkbox" id={this.props.title + "-" + index} />
          <label htmlFor={this.props.title + "-" + index}>
            <span />
            {option}
          </label>
        </div>
      </div>
    ));
    return (
      <div>
        <h3 className="aside-title">{this.props.title}</h3>
        <div className="aside scrollable">
          <div id={"items-" + this.props.data.title}>{optionsList}</div>
        </div>
      </div>
    );
  }
}
