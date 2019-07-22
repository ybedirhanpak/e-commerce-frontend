import React, { Component } from 'react'

export default class LoadingSpinner extends Component {
    render() {
        return (
            <i className="fa fa-spinner fa-spin" style={{fontSize:24, marginTop:15}}></i>
        )
    }
}
