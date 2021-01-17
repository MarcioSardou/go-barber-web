/* eslint-disable import/no-unresolved */
import React from 'react';
import { AuthProvider } from './context/AuthContext';

import GlobalStyle from './styles/global';
import SignUp from './pages/SigUp/index';
import SignIn from './pages/Signin/index';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
