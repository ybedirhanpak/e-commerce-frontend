import React, {Component} from 'react';
import AddCategoryRight from '../../components/add-category-right/add-category-right'
import AddCategoryTop from '../../components/add-category-top/add-category-top'
import AddCategoryLeft from '../../components/add-category-left/add-category-left'

export default class AddCategoryContainer extends Component {
    render() {
        return(
            <div className='row container'>
                <div className="col-md-12">
                    <h1>Main Categories</h1>

                    <AddCategoryTop />
                </div>
                <div>
                    <div className="col-md-6">
                        <h1>Sub Categories</h1>

                        <AddCategoryLeft />
                    </div>
                    <div className="col-md-6">
                        <h1>Sub Categories2</h1>
                        <AddCategoryRight />
                    </div>
                </div>
            </div>
        )
    }
}
