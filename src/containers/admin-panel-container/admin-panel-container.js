import React, { Component } from "react";
import AddProductForm from "../../components/add-product-form/add-product-form";

export default class AdminPanelContainer extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ padding: 30 }}>
        <div>
          <h1>Add New Product</h1>
          <AddProductForm />
        </div>
      </div>
    );
  }
}
