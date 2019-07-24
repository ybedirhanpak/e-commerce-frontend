import React, { Component } from 'react'
import './My-adress.css'

import { Link } from 'react-router-dom'
import AdressCard from '../Adress-card/Adress-Card';

export default class MyAddress extends Component {
    render() {
        return (
            <div>
                <h1>My Addresses</h1>
                <div class="card card-2 col-md-6">
                <Link to='/account/addAddress'>
               To add adress  <button className="btn btn-danger" type="button">click</button>
                </Link>
                </div>
                
              <AdressCard />
              

            </div>
        )
    }
}
