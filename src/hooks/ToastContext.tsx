/* eslint-disable react/react-in-jsx-scope */
import { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/Toasts/index';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('add');
  }, []);

  const removeToast = useCallback(() => {
    console.log('remove');
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a TOastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
