import React, { Component } from 'react'
import Box from './box'
import './style.css'


class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showItems:false,
            data : this.props.data,
            selectedCity: null,
        }
        this.selectCity = this.selectCity.bind(this)
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }


    selectCity(item)   {
        this.setState  ({     
            selectedCity: item,
        })
    }


    render() {
        console.log(this.state.selectedCity)
        return (
            <div>
                <div className="row search-input-group">
                    <div className="col-4">
                        {/* City Input */}
                        <input className="search-input" type="text" placeholder="Şehir seçiniz :" onClick={this.dropDown}
                        value={this.state.selectedCity !== null
                        ?this.state.selectedCity.name
                        :null
                        }
                        />
                    </div>

                </div>
                    
                <div className="row box-row">
                    <div className="col-4">
                        {
                            this.state.showItems===true
                        ?<Box
                            handleClick={this.selectCity}
                            data={this.state.data}
                        />
                        
                        :null
                        }
                    </div>
                </div> 
            </div>

        )
    }
}
export default Dropdown


