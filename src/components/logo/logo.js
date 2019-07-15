import React, {Component} from 'react';
import logo from '../../logo.svg';

import './logo.css'

//Route
import { Link } from 'react-router-dom'

export default class Logo extends Component {
    render() {
        return (
            <div className="img-container">
                <Link to="/home">
                    <img src={logo} className="App-logo" alt="logo"></img>
                </Link>
            </div>
            
        );
    }
}