import React, {Component} from 'react';

export default class TopHeader extends Component {
    render() {
        return(
            <div id="top-header">
				<div className="container-fluid">
					<ul className="header-links pull-left">
						<li><a href="#"><i className="fas fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i className="fas fa-envelope-o"></i> email@email.com</a></li>
						<li><a href="#"><i className="fas fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li><a href="#"><i className="fas fa-dollar"></i> USD</a></li>
						<li><a href="#"><i className="fas fa-user-o"></i> My Account</a></li>
					</ul>
				</div>
			</div>
        );
    }
}