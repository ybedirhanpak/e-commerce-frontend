import React from "react";
import { actionCreators } from "../../redux/cart/actions";
import { connect } from "react-redux";

class CartProduct extends React.Component {
    handleDeleteFromCart = () => {
        this.props.deletefromCART(this.props.cartProduct)
    }
    render() {
        return (
            <div className="product-widget">
                <div className="product-img">
                    <img src={this.props.cartProduct.img} alt=""></img>
                </div>
                <div className="product-body">
                    <h3 className="product-name"><a href="product-link">{this.props.cartProduct.name}</a></h3>
                    <h4 className="product-price">
                        <span className="qty">{this.props.cartProduct.quantity}</span>
                        {'$'+ this.props.cartProduct.price}
                        <del className="product-old-price">
                            {'$'+ this.props.cartProduct.oldPrice}
                        </del>
                    </h4>
                </div>
                <button className="delete" onClick={this.handleDeleteFromCart}><i className="fa fa-close"></i></button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deletefromCART: actionCreators.deletefromCART
};

export default connect(
    null,
    mapDispatchToProps
)(CartProduct)