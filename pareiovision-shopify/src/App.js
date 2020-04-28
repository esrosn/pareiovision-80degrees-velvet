import React, { Component } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import logo from '../assets/Pareiovision-blk.png';

import { grainedService } from './utils';
class App extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  options = {
    animate: true,
    patternWidth: 485.5,
    patternHeight: 485.5,
    grainOpacity: 0.15,
    grainDensity: 1,
    grainWidth: 0.75,
    grainHeight: 0.75,
  };

  componentDidMount() {
    grainedService.grained('#grained', this.options);
  }
  componentWillMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];

    return this.props.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }
  handleMouseOver = () => {
    this.images.forEach((image, idx) => {
      if (idx === 0) {
        return;
      } else if (idx === 1) {
        image.style.display = `block`;
        image.style.transform = `translateY(1.5rem)`;
      } else {
        image.style.display = `block`;
        image.style.transform = `translateY(3rem)`;
      }
    });
  };
  handleMouseOut = () => {
    this.images.forEach((image, idx) => {
      if (idx === 0) {
        return;
      } else if (idx === 1) {
        image.style.display = '';
        image.style.transform = '';
      } else {
        image.style.display = '';
        image.style.transform = '';
      }
    });
  };
  images = [];

  render() {
    return (
      <div id='grained' className='vh-100 bg-busy'>
        <div className='absolute h-100 w-100'>
          <header className='w-100 flex-l flex-column-m justify-between items-center ph2 pt2'>
            <div className='logo'>
              <a
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                href='http://www.pareiovision.com'
                className='link dim logo-image mh4'
              >
                <img
                  src={logo}
                  alt=''
                  className='w-50-ns w-100'
                  ref={(ref) => {
                    this.images[0] = ref;
                  }}
                />
                <img
                  src={logo}
                  alt=''
                  className='w-50-ns w-100'
                  ref={(ref) => {
                    this.images[1] = ref;
                  }}
                />
                <img
                  src={logo}
                  alt=''
                  className='w-50-ns w-100'
                  ref={(ref) => {
                    this.images[2] = ref;
                  }}
                />
              </a>
            </div>
            {!this.state.isCartOpen && (
              <div className='flex justify-center items-center mh4 mt4 '>
                <button
                  className='App__view-cart black fw7 tracked'
                  onClick={() => this.setState({ isCartOpen: true })}
                >
                  CART
                </button>
              </div>
            )}
          </header>
          <Products
            products={this.state.products}
            client={this.props.client}
            addVariantToCart={this.addVariantToCart}
          />
          <Cart
            checkout={this.state.checkout}
            isCartOpen={this.state.isCartOpen}
            handleCartClose={this.handleCartClose}
            updateQuantityInCart={this.updateQuantityInCart}
            removeLineItemInCart={this.removeLineItemInCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
