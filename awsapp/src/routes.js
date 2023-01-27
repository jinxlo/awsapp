import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Upload from './components/Upload';
import Results from './components/Results';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Upload} />
    <Route path="/results" component={Results} />
  </Switch>
);

export default Routes;
