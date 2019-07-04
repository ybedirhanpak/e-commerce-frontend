import React, { Component } from 'react'
import './style.css'
class Box extends Component {



    render() {
        const dataList = this.props.data.map((element) =>
            <li key={element.name} onClick={()=>this.props.handleClick(element)} value={element} id={element.name}>{element.name}</li>

        );

        return (
            <div className="elements"> 
                {dataList}
            </div>
        )
    }
}

export default Box