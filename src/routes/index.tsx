import React from 'react';

import { Switch } from 'react-router-dom';

import SignIn from '../pages/Signin';

import SignUp from '../pages/SigUp';

import Route from './Route';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/SignUp" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
