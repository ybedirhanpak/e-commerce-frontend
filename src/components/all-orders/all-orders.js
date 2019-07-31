import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllOrders } from "../../redux/order/actions";
import {
  fetchUserByMultipleIds,
  fetchUserById
} from "../../redux/admin/actions";
import "./all-orders.css";

import LoadingSpinner from "../loading-spinner/loading-spinner";

class AllOrders extends Component {
  componentDidMount() {
    this.props.fetchAllOrders();
  }

  generateProducts = productList => {
    const products = productList.map(product => {
      return (
        <div>
          <h4>{product.name}</h4>
          <h5>
            <br />/ Quantity: x{product.quantity} <br />/ Price: ${" "}
            {product.price}
            <hr />
          </h5>
        </div>
      );
    });
    return products;
  };

  generateUserDetails = userId => {
    const userDetails = this.props.userDetails.map(userdetail => {
      if (userdetail.id === userId) {
        return (
          <div>
            {userdetail.firstName} {userdetail.lastName}
          </div>
        );
      }
      return null;
    });
    return userDetails;
  };

  generateOrders = () => {
    const allOrders = this.props.allOrders.map(order => {
      return (
        <div className="panelGroup" id="accordion" key={order.id}>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href={`#${order.id}`}
                >
                  <i className="fa fa-archive" />
                  {" Order ID: "} {order.id}
                </a>
              </h4>
            </div>
            <div
              id={`${order.id}`}
              class="panel-collapse collapse in accordion"
            >
              <div className="panel-body">
                <div className="row" style={{ paddingbot: 20 }}>
                  <div className="col-md-6">
                    <h4>Orderer User ID:</h4>
                    <hr />
                    {order.userId}
                  </div>
                  <br />
                  <div className="col-md-6">
                    <h4>Orderer User Name:</h4>
                    <hr />
                    {this.generateUserDetails(order.userId)}
                  </div>
                </div>
                <div className="row" style={{ paddingbot: 20 }}>
                  <div className="col-md-6">
                    <h4>Shipping Adress:</h4>
                    <hr />
                    {order.shippingAddress.address}
                  </div>
                  <div className="col-md-6">
                    <h4>Package Track</h4>
                    <hr />
                    {order.orderTrack}
                  </div>
                </div>
                <br />
                <div className="row" style={{ paddingbot: 20 }}>
                  <div className="col-md-6">
                    <h4>Billing Adress:</h4>
                    <hr />
                    {order.billingAddress.address}
                  </div>
                  <div className="col-md-6">
                    <h4>Order Notes:</h4>
                    <hr />
                    {order.orderNotes}
                  </div>
                </div>
                <br />
                <div className="row" style={{ paddingbot: 20 }}>
                  <div className="col-md-6">
                    <h4>Payment Type</h4>
                    <hr />
                    {order.paymentType}
                  </div>
                  <div className="col-md-6">
                    <h4>Payment Total:</h4>
                    <hr /> <b>${order.orderTotal}</b>
                  </div>
                </div>
                <br />
                <div className="row" style={{ paddingbot: 20 }}>
                  <h3>Ordered Products</h3>
                  <hr />
                  {this.generateProducts(order.orderedProducts)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return allOrders;
  };

  render() {
    if (this.props.fetchInProgress) {
      return (
        <div>
          <h1>All Orders</h1>
          <LoadingSpinner />
        </div>
      );
    }

    return (
      <div>
        <h1>All Orders</h1>
        {this.generateOrders()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allOrders: state.order.currentOrders,
    fetchInProgress: state.order.fetchInProgress,
    userDetails: state.admin.userDetails
  };
};

const mapDispatchToProps = {
  fetchAllOrders,
  fetchUserByMultipleIds,
  fetchUserById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllOrders);
