import React, {Component} from 'react';

//Css
import './main-heder.css'

//Components
import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';
import Cart from '../cart/cart';
import UserLoginRegisterDropdown from '../user-login-register-dropdown/user-login-register-dropdown';

export default class MainHeader extends Component {
    render() {
        return(
            <div id="header" >
				<div className="container-fluid">
					<div className="row row-container">
						<div className="col-sm-12 col-md-3">
							<Logo/>
						</div>
						<div className="col-sm-12 col-md-6">
							<SearchBar/>
						</div>
						<div className="col-sm-12 col-md-3">
							<div className="row right-col">
								<div className="col-xs-6 col-md-7 ">
									<UserLoginRegisterDropdown/>
								</div>
								<div className="col-xs-6 col-md-5">
									<Cart/>
								</div>
							</div>
						</div>
					</div>
    		    </div>
			</div>
        );
    }
}