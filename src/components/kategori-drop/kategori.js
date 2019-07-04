import React, { Component } from 'react'
import './kategori.css'

 class Kategori extends Component {
    render() {
        return (
            <li class="dropdown dropdown-large">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">{this.props.tag} <b class="caret"></b></a>
            
            <ul class="dropdown-menu dropdown-menu-large row">
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Glyphicons</li>
                        <li><a href="#">Available glyphs</a></li>
                        <li class=""><a href="#">How to use</a></li>
                        <li><a href="#">Examples</a></li>
                        <li class="divider"></li>
                        <li class="dropdown-header">Dropdowns</li>
                        <li><a href="#">Example</a></li>
                        <li><a href="#">Aligninment options</a></li>
                        <li><a href="#">Headers</a></li>
                        <li><a href="#">Disabled menu items</a></li>
                    </ul>
                </li>
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Button groups</li>
                        <li><a href="#">Basic example</a></li>
                        <li><a href="#">Button toolbar</a></li>
                        <li><a href="#">Sizing</a></li>
                        <li><a href="#">Nesting</a></li>
                        <li><a href="#">Vertical variation</a></li>
                        <li class="divider"></li>
                        <li class="dropdown-header">Button dropdowns</li>
                        <li><a href="#">Single button dropdowns</a></li>
                    </ul>
                </li>
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Input groups</li>
                        <li><a href="#">Basic example</a></li>
                        <li><a href="#">Sizing</a></li>
                        <li><a href="#">Checkboxes and radio addons</a></li>
                        <li class="divider"></li>
                        <li class="dropdown-header">Navs</li>
                        <li><a href="#">Tabs</a></li>
                        <li><a href="#">Pills</a></li>
                        <li><a href="#">Justified</a></li>
                    </ul>
                </li>
                <li class="col-sm-3">
                    <ul>
                        <li class="dropdown-header">Navbar</li>
                        <li><a href="#">Default navbar</a></li>
                        <li><a href="#">Buttons</a></li>
                        <li><a href="#">Text</a></li>
                        <li><a href="#">Non-nav links</a></li>
                        <li><a href="#">Component alignment</a></li>
                        <li><a href="#">Fixed to top</a></li>
                        <li><a href="#">Fixed to bottom</a></li>
                        <li><a href="#">Static top</a></li>
                        <li><a href="#">Inverted navbar</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        )
    }
}
export default Kategori
