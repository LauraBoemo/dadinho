import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, theme } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
