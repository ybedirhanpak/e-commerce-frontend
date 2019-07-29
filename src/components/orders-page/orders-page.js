import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/order/actions";

import LoadingSpinner from "../loading-spinner/loading-spinner";

class OrdersPage extends Component {
  componentDidMount() {
    this.props.fetchOrders({
      orderIds: this.props.currentUser.orders
    });
  }

  generateProducts = productList => {
    const products = productList.map(product => {
      return <h5>{product.name}</h5>;
    });
    return products;
  };

  generateOrders = () => {
    const ordersID = this.props.currentOrders.map(order => {
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
            <div id={`${order.id}`} class="panel-collapse collapse in">
              <div className="panel-body">
                <div className="row" style={{ paddingbot: 20 }}>
                  <div className="col-md-6">
                    <h1>Shipping Adress:</h1>
                    <hr />
                    {order.shippingAddress.address}
                  </div>
                  <div className="col-md-6">
                    <h1>Package Track</h1>
                    <hr />
                    {order.orderTrack}
                  </div>
                </div>
                <br />
                <div className="row" style={{ paddingbot: 20 }}>
                  <div className="col-md-6">
                    <h1>Billing Adress:</h1>
                    <hr />
                    {order.billingAddress.address}
                  </div>
                  <div className="col-md-6">
                    <h1>Payment Type</h1>
                    <hr />
                    {order.paymentType}
                  </div>
                </div>
                <br />
                <div className="row" style={{ paddingbot: 20 }}>
                  <h1>Ordered Products</h1>
                  {this.generateProducts(order.orderedProducts)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return ordersID;
  };

  render() {
    if (this.props.fetchInProgress) {
      return (
        <div>
          <h1>My Orders</h1>
          <LoadingSpinner />
        </div>
      );
    }

    return (
      <div>
        <h1>My Orders</h1>
        {this.generateOrders()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentOrders: state.order.currentOrders,
    currentUser: state.user.currentUser,
    fetchInProgress: state.order.fetchInProgress
  };
};

const mapDispatchToProps = {
  fetchOrders
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPage);
