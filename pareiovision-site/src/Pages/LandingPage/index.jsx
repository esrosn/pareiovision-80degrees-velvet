import React from 'react';

import { Nav } from '../../Components';

const LandingPage = () => {
  return (
    <div className='vh-100 overflow-hidden landingpage--container'>
      <Nav currentPage='landing' />
    </div>
  );
};

export default LandingPage;
