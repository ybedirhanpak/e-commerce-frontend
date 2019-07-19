import React from 'react';

class AddProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product:'',
            description:'',
            price:'',
            category1:'',
            category2:'',
            category3:'',
            fillAreasError: false,
            category1Selected: false,
            category2Selected: false
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange = (event) => {
        //debugger;
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSelectChange = (event) => {
      const name = event.target.name;
      if(name === 'category1') {
        this.setState({
          category1Selected: true
        })
      } else if(name === 'category2') {
        this.setState({
          category2Selected: true
        })
      }
      this.onChange(event);
    }

    render(){
        console.log(this.state)
        return(
            <div>
              <label for="product">Product Image</label>
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-image"></i></span>
                <input type="file" class="form-control" aria-describedby="basic-addon1" accept="image/png, image/jpeg"></input>
              </div>

              <div className="form-group">
                <label for="product">Product Name</label>
                <input
                  type="text"
                  id="product"
                  class="form-control"
                  placeholder="Product Name..."
                  required
                  name="product"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label for="price">Price</label>
                <input
                  type="string"
                  id="price"
                  class="form-control"
                  placeholder="Product Price..."
                  required
                  name="price"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label for="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  cols="20"
                  rows="5"
                  class="form-control"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
              <label htmlFor="select1" >Main Category</label>
                <select name="category1" className="form-control" onChange={this.onSelectChange}>
                  <option value="select">Select an Option</option>
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                  <option value="Third">Third</option>
                </select>
            </div>

            {
              (this.state.category1Selected) ?
              (
                <div className="form-group">
                  <label htmlFor="select2" >Sub Category</label>
                    <select name="category2" className="form-control" onChange={this.onSelectChange} disabled={this.state.category2Disabled}>
                      <option value="select" disabled active>Please Select Main Category</option>
                      <option value="First">First</option>
                      <option value="Second">Second</option>
                      <option value="Third">Third</option>
                    </select>
                </div>
              ) :
              (
                null
              )
            }

{
              (this.state.category2Selected) ?
              (
                <div className="form-group">
                  <label htmlFor="select2" >Sub Category 2</label>
                    <select name="category3" className="form-control" onChange={this.onSelectChange} disabled={this.state.category2Disabled}>
                      <option value="select" disabled>Please Select Main Category</option>
                      <option value="First">First</option>
                      <option value="Second">Second</option>
                      <option value="Third">Third</option>
                    </select>
                </div>
              ) :
              (
                null
              )
            }


        <br />

        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={this.sendMessage}
        >
          Send
        </button>
        <br />
      </div>

        )
    }
}

export default AddProductForm;