import React from "react";
import { actionCreators } from "../../redux/cart/actions";
import { connect } from "react-redux";

class CartProduct extends React.Component {
  handleDeleteFromCart = () => {
    console.log("la", this.props.cartProduct);
    this.props.deletefromCART(this.props.cartProduct);
  };
  render() {
    return (
      <div className="product-widget">
        <div className="product-img">
          <img src={this.props.cartProduct.img} alt="" />
        </div>
        <div className="product-body">
          <h3 className="product-name">
            <a href="#">
              {this.props.cartProduct.name}({this.props.cartProduct.size})
            </a>
          </h3>
          <h4 className="product-price">
            <span className="qty">{this.props.cartProduct.quantity}</span>
            {"$" + Number(this.props.cartProduct.price).toFixed(2)}
            <del className="product-old-price">
              {"$" +
                (
                  Number(this.props.cartProduct.oldPrice) *
                  Number(this.props.cartProduct.quantity)
                ).toFixed(2)}
            </del>
          </h4>
        </div>
        <button className="delete" onClick={this.handleDeleteFromCart}>
          <i className="fa fa-close" />
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deletefromCART: actionCreators.deletefromCART
};

export default connect(
  null,
  mapDispatchToProps
)(CartProduct);
