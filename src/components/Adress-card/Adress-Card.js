import React, { Component } from 'react'

export default class AdressCard extends Component {
    render() {
        return (
            <div>
                 <div class="card card-2">
                     <h4>Cem Ev</h4>
                    <hr/>
                    <h5>Ali Cem Kirlibal</h5>
                    <p>Yunusemre Mah. 1400sk 5/6 İstanbul/Sultangazi</p>
                    <br></br>
                    <input className="btn btn-danger" type="button" value="Delete" style={{marginRight:10}}></input>
                    <input className="btn btn-warning" type="button" value="Edit"></input>
                </div>
                
            </div>
        )
    }
}
