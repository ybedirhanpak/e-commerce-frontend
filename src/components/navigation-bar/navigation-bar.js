import React, {Component} from 'react';
import Kategori from '../kategori-drop/kategori'

export default class NavigationBar extends Component {
    render() {
        return (
            <nav id="navigation" className="navbar navbar-default navbar-static">
              <div className="container">
                <div id="responsive-nav" className="collapse navbar-collapse js-navbar-collapse">
                  <ul className="main-nav nav navbar-nav">
                    <li className=""><a href="#">Home</a></li>
                    <Kategori tag="Teknoloji"
                    />
                    <Kategori tag="Kadın"
                    />
                    
                    <Kategori tag="Erkek"
                    />
                    <Kategori tag="Çocuk"
                    />
                      <Kategori tag="Ayakkabı & Çanta"
                  />
                    <li><a href="#">İletişim</a></li>
                
                  </ul>                
                </div>
              </div>
          </nav>
        );
    }
}