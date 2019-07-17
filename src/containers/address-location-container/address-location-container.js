import React, { Component } from 'react'
import Map from '../../components/location-map/map'


export default class AddressLocationContainer extends Component {
    render() {
        return (
            <div className="container">
                <h1>Address & Location Container</h1>
                <Map />
            </div>
        )
    }
}
