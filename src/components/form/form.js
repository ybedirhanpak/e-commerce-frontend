import React, { Component } from 'react'

export default class form extends Component {
    render() {
        return (
            <div>
                 
                <div className="form-group">
                    <label for="ad">Ad</label>
                    <input type="text" id="name" class="form-control" placeholder="Adınızı giriniz" required></input>
                </div>
                        
                    <div className="form-group">
                    <label for="soyad">Soyad</label>
                    <input type="text" id="name" class="form-control" placeholder="Soyadınızı giriniz" required></input>
                </div>

                <div className="form-group">
           <label for="email">Email</label>
           <input type="email" id="email" class="form-control" placeholder="Email adresinizi giriniz" required></input>
            </div>

                <div className="form-group">
                    <label for="message">Mesajınız</label>
                    <textarea name="message" id="message" cols="20" rows="5" class="form-control"></textarea>
                </div>
                <br>
                </br>

                <button className="btn btn-danger btn-lg btn-block">Gönder</button>
                <br>
                </br>
                
            </div>
        )
    }
}
