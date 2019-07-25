import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    const optionsList = this.props.data.options.map((option, index) => (
      <div key={index} >

        <div className="input-checkbox">
          <input type="checkbox" id={this.props.data.title + "-" + index} />
          <label htmlFor={this.props.data.title + "-" + index}>
            <span />
            {option.name}
            <small className="small">{"(" + option.quantity + ")"}</small>
          </label>
        </div>
      </div>
    ));
    return (
      <div className="aside">
        <h3 className="aside-title" data-toggle="collapse" data-target={"#items-" + this.props.data.title} >
          {this.props.data.title}
        </h3>
        <div className="collapse" id={"items-" + this.props.data.title}>
          {optionsList}
        </div>
      </div>
    );
  }
}
