import React, { Component } from 'react'

export default class AddCategoryRight extends Component {
    constructor(props){
        super(props)
        this.state ={
            subCategory2:"",
            category2:"addNewSubCategory",
            categories2:"",
            categorySelected2: false
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (event) => {
        //debugger;
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        console.log(this.state)
        return (
            <div className="row container">
                <div className="col-md-6">
                    <div className="col-md-6">
                        <div className="form-group">
                        <label for="product">Sub Category</label>
                        <input
                        type="text"
                        id="subcategory"
                        class="form-control"
                        placeholder="Product Name..."
                        required
                        name="subCategory2"
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="select1" >Main Category</label>
                        <select name="category2" className="form-control" onChange={this.onChange}>
                            <option value="addNewSubCategory" active>Add New Sub Category</option>
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Third">Third</option>
                        </select>
                    </div>
                    {
                        (this.state.category2 === 'addNewSubCategory') ?
                        (
                            <div className="col-md-12">
                                <button
                                className="btn btn-danger btn-lg btn-block"
                                onClick={this.sendMessage}
                                >
                                Save
                                </button>
                            </div>
                        ) :

                        (
                            <div className="row col-md-12">
                                <div className="col-md-2">
                                    <button
                                    className="btn btn-danger btn-lg btn-block"
                                    onClick={this.sendMessage}
                                    >
                                    Edit
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <button
                                    className="btn btn-danger btn-lg btn-block"
                                    onClick={this.sendMessage}
                                    >
                                    Delete
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    </div>
                    <form>
                        <div class="form-group col-md-6">
                            <label htmlFor="categories">Categories</label>
                            <select multiple class="form-control" id="sel2" name="categories2"  onChange={this.onChange} onClick={this.onClick}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
