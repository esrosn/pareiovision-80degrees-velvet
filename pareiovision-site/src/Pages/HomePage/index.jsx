import React, { Component } from 'react';
import { Nav, Menu, Home, Listen } from '../../Components';
import { grainedService } from '../../utils';

import { Switch, Route } from 'react-router-dom';

class HomePage extends Component {
  state = {
    isMenuOpen: false,
  };

  options = {
    animate: true,
    patternWidth: 485.5,
    patternHeight: 485.5,
    grainOpacity: 0.15,
    grainDensity: 1,
    grainWidth: 0.75,
    grainHeight: 0.75,
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
      this.rotateIcon();
    });
  };

  renderMenu = () => {
    return <Menu toggleMenu={this.toggleMenu} />;
  };

  rotateIcon = () => {
    const plus = document.querySelector('#menu-icon');

    if (this.state.isMenuOpen) {
      plus.classList.add('rotate');
    } else {
      plus.classList.remove('rotate');
    }
  };

  componentDidMount() {
    grainedService.grained('#home', this.options);
  }

  render() {
    return (
      <div>
        {this.state.isMenuOpen && this.renderMenu()}
        <Nav currentPage='home' toggleMenu={this.toggleMenu} />
        <div
          id='home'
          className='absolute top-0 left-0 vh-100 top-0 w-100 o-90'
          style={{ backgroundColor: '#efe8e0' }}
        >
          <Switch>
            <Route path='/home/listen' component={Listen} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
