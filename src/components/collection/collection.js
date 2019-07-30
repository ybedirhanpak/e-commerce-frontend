import React, { Component } from "react";

import CollectionCategory from "../collection-category/collection-category";

export default class Collection extends Component {
  render() {
    return (
      <div>
        <div className="section" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <CollectionCategory
                imgSource="https://firebasestorage.googleapis.com/v0/b/e-commerce-react.appspot.com/o/product_images%2F8680957608164_0.jpg?alt=media&token=c45e9fe2-9c25-4598-911f-5f1a16acb898"
                header="Kadın"
                path="/show/Kadın"
              />
            </div>

            <div className="col-md-4 col-xs-6">
              <CollectionCategory
                imgSource="https://firebasestorage.googleapis.com/v0/b/e-commerce-react.appspot.com/o/product_images%2F9149338910750.jpg?alt=media&token=26181854-2972-4518-9480-059a9da84cea"
                header="Erkek"
                path="/show/Erkek"
              />
            </div>

            <div className="col-md-4 col-xs-6">
              <CollectionCategory
                imgSource="https://firebasestorage.googleapis.com/v0/b/e-commerce-react.appspot.com/o/product_images%2F8681190290963_1_org.jpg?alt=media&token=0a042ffb-6502-43d9-b5ec-3e4d39c20151"
                header="Çocuk"
                path="/show/Çocuk"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
