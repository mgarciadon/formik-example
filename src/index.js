import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Formik } from 'formik';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formik>
      <App />
    </Formik>
  </React.StrictMode>
);

