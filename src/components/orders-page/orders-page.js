import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class OrdersPage extends Component {
    render() {
        return (
            <div>
                <h1>My Orders</h1>
                <div className="panelGroup" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" 
                                data-parent="#accordion" 
                                href="#collapse">
                                <i className="fa fa-archive"></i>
                                {' Order ID: '}
                                </a>
                            </h4>
                        </div>
                        <div id="collapse" class="panel-collapse collapse in">
                            <div className="panel-body">
                                <div className="row" style={{paddingbot:20}}>
                                    <div className="col-md-6">
                                        <h1>Shipping Adress:</h1>
                                        <hr/>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio enim laborum delectus? Voluptatibus eius, optio itaque pariatur quam et ratione ut? Quidem laudantium possimus, rem quaerat necessitatibus voluptas!
                                    </div>
                                    <div className="col-md-6">
                                        <h1>Package Track</h1>
                                        <hr/>
                                        At courier
                                    </div>
                                </div>
                                <br/>
                                <div className="row" style={{paddingbot:20}}>
                                    <div className="col-md-6">
                                    <h1>Billing Adress:</h1>
                                        <hr/>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio enim laborum delectus? Voluptatibus eius, optio itaque pariatur quam et ratione ut? Quidem laudantium possimus, rem quaerat necessitatibus voluptas!
                                    </div>
                                    <div className="col-md-6">
                                        <h1>Payment Type</h1>
                                        <hr/>
                                        Credit Card
                                    </div>
                                </div>
                                <br/>
                                <div className="row" style={{paddingbot:20}}>
                                        <h1>Ordered Products</h1>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi facere incidunt consectetur! Praesentium provident cupiditate excepturi aliquid consectetur molestias nostrum fugiat iure. Mollitia soluta excepturi laboriosam hic totam pariatur eligendi?
                                        Nulla deserunt laudantium ipsum recusandae aliquid? Repellat officiis quidem enim nostrum debitis necessitatibus tempore aut nihil? Consequatur ex aliquid aperiam non labore, iste veritatis laborum id saepe, velit quibusdam dolorem?
                                        Tempore doloribus magnam sed ipsum quis fuga dolore iste totam eos ullam similique ratione corrupti delectus, doloremque tenetur consequuntur quod nostrum mollitia magni accusantium quae error debitis suscipit. Vitae, adipisci.
                                        Fuga, ut nostrum perspiciatis sequi debitis illo neque quia maxime facere numquam error veniam delectus voluptates. Similique, fugiat eveniet? Nisi praesentium fugiat dolorum alias deserunt assumenda totam sed blanditiis facilis.
                                        Nisi facilis ut deleniti ea harum beatae dolor minus eos nesciunt vero vitae veniam, natus consequuntur. Soluta fuga numquam at dicta harum possimus perspiciatis vitae, hic temporibus sequi? Ad, error.
                                        Eum, id. Eum suscipit veniam sapiente maxime delectus temporibus cum distinctio odio natus! Mollitia incidunt molestiae accusamus officiis sed libero est, soluta cupiditate corporis iure sapiente itaque obcaecati, magnam eaque.
                                        Eveniet in, accusamus facere repudiandae minus, atque repellat non, sequi asperiores dolorum officiis. Ullam sapiente distinctio ab, libero repellendus eaque voluptate vero a ipsam dicta facere, architecto rem laudantium sequi?
                                        Repudiandae, ab obcaecati voluptatum repellendus fugiat magnam rerum nostrum dicta, fuga optio voluptas magni nam unde eum aperiam quo nemo modi eaque quia ipsum architecto maiores neque. Commodi, ipsam non!
                                        Quam inventore fugit eum! Delectus voluptate nam suscipit dolores voluptatibus! Eius saepe excepturi sed, dignissimos, impedit magnam quas quidem ab, neque ullam sequi nam pariatur quam esse quisquam? Dolores, maiores.
                                        Fugiat quaerat iste possimus unde quia totam soluta voluptas non, reiciendis quis sint quos impedit et cumque, praesentium labore rem laboriosam dolores illum voluptate voluptatibus officia provident magnam. Quam, aliquam?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}
