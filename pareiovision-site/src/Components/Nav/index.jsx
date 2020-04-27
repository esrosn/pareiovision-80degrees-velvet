import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Pareiovision.png';

export default class Nav extends Component {
  state = {
    isMenuOpen: false,
  };
  images = [];

  handleMouseOver = () => {
    this.images.forEach((image, idx) => {
      if (idx === 0) {
        return;
      } else if (idx === 1) {
        image.style.display = `block`;
        image.style.transform = `translateY(2rem)`;
      } else {
        image.style.display = `block`;
        image.style.transform = `translateY(4rem)`;
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

  toggleMenu = () => {
    let isMenuOpen = !this.state.isMenuOpen;
    this.setState({ isMenuOpen }, () => {
      this.rotateIcon();
    });
  };

  rotateIcon = () => {
    const plus = document.querySelector('#menu-icon');

    if (this.state.isMenuOpen) {
      plus.classList.add('rotate');
    } else {
      plus.classList.remove('rotate');
    }
  };

  render() {
    const { currentPage } = this.props;
    return (
      <nav className='w-100 z-2 absolute top-0 left-0'>
        <ul className='list pa0 mt4 mb0 mh4  flex flex-row justify-between items-center white-80 f3  lh-copy fw7'>
          <li className='w-25-l w-50-m w-50'>
            <Link
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              to='/'
              className='link'
            >
              <div className='logo-image'>
                <img
                  src={logo}
                  className='w-50-ns w-100'
                  alt=''
                  ref={(ref) => {
                    this.images[0] = ref;
                  }}
                />
                <img
                  src={logo}
                  className='w-50-ns'
                  alt=''
                  ref={(ref) => {
                    this.images[1] = ref;
                  }}
                />
                <img
                  src={logo}
                  className='w-50-ns'
                  alt=''
                  ref={(ref) => {
                    this.images[2] = ref;
                  }}
                />
              </div>
            </Link>
          </li>
          <li onClick={this.toggleMenu}>
            {currentPage === 'landing' ? (
              <div
                id='menu-icon'
                className='f3-ns f4 fw7 lh-copy pointer menu-button'
              >
                <Link to='/home' className='link dim white hover-yellow'>
                  ENTER
                </Link>
              </div>
            ) : (
              <div id='menu-icon' className='f2 fw9 pointer menu-button'>
                <span style={{ marginBottom: '1rem' }}>+</span>
              </div>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}
