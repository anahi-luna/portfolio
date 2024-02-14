import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemesProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemesProvider>
  </React.StrictMode>
);
