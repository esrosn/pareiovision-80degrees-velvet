import React from 'react';
import { KEEPINGBUSYCOVER } from '../../constants';
const Home = () => {
  return (
    <main className='absolute w-100 vh-75 h-100-l flex justify-center items-center mt4'>
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
            <div className='h-25 mh3'>Listen to Keeping Busy</div>
          </div>
        </section>
      </a>
    </main>
  );
};

export default Home;
