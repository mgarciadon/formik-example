import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Formik } from 'formik';
import { AuthProvider } from './AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Formik>
        <App />
      </Formik>
    </AuthProvider>
  </React.StrictMode>
);

