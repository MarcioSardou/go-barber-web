/* eslint-disable import/no-unresolved */
import React from 'react';

import GlobalStyle from './styles/global';
import SignUp from './pages/SigUp/index';
import SignIn from './pages/Signin/index';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SignIn />
  </>
);

export default App;
