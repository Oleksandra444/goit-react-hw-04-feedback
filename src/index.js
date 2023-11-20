import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
// import './index.css';

const theme = {
  colors: {
    main: "#a2a2a2",
accent: "#49bf9d;",
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>
 
);
