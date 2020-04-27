import React from 'react';
import { Link } from 'react-router-dom';
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
