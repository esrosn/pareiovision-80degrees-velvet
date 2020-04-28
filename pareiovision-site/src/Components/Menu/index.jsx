import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ toggleMenu }) => {
  return (
    <>
      <div
        id='menu'
        className='bg-busy fixed h-100 right-0 top-0 bottom-0 left-0  z-2'
        onClick={toggleMenu}
      >
        <div className='h-100 flex flex-column justify-center items-center mv0 mx-auto z-2 '>
          <ul className='list pa0 ma0 flex flex-column justify-between items-center black f2 f1-ns lh-copy fw7'>
            <li>
              <Link className='link black hover-white pointer ' to='/home'>
                HOME
              </Link>
            </li>
            <li>
              <Link
                className='link black hover-white pointer '
                to='/home/listen'
              >
                LISTEN
              </Link>
            </li>
            <li>
              <a
                className='link black hover-white pointer'
                href='https://www.youtube.com/channel/UCskzUBbfkbR1EYMO04K-W7w'
                rel='noopener noreferrer'
                target='_blank'
              >
                WATCH
              </a>
            </li>
            <li>
              <a
                className='link black hover-white pointer'
                href='https://shop.pareiovision.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                SHOP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
