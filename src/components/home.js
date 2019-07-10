import React from 'react'
import Footer from "./bottom-footer/footer";
import Slide from "./slides/slide"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainHeader from "./main-header/main-header";
import NavigationBar from "./navigation-bar/navigation-bar";
import ProductContainer from './product-container/product-container';
import homeContent from './homeContent';

export default function home() {
    return (
        <div>
            <body className="App-body">

                <MainHeader />
                <NavigationBar />
                <homeContent />
                <ProductContainer />
                <Slide />
                <Footer />

            </body>
        </div>
    )
}
