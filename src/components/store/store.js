import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import StoreTopFilter from "../store-top-filter/store-top-filter";
import ProductCard from "../product-card/index";

import {
  getProductList,
  addProduct,
  deleteProduct
} from "../../redux/product/actions";

class Store extends Component {
  constructor(props) {
    super(props);

    //Bind Functions
    this.createProducts = this.createProducts.bind(this);
    this.addSingleProduct = this.addSingleProduct.bind(this);
  }

  componentDidMount() {
    this.props.getProductList();
  }

  createProducts = () => {
    const productsList = this.props.apiProducts.map(product => (
      <div key={product.id} className="col-md-4 col-xs-6">
        <ProductCard product={product} />
      </div>
    ));
    return productsList;
  };
  /*
  addSingleProduct() {
    this.props.addProduct({
      name: "Product5",
      imgSource: "./img/product05.png",
      discount: "%25",
      isNew: true,
      category: "televisa",
      price: "225",
      oldPrice: "300",
      description:
        "Leptobum kozmetik olarak 10 üzerinden 9 alacak bir leptoptur..ekran ve kasa sürekli koruyucu ile kullanılmıştır.güncel piyasa sıfır fiyatı 7000 tl üzerindedir.şarj aleti ile birlikte verilecektir.Şarjı ilk günki gibidir.film izlerken 4 saat civarı gidiyor.normal kullanımda 5-6 saate kadar gidiyor.Ekranı 13.3 inç FULLHD 1440x900 çözünürlük.HARDDİSK 120GB SSD vardır.SSD sayesinde oldukça serii bir bilgisayardır.sonradan takılma değil fabrikasyon 250 apple ssd dir. aynı şekilde adobe illustrate ve photoshop programlarını yüksek performansta kullandıgımız bilgisayardır .işlemcisi i5 5.nesildir..4 gb 1600mhz rame sahiptir.leptopun sesi ise bir leptoptan beklenecek performansın üstündedir.özel ses sistemi sayesinde yüksek , tok , ve berrak ses vermektedir.kardeşim grafik tasarım okuduğundan ona almıştım şuan mac'e ihtiyacımız kalmadığından bende mac kullanamadığım için satıyorum.sorabileceğiniz bütün soruları cevapladıgımı düşünüyorum . lütfen takas ve pazarlık teklif etmeyiniz bu fiyata böyle bilgisayar ciddi anlamda bulamazsınız.",
      quantity: 50,
      stars: 5,
      sizeOptions: ["14", "15", "17"]
    });
  }
  */

  render() {
    console.log("rendering");
    return (
      <div>
        <StoreTopFilter />
        <div className="row">{this.createProducts()}</div>
      </div>
    );
  }
}

const mapsStateToProps = state => {
  return {
    apiProducts: state.product.productList
  };
};

const mapDispatchToProps = {
  getProductList,
  addProduct,
  deleteProduct
};

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Store);
