import React, {Component} from 'react';
import logo from '../../logo.svg';

export default class Logo extends Component {
    render() {
        return (
            <div className="header-logo">
                <a href="home" className="logo">
                    <img src={logo} alt="Logo"></img>
                </a>
            </div>
        );
    }
}