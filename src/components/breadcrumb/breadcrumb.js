import React, { Component } from 'react';
import './breadcrumb.css'

import { Link } from 'react-router-dom';

export default class Breadcrumb extends Component {
    render() {
		const { _mainCategory, _subcategory, _subheader } = this.props.params;
		const productId = this.props.productId;
        return (
        <div id="breadcrumb" className="breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							{
								(productId !== undefined) ?
								(
									/**** 	HOME / MAIN CATEGORY / SUB HEADER / SUBCATEGORY / PRODUCT 	****/
									<div>
										<li><Link to={`/home`}>Home</Link></li>
										<li><Link to={`/show/${_mainCategory.path}`}> {_mainCategory.name} </Link></li>
										<li><Link to={`/show/${_mainCategory.path}/${_subheader.path}`}> {_subheader.name} </Link></li>
										<li><Link to={`/show/${_mainCategory.path}/${_subheader.path}/${_subcategory.path}`}> {_subcategory.name} </Link></li>
										<li className="active">{productId}</li>
									</div>
								) : (_subcategory !== null) ?
								(
									/**** 	HOME / MAIN CATEGORY / SUB HEADER / SUBCATEGORY 	****/
									<div>
										<li><Link to={`/home`}>Home</Link></li>
										<li><Link to={`/show/${_mainCategory.path}`}> {_mainCategory.name} </Link></li>
										<li><Link to={`/show/${_mainCategory.path}/${_subheader.path}`}> {_subheader.name} </Link></li>
										<li>{_subcategory.name}</li>
									</div>
								) : (_subheader !== null) ?
								(
									/**** 	HOME / MAIN CATEGORY / SUB HEADER 	 ****/
									<div>
										<li><Link to={`/home`}>Home</Link></li>
										<li><Link to={`/show/${_mainCategory.path}`}> {_mainCategory.name} </Link></li>
										<li>{_subheader.name}</li>
									</div>
								) : (_mainCategory !== null) ?
								(
									/**** 	HOME / MAIN CATEGORY 	****/
									<div>
										<li><Link to={`/home`}>Home</Link></li>
										<li>{_mainCategory.name}</li>
									</div>
								) :
								(
									null
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
        );
    }
}