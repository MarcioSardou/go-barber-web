import React from 'react';

import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/Signin';

import SignUp from '../pages/SigUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
