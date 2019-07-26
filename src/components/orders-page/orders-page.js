import React, { Component } from 'react'
import {connect} from 'react-redux'

class OrdersPage extends Component {

    ordersCard = () => {
        const orderedProducts = this.props.orderDetails.orderedProducts.map(products => {
            return(
                <div className="panelGroup" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" 
                                data-parent="#accordion" 
                                href="#collapse">
                                <i className="fa fa-archive"></i>
                                {' Order ID: '}  {this.props.orderDetails.id}
                                </a>
                            </h4>
                        </div>
                        <div id="collapse" class="panel-collapse collapse in">
                            <div className="panel-body">
                                <div className="row" style={{paddingbot:20}}>
                                    <div className="col-md-6">
                                        <h1>Shipping Adress:</h1>
                                        <hr/>
                                    </div>
                                    <div className="col-md-6">
                                        <h1>Package Track</h1>
                                        <hr/>
                                        {this.props.orderDetails.orderTrack}
                                    </div>
                                </div>
                                <br/>
                                <div className="row" style={{paddingbot:20}}>
                                    <div className="col-md-6">
                                    <h1>Billing Adress:</h1>
                                        <hr/>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio enim laborum delectus? Voluptatibus eius, optio itaque pariatur quam et ratione ut? Quidem laudantium possimus, rem quaerat necessitatibus voluptas!
                                    </div>
                                    <div className="col-md-6">
                                        <h1>Payment Type</h1>
                                        <hr/>
                                        {this.props.orderDetails.paymentType}
                                    </div>
                                </div>
                                <br/>
                                <div className="row" style={{paddingbot:20}}>
                                        <h1>Ordered Products</h1>
                                        {products.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return orderedProducts
            
    }

    render() {
        return (
            <div>
                <h1>My Orders</h1>
                {this.ordersCard()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        orderDetails: state.order.orderDetail
    }
}

export default connect(mapStateToProps) (OrdersPage)