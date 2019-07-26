import React, { Component } from 'react'
import {connect} from 'react-redux'
import LoadingSpinner from '../loading-spinner/loading-spinner';

class AdressCard extends Component {
    constructor(props){
        super(props)
        
    }

    createAddress = () => {
        if(this.props.fetchInProgress) {
          return(
            <LoadingSpinner/>
          )
        }else {
          const addressList = this.props.currentUser.addresses.map(address => {
            return(
              <div key={address.id} className="col-xs-12 col-md-4">
                  <div class="card card-2">
                     <h4>{address.addressName}</h4>
                    <hr/>
                    <h5>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h5>
                    <p>{address.address}</p>
                    <br></br>
                    <input className="btn btn-danger" type="button" value="Delete" style={{marginRight:10}}>select</input>
                
                </div>
              </div>
            )
          });
          console.log("addresslist",this.props.currentUser.adresses)
          return addressList;
        }
      };
    render() {
        console.log("address card", this.props)
        return (
            <div>
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