import React, { Component } from "react";
import './style.css'

export default class index extends Component {
 

  render() {
    const optionsList = this.props.data.options.map((option,index) => (
      <div className="input-checkbox">
        <input type="checkbox" id={ this.props.data.title+"-" + index} />
        <label htmlFor={ this.props.data.title+"-" + index}>
          <span />
          {option.name}
          <small className="small">{"(" + option.quantity + ")"}</small>
        </label>
      </div>
    ));
    return (
      <div className="aside">
        <h3 className="aside-title">{this.props.data.title}</h3>
        <div className="input-checkbox">{optionsList}</div>
      </div>
    );
  }
}
