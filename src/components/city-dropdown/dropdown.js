import React, { Component } from 'react'
import Box from './box'
import './style.css'

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : this.props.data,
            selectedCity: null,
            selectedDistrict: null,
            selectedNeighbor:null,
            showItems:false
        }
        this.selectCity = this.selectCity.bind(this)
        this.selectDistrict = this.selectDistrict.bind(this)
        this.selectNeighbor = this.selectNeighbor.bind(this)
    }

    dropDown = () =>{
        this.setState(prevState =>({
            showItems: !prevState.showItems,
        }))
    }


    selectCity(item) {
    //    console.log(item.name)
        this.setState ({
            selectedCity:item,
            selectedDistrict:null,
            selectedNeighbor:null
            
        })
    }
    selectDistrict(item) {
        this.setState({
            selectedDistrict:item,
            selectedNeighbor:null
        })
    }
    selectNeighbor(item){
        this.setState({
            selectedNeighbor:item
        }) 
    }


    render() {
        console.log(this.state.selectedCity)
        return (
        <div>
            <div className="inputCity">
                <input  type="text" placeholder="Şehir seçiniz:" onClick = {this.dropDown} 
                value= {this.state.selectedCity !== null
                ?this.state.selectedCity.name
                :null    
                }
                />
            </div>
            <div>
                {
                this.state.showItems===true
                ?<Box                   
                    handleClick={this.selectCity}
                    data={this.state.data}
                />
                : null
                }
            </div>
            <div className="inputDistrict">
                <input  type="text" placeholder="İlçe seçiniz:"
                value={this.state.selectedDistrict !== null
                ?this.state.selectedDistrict.name
                :null    
                }
                /> 
            </div>
            <div>                  
                {this.state.selectedCity !== null  && this.state.showItems===true
                 
                ? <Box
                        handleClick={this.selectDistrict}
                        data={this.state.selectedCity.subElement}    
                    />
                : null   
                }
            </div>            
            <div >
                
                <input  type="text" placeholder="Mahalle seçiniz:"
                value={this.state.selectedNeighbor !==null
                ?this.state.selectedNeighbor.name
                :null
                }
                />
            <div>
            </div>       
                {this.state.selectedDistrict !== null  && this.state.showItems ===true
                ?<Box
                        handleClick={this.selectNeighbor}
                        data = {this.state.selectedDistrict.subElement}
                />
                : null
                }    

                
                
            </div>
        </div> 
        )
    }
}
export default Dropdown