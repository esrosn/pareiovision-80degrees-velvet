import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/'>
        <Landing />
      </Route>
    </Switch>
  );
}

export default App;
