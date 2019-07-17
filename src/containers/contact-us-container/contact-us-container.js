import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class ContactUsContainer extends Component {
    render() {
        return (
            <div>
                <h1>Contact Us</h1>

                <p>
                İnternette güvenli alışverişin adresi TeknoMarkt'a aşağıdaki iletişim adreslerinden kolayca ulaşabilirsiniz.
                </p>
                <hr></hr>
                <p>"Müşteri Hizmetleri" servisimiz haftanın 7 günü, 24 saat gönderdiğiniz sorulara en hızlı şekilde yanıt verir.</p>

           <p>Çağrı Merkezimiz her gün 08.00 - 24.00 saatleri arasında çalışır.</p> 
                    <br></br>
                    <p>Şikayet yada öneri için <Link to='/email-contact'>tıklayınız</Link></p>
                    <br>
                    </br>
                    0850 656 40 40(Çağrı Merkezi)
                    <br>
                    </br>
                    <br></br>

            </div>
        )
    }
}
