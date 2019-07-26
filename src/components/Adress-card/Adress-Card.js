import React, { Component } from 'react'
import {connect} from 'react-redux'
import './address-card.css'

import { Link } from 'react-router-dom'


class AdressCard extends Component {
    constructor(props){
        super(props)
        
    }

    createAddress = () => {
        const addressList = this.props.currentUser.addresses.map(address => {
        return(
            <div key={address.id} className="col-xs-12 col-md-6">
                <div class="card card-2">
                    <h4>{address.addressName}</h4>
                <hr/>
                <h5>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h5>
                <p className="order-address-p">{address.address}</p>
                <br></br>
                <input className="btn btn-danger" type="button" value="Delete" style={{marginRight:10}}></input>
                <input className="btn btn-warning" type="button" value="Edit"></input>
                </div>
            </div>
        )
        });
        console.log("addresslist",this.props.currentUser.adresses)
        return addressList;
      };
    render() {
        console.log("address card", this.props)
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <div class="card card-2">
                        <Link to='/account/addAddress'>
                        To add adress  <button className="btn btn-danger" type="button">click</button>
                        </Link>
                    </div>
                </div>
                {this.createAddress()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps) (AdressCard)