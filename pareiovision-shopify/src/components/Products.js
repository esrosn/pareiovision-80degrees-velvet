import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    let products = this.props.products.map(product => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return <div className="flex flex-column pa4">{products}</div>;
  }
}

export default Products;
