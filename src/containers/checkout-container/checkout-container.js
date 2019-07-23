import React, { Component } from 'react'
import Checkoutadress from '../../components/checkout-address/checkout-adress';
import ChechkoutOrder from '../../components/checkout-order/checkout-order'
import { connect } from 'react-redux';

class CheckoutContainer extends Component {
          

    render() {
        console.log("checkout container props", this.props);
        return (
            <div className="container" style={{padding:40}}>
                <div class="row">
                <div class="col-md-7">
                <Checkoutadress />               
                </div>
                <div class="col-md-5 order-details">

                <ChechkoutOrder cart={this.props.cart}/>   
                    </div>
                </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart:state.cart
    }
}

const mapDispatchToProps = {

};


export default connect (mapStateToProps,mapDispatchToProps)(CheckoutContainer)