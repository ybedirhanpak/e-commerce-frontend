import React, { Component } from 'react'

export default class AddAdress extends Component {
    render() {
        return (
                <div className="billing-details">
							
							<div className="form-group">
								<input className="input" type="text" name="first-name" placeholder="First Name"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="last-name" placeholder="Last Name"/>
							</div>
							<div className="form-group">
								<input className="input" type="email" name="email" placeholder="Email"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="address" placeholder="Address"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="city" placeholder="City"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="country" placeholder="Country"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="zip-code" placeholder="ZIP Code"/>
							</div>
							<div className="form-group">
								<input className="input" type="tel" name="tel" placeholder="Telephone"/>
							</div>
                            <button className="btn btn-lg btn-danger" type="button">Save</button>
                            </div>
          
        )
    }
}
