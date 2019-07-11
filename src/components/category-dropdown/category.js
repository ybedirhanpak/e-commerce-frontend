import React, { Component } from 'react'
import './category.css'

export default class Category extends Component {
    render() {
        return (
            <li className="dropdown dropdown-large">
            <a href="dropdown" className="dropdown-toggle" data-toggle="dropdown">{this.props.tag} <b className="caret"></b></a>
            
            <ul className="dropdown-menu dropdown-menu-large row">
                <li className="col-sm-3">
                    <ul>
                        <li className="dropdown-header">Glyphicons</li>
                        <li><a href="glyphs">Available glyphs</a></li>
                        <li className=""><a href="how-to-use">How to use</a></li>
                        <li><a href="examples">Examples</a></li>
                        <li className="divider"></li>
                        <li className="dropdown-header">Dropdowns</li>
                        <li><a href="example">Example</a></li>
                        <li><a href="aligninment">Aligninment options</a></li>
                        <li><a href="headers">Headers</a></li>
                        <li><a href="disabled">Disabled menu items</a></li>
                    </ul>
                </li>
                <li className="col-sm-3">
                    <ul>
                        <li className="dropdown-header">Button groups</li>
                        <li><a href="basic-example">Basic example</a></li>
                        <li><a href="button-toolbar">Button toolbar</a></li>
                        <li><a href="sizing">Sizing</a></li>
                        <li><a href="nesting">Nesting</a></li>
                        <li><a href="vertical">Vertical variation</a></li>
                        <li className="divider"></li>
                        <li className="dropdown-header">Button dropdowns</li>
                        <li><a href="signle-button">Single button dropdowns</a></li>
                    </ul>
                </li>
                <li className="col-sm-3">
                    <ul>
                        <li className="dropdown-header">Input groups</li>
                        <li><a href="basic-example">Basic example</a></li>
                        <li><a href="sizing">Sizing</a></li>
                        <li><a href="checkboxes">Checkboxes and radio addons</a></li>
                        <li className="divider"></li>
                        <li className="dropdown-header">Navs</li>
                        <li><a href="tabs">Tabs</a></li>
                        <li><a href="pills">Pills</a></li>
                        <li><a href="justified">Justified</a></li>
                    </ul>
                </li>
                <li className="col-sm-3">
                    <ul>
                        <li className="dropdown-header">Navbar</li>
                        <li><a href="deafult-navbar">Default navbar</a></li>
                        <li><a href="buttons">Buttons</a></li>
                        <li><a href="text">Text</a></li>
                        <li><a href="non-nav">Non-nav links</a></li>
                        <li><a href="component">Component alignment</a></li>
                        <li><a href="fixed-to-top">Fixed to top</a></li>
                        <li><a href="fixed-to-bottom">Fixed to bottom</a></li>
                        <li><a href="static-top">Static top</a></li>
                        <li><a href="inverted-navbar">Inverted navbar</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        )
    }
}
