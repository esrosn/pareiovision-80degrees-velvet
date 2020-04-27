import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LandingPage, HomePage } from './Pages';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/home'>
        <HomePage />
      </Route>

      <Redirect to='/home' />
    </Switch>
  );
}

export default App;
