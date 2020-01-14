import React, { Component } from "react";
import VariantSelector from "./VariantSelector";

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function(image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(
      this.props.product,
      selectedOptions
    );

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let variantImage =
      this.state.selectedVariantImage || this.props.product.images[0];
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    let variantQuantity = this.state.selectedVariantQuantity || 1;
    let variantSelectors = this.props.product.options.map(option => {
      return (
        <div
          key={option.id.toString()}
          className="flex flex-column justify-center items-center mb4 mh4 w-25"
        >
          <label className="mb2 f3">Size</label>
          <VariantSelector
            handleOptionChange={this.handleOptionChange}
            option={option}
          />
        </div>
      );
    });
    return (
      <div className="flex flex-column justify-between items-center">
        {this.props.product.images.length ? (
          <div className="product-image w-75 w-25-l flex justify-center">
            <img
              src={variantImage.src}
              alt={`${this.props.product.title} product shot`}
            />
          </div>
        ) : null}
        <h5 className="Product__title">{this.props.product.title}</h5>
        <span className="Product__price mb3">${variant.price | 0}</span>
        <div className="w-75 flex justify-center items-center">
          {variantSelectors}
          <div className="flex flex-column justify-center items-center mb4 mh4 w-25">
            <label className="mb2 f3">Qty</label>

            <input
              className=" bg-black white quantity"
              min="1"
              type="number"
              defaultValue={variantQuantity}
              onChange={this.handleQuantityChange}
            />
          </div>
        </div>

        <button
          className="Product__buy button w-50 w-25-ns"
          onClick={() =>
            this.props.addVariantToCart(variant.id, variantQuantity)
          }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
