import React, {Component} from 'react';
import AddProductForm from '../../components/add-product-form/add-product-form'

export default class AdminPanelContainer extends Component {
    render() {
        return(
            <div className='row container'>
                <div>
                    <h1>Add New Product</h1>

                    <AddProductForm />
                </div>
            </div>
        )
    }
}