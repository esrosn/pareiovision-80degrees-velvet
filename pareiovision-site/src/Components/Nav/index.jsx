import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/images/Pareiovision.png';
import logoBlack from '../../assets/images/Pareiovision-blk.png';
import icon from '../../assets/images/KeepingBusy_iconblack.png';

export default class Nav extends Component {
  state = {};

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

  render() {
    const { currentPage, toggleMenu } = this.props;
    return (
      <nav className='w-100 z-2 absolute top-0 left-0'>
        <ul className='list pa0 mt4 mb0 mh4  flex flex-row justify-between items-center black f3  lh-copy fw7'>
          <li className='w-25-l w-50-m w-50'>
            <Link
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              to='/home'
              className='link'
            >
              <div className='logo-image'>
                <img
                  src={currentPage === 'landing' ? logoWhite : logoBlack}
                  className='w-50-ns w-100'
                  alt=''
                  ref={(ref) => {
                    this.images[0] = ref;
                  }}
                />
                <img
                  src={currentPage === 'landing' ? logoWhite : logoBlack}
                  className='w-50-ns'
                  alt=''
                  ref={(ref) => {
                    this.images[1] = ref;
                  }}
                />
                <img
                  src={currentPage === 'landing' ? logoWhite : logoBlack}
                  className='w-50-ns'
                  alt=''
                  ref={(ref) => {
                    this.images[2] = ref;
                  }}
                />
              </div>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            {currentPage === 'landing' ? (
              <div
                id='menu-icon'
                className='f3-ns f4 fw7 lh-copy pointer menu-button'
              >
                <Link to='/home' className='link dim white hover-busy'>
                  ENTER
                </Link>
              </div>
            ) : (
              <div className='flex flex-row justify-content items-center'>
                <p className='mr3'>MENU</p>
                <div
                  id='menu-icon'
                  className='f2 fw9 pointer menu-button h3 w3'
                >
                  <img src={icon} alt='' className='w-100' />
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}
