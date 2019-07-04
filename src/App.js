import React, { Component } from "react";
import "./App.css";

//Components
import MainHeader from "./components/main-header/main-header";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import ProductCard from "./components/product-card/index";
import Filter from "./components/filter";
import Dropdown from "./components/city-dropdown/dropdown"

export default class App extends Component {
  product = {
    name: "Product1",
    imgSource: "./img/product01.png",
    discount: "%30",
    new: false,
    category: "computer",
    price: "210",
    oldPrice: "300"
  };
  data= [
    {
        "name": "İstanbul",
        "subElement": [
            {
                "name": "Beşiktaş",
                "subElement": [
                    {
                        "name": "Akaretler"
                    },
                    {
                        "name": "Barbaros"
                    },
                    {
                        "name": "Çarşı"
                    }
                ]
            },
            {
                "name": "Beyoğlu",
                "subElement": [
                    {
                        "name": "Halıcıoğlu"
                    },
                    {
                        "name": "Çukur"
                    },
                    {
                        "name": "Tarlabaşı"
                    }
                ]
            }
        ]
    },
    {
        "name": "Hatay",
        "subElement": [
            {
                "name": "Hassa",
                "subElement": [
                    {
                        "name": "Girne"
                    },
                    {
                        "name": "Yeni Mahalle"
                    },
                    {
                        "name": "Ardıçlı"
                    }
                ]
            },
            {
                "name": "Kırıkhan",
                "subElement": [
                    {
                        "name": "Karadeniz"
                    },
                    {
                        "name": "Gazi Mahallesi"
                    },
                    {
                        "name": "Aktepe Mahallesi"
                    }
                ]
            }
        ]
    },
    {
        "name": "İzmir",
        "subElement": [
            {
                "name": "Güzeltepe",
                "subElement": [
                    {
                        "name": "Cem Mahallesi"
                    },
                    {
                        "name": "Mehmet Mahallesi"
                    },
                    {
                        "name": "Furkan Mahallesi"
                    }
                ]
            },
            {
                "name": "Göztepe",
                "subElement": [
                    {
                        "name": "A mahallesi"
                    },
                    {
                        "name": "B mahallesi"
                    },
                    {
                        "name": "C mahallesi"
                    }
                ]
            }
        ]
    }
]
  render() {
    return (
      <div className="App">
        <body className="App-body">
          <MainHeader />
          <NavigationBar />
          <Filter />
          <ProductCard product={this.product} />
          <Dropdown
      data = {this.data}/>
      
        </body>
      </div>
    );
  }
}
