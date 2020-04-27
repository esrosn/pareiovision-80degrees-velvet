import React from 'react';
import { imgURLs } from '../../constants';

const ImageBackground = () => {
  return (
    <>
      <div className='absolute vh-100 bg-black top-0 w-100 o-50' />
      <div className='cf '>
        <div className='fl w-100 w-40-l'>
          {imgURLs.slice(0, 2).map((url) => (
            <figure className='ma0 pa0'>
              <img key={url} src={url} alt='' className='db w-100' />
            </figure>
          ))}
        </div>
        <div className='fl w-50 w-30-l'>
          {imgURLs.slice(2, 4).map((url) => (
            <figure className='ma0 pa0'>
              <img key={url} src={url} alt='' className='db w-100' />
            </figure>
          ))}
        </div>
        <div className='fl w-50 w-30-l'>
          {imgURLs.slice(4, 9).map((url) => (
            <figure className='ma0 pa0'>
              <img key={url} src={url} alt='' className='db w-100' />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageBackground;
