import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider  from '@/context/ThemeContext';
import App from './App';
import '@/assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
