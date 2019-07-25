import React, { Component } from 'react'
import './My-adress.css'

import AdressCard from '../Adress-card/Adress-Card';


export default class MyAddress extends Component {
    render() {
        return (
            <div className="row">
                <h1>My Addresses</h1>
              <AdressCard />
            </div>
        )
    }
}
