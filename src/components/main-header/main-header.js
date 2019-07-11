import React, {Component} from 'react';

//Css
import './main-heder.css'

//Components
import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';
import Cart from '../cart/cart';
import UserLogin from '../user-login/index';

export default class MainHeader extends Component {
    render() {
        return(
            <div id="header">
				<div className="container-fluid">
					<div className="row row-container">
						<div className="col-md-3 col-logo">
							<Logo/>
						</div>
						<div className="col-md-6 col-searchbar">
							<SearchBar/>
						</div>
						<div className="col-md-3 clearfix col-account">
							<div className="header-ctn">
                                {/* Sign-in Button */}
                                <UserLogin/>
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