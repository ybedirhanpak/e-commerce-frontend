import React, {Component} from 'react';
import logo from '../../logo.svg';

export default class Logo extends Component {
    render() {
        return (
            <div class="header-logo">
                <a href="#" class="logo">
                    <img src={"../../../public/img/logo.png"} alt="Logo"></img>
                </a>
            </div>
        );
    }
}