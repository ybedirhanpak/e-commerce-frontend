import React from 'react';
import './admin-panel.css';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product:'',
            description:'',
            price:'',
            category:'',
            fillAreasError: false
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange = (event) => {
        debugger;
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <form className="text-center border border-light p-5" action="#!">
                <input  type="text" 
                        name="product" 
                        className="form-control mb-4" 
                        placeholder="Product name..."
                        onChange={this.onChange} />
                <input  type="text" 
                        name="description" 
                        className="form-control mb-4" 
                        placeholder="Description..."
                        onChange={this.onChange} />
                <input  type="text" 
                        name="price" 
                        className="form-control mb-4" 
                        placeholder="Price"
                        onChange={this.onChange} />
                <div className="form-group">
                    <select name="category" 
                            className="form-control"
                            onChange={this.onChange}>
                    <option value="select">Kategori Seç</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    </select>
                </div>
                <button className="btn btn-info btn-block my-4" type="submit">Yükle</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;