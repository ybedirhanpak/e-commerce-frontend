import React, { Component } from 'react'
import './kategori.css'

 class Kategori extends Component {
    render() {
        return (
            <li class="dropdown dropdown-large">
            <a href="dropdown" class="dropdown-toggle" data-toggle="dropdown">{this.props.tag} <b class="caret"></b></a>
            
            <ul class="dropdown-menu dropdown-menu-large row">
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Glyphicons</li>
                        <li><a href="glyphs">Available glyphs</a></li>
                        <li class=""><a href="how-to-use">How to use</a></li>
                        <li><a href="examples">Examples</a></li>
                        <li class="divider"></li>
                        <li class="dropdown-header">Dropdowns</li>
                        <li><a href="example">Example</a></li>
                        <li><a href="aligninment">Aligninment options</a></li>
                        <li><a href="headers">Headers</a></li>
                        <li><a href="disabled">Disabled menu items</a></li>
                    </ul>
                </li>
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Button groups</li>
                        <li><a href="basic-example">Basic example</a></li>
                        <li><a href="button-toolbar">Button toolbar</a></li>
                        <li><a href="sizing">Sizing</a></li>
                        <li><a href="nesting">Nesting</a></li>
                        <li><a href="vertical">Vertical variation</a></li>
                        <li class="divider"></li>
                        <li class="dropdown-header">Button dropdowns</li>
                        <li><a href="signle-button">Single button dropdowns</a></li>
                    </ul>
                </li>
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Input groups</li>
                        <li><a href="basic-example">Basic example</a></li>
                        <li><a href="sizing">Sizing</a></li>
                        <li><a href="checkboxes">Checkboxes and radio addons</a></li>
                        <li class="divider"></li>
                        <li class="dropdown-header">Navs</li>
                        <li><a href="tabs">Tabs</a></li>
                        <li><a href="pills">Pills</a></li>
                        <li><a href="justified">Justified</a></li>
                    </ul>
                </li>
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Navbar</li>
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
export default Kategori
