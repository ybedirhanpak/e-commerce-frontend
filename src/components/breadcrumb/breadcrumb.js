import React, { Component } from 'react';
import './breadcrumb.css'

import { Link } from 'react-router-dom';
import { isNullOrUndefined } from 'util';

/**
 * Breadcrumb, used in CategoryContainer and ProductDetailed
 * props: {
 * 	categories: {
 * 		_mainCategory, 
 * 		_subcategory, 
 * 		_subheader
 * 	},
 * 	product: {
 * 		name
 * 	}
 * }
 * 
 * _mainCategory, _subcategory, _subheader: {
 * 	name,
 * 	path,
 * }
 * 
 * 
 * Example: "http://localhost:3000/show/Erkek/Giyim"
 * 
 * _mainCategory: {
 * 	name: Erkek,
 * 	path: erkek,
 * }
 * 
 * _subheader: {
 * 	name: Giyim,
 * 	path: giyim,
 * }
 * 
 * _subcategory: null
 * 
 */
export default class Breadcrumb extends Component {
    render() {
		//Get categories from props
		const { _mainCategory, _subheader} = this.props.categories;
		//Get product from props
		const product = this.props.product;
        return (
        <div id="breadcrumb" className="breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							{
								(!isNullOrUndefined(product)) ?
								(
									/**** 	HOME / MAIN CATEGORY / SUB HEADER / SUBCATEGORY / PRODUCT 	****/
									<div>
										<li><Link to={`/home`}>Home</Link></li>
										<li><Link to={`/show/${_mainCategory.path}`}>{_mainCategory.name}</Link></li>
										<li><Link to={`/show/${_mainCategory.path}/${_subheader.path}`}>{_subheader.name}</Link></li>
										<li className="active">{product.name}</li>
									</div>
								) : (!isNullOrUndefined(_subheader)) ?
								(
									/**** 	HOME / MAIN CATEGORY / SUB HEADER 	 ****/
									<div>
										<li><Link to={`/home`}>Home</Link></li>
										<li><Link to={`/show/${_mainCategory.path}`}>{_mainCategory.name}</Link></li>
										<li>{_subheader.name}</li>
									</div>
								) : (!isNullOrUndefined(_mainCategory)) ?
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