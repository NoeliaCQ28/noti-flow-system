import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { FormProvider } from './context/FormContext';
import App from './App.jsx';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </MantineProvider>
  </React.StrictMode>
);