import React, { Component } from 'react'

export default class AddCategoryTop extends Component {
    constructor(props){
        super(props)
        this.state ={
            categoryInput:"",
            categories:"addNewCategory",
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (event) => {
        //debugger;
        this.setState({
            [event.target.name]: event.target.value,
        })
        
    }


    render() {
        console.log(this.state)
        return (
            <div className="row container" onClick={this.onClick}>
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="product">Sub Category</label>
                        <input type="text"
                                id="subcategory"
                                class="form-control"
                                placeholder="Product Name..."
                                required
                                name="categoryInput"
                                onChange={this.onChange} />
                        
                        
                    </div>
                    {
                    (this.state.categories === 'addNewCategory') ?
                    (
                        <button
                        className="btn btn-danger btn-lg btn-block"
                        onClick={this.sendMessage}
                        >
                        Save
                        </button>
                    ) :

                    (
                        <div className="row container">
                            <div className="col-md-3">
                                <button
                                className="btn btn-danger btn-lg btn-block"
                                onClick={this.sendMessage}
                                >
                                Edit
                                </button>
                            </div>
                            <div className="col-md-3">
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
                    <form>
                        <label htmlFor="categories">Categories</label>
                        <select multiple class="form-control" id="sel2" name="categories"  onChange={this.onChange}>
                            <option active value="addNewCategory">Add New Category</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                </form>
                </div>
            </div>
        )
    }
}
