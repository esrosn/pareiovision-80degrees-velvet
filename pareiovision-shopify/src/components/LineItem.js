import React, { Component } from "react";

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return (
      <li className="flex justify-between ma2">
        <div className="Line-item__img mr4">
          {this.props.line_item.variant.image ? (
            <img
              src={this.props.line_item.variant.image.src}
              alt={`${this.props.line_item.title} product shot`}
            />
          ) : null}
        </div>
        <div className="flex flex-column items-left justify-between w-75 ml4">
          <div className="dib mb3 w-100 flex justify-between items-baseline">
            <span className="Line-item__title f1-m f2-l">
              {this.props.line_item.title}
            </span>
            <div className="Line-item__variant-title">
              {this.props.line_item.variant.title}
            </div>
          </div>
          <div className="dib mb3 w-100 flex justify-between items-center">
            <div className="Line-item__quantity-container">
              <button
                className="Line-item__quantity-update"
                onClick={() => this.decrementQuantity(this.props.line_item.id)}
              >
                -
              </button>
              <span className="Line-item__quantity">
                {this.props.line_item.quantity}
              </span>
              <button
                className="Line-item__quantity-update"
                onClick={() => this.incrementQuantity(this.props.line_item.id)}
              >
                +
              </button>
            </div>
            <span className="Line-item__price ml4">
              ${" "}
              {(
                this.props.line_item.quantity *
                this.props.line_item.variant.price
              ).toFixed(2)}
            </span>
          </div>
          <p
            className="Line-item__remove ma0"
            onClick={() =>
              this.props.removeLineItemInCart(this.props.line_item.id)
            }
          >
            remove
          </p>
        </div>
      </li>
    );
  }
}

export default LineItem;
