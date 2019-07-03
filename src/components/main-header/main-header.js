import React, {Component} from 'react';

//Css
import './main-heder.css'

//Components
import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';
import Cart from '../cart/cart';

export default class MainHeader extends Component {
    render() {
        return(
            <div id="header">
				<div class="container-fluid">
					<div class="row row-container">
						<div class="col-md-3 col-logo">
							<Logo/>
						</div>
						<div class="col-md-6 col-searchbar">
							<SearchBar/>
						</div>
						<div class="col-md-3 clearfix col-account">
							<div class="header-ctn">
                                {/* Sign-in Button */}
                                <div class="dropdown">
                                    <a>
                                        <i class="fa fa-user"></i>
                                        <span>Sign in</span>
                                    </a>
                                </div>
                                {/*  */}
                                <Cart/>
							</div>
						</div>
					</div>
                </div>
			</div>
        );
    }
}