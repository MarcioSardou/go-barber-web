/* eslint-disable import/no-unresolved */
import React from 'react';

import AppProvider from './hooks/index';

import GlobalStyle from './styles/global';

// import SignUp from './pages/SigUp/index';
import SignIn from './pages/Signin/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
