import React from 'react';
import { imgURLs } from '../../constants';

const ImageBackground = () => {
  return (
    <>
      <div className='absolute vh-100 bg-black top-0 w-100 o-50' />
      <div className='cf '>
        <div className='fl w-100 w-50-l'>
          {imgURLs.slice(0, 3).map((url) => (
            <figure key={url} className='ma0 pa0'>
              <img src={url} alt='' className='db w-100' />
            </figure>
          ))}
        </div>
        <div className='fl w-50 w-25-l'>
          {imgURLs.slice(2, 5).map((url) => (
            <figure key={url} className='ma0 pa0'>
              <img src={url} alt='' className='db w-100' />
            </figure>
          ))}
        </div>
        <div className='fl w-50 w-25-l'>
          {imgURLs.slice(5, 9).map((url) => (
            <figure key={url} className='ma0 pa0'>
              <img src={url} alt='' className='db w-100' />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageBackground;
