import React from 'react';
import { KEEPINGBUSYCOVER } from '../../constants';
const Home = () => {
  return (
    <main className='absolute top-0 left-0 w-100 vh-100 flex justify-center items-center '>
      <a
        className='link black'
        href='https://ditto.fm/keepingbusy'
        rel='noopener noreferrer'
        target='_blank'
      >
        <section className='w-100 flex flex-column  justify-center items-center mh5-l pa2 pa0-ns'>
          <div className='w-100 w-75-l h-75 mb2 flex justify-center items-center'>
            <img src={KEEPINGBUSYCOVER} alt='' className='w-50-ns w-100' />
          </div>
          <div className='flex justify-center items-center mt4 pa2'>
            <div className='h-25 mh3 f3 fw7'>LISTEN TO KEEPING BUSY</div>
          </div>
        </section>
      </a>
    </main>
  );
};

export default Home;
