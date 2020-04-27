import React from 'react';

import { Nav, ImageBackground } from '../../Components';

const LandingPage = () => {
  return (
    <div className='vh-100 overflow-hidden'>
      <ImageBackground />
      <Nav currentPage='landing' />
    </div>
  );
};

export default LandingPage;
