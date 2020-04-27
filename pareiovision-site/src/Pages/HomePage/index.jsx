import React, { Component } from 'react';
import { Nav } from '../../Components';
import { grainedService } from '../../utils';

class HomePage extends Component {
  state = {};
  options = {
    animate: true,
    patternWidth: 485.5,
    patternHeight: 485.5,
    grainOpacity: 0.15,
    grainDensity: 1,
    grainWidth: 0.75,
    grainHeight: 0.75,
  };

  componentDidMount() {
    grainedService.grained('#home', this.options);
  }
  render() {
    return (
      <div>
        <div
          id='home'
          className='absolute vh-100 top-0 w-100 o-90'
          style={{ backgroundColor: '#efe8e0' }}
        />
        <Nav currentPage='home' />
      </div>
    );
  }
}

export default HomePage;
