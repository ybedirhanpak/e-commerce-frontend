import React, {Component} from 'react';
import Category from '../category-dropdown/category'

export default class NavigationBar extends Component {
    render() {
        return (
            <nav id="navigation" className="navbar navbar-default navbar-static">
              <div className="container">
                <div id="responsive-nav" className="collapse navbar-collapse js-navbar-collapse">
                  <ul className="main-nav nav navbar-nav">
                    <li className=""><a href="home">Home</a></li>
                    <Category tag="Teknoloji"/>
                    <Category tag="Kadın"/>
                    <Category tag="Erkek"/>
                    <Category tag="Çocuk"/>
                    <Category tag="Ayakkabı & Çanta"/>
                  </ul>                
                </div>
              </div>
          </nav>
        );
    }
}