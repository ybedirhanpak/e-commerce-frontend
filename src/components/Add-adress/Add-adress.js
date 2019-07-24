import React, { Component } from 'react'

export default class AddAdress extends Component {
	constructor(props){
		super(props)
		this.state={
			firstName:"",
			lastName:"",
			email:"",
			address:"",
			city:"",
			country:"",
			zipCode:"",
			tel:"",
		}

		this.onChange=this.onChange.bind(this)


	}
	onChange = (event) =>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	onClick = () => {
		if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" ||  this.state.address === "" ||  this.state.city === "" ||  this.state.country === "" ||  this.state.zipCode === "" ||  this.state.tel === "") 
		{
			alert("Please fill the all fields!!!")
		}
	}
    render() {
		console.log("add-adress page", this.state)
        return (
                <div className="billing-details">
							
							<div className="form-group">
								<input className="input" type="text" name="firstName" placeholder="First Name" onChange={this.onChange}/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="lastName" placeholder="Last Name" onChange={this.onChange}/>
							</div>
							<div className="form-group">
								<input className="input" type="email" name="email" placeholder="Email" onChange={this.onChange}/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="address" placeholder="Address" onChange={this.onChange}/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="city" placeholder="City" onChange={this.onChange}/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="country" placeholder="Country" onChange={this.onChange}/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="zipCode" placeholder="ZIP Code" onChange={this.onChange}/>
							</div>
							<div className="form-group">
								<input className="input" type="tel" name="tel" placeholder="Telephone" onChange={this.onChange}/>
							</div>
                            <button className="btn btn-lg btn-danger" type="button" onClick={this.onClick}>Save</button>
                            </div>
          
        )
    }
}
