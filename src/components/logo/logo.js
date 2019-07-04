import React, {Component} from 'react';
import logo from '../../logo.svg';

export default class Logo extends Component {
    render() {
        return (
            <div class="header-logo">
                <a href="home" class="logo">
                    <img src={logo} alt="Logo"></img>
                </a>
            </div>
        );
    }
}