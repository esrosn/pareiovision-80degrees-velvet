import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, HomePage } from './Pages';

function App() {
  return (
    <Switch>
      <Route path='/home'>
        <HomePage />
      </Route>
      <Route path='/'>
        <LandingPage />
      </Route>
    </Switch>
  );
}

export default App;
