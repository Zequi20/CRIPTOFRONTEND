import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4a6572',
      main: '#344955',
      dark: '#232f34',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f9aa33',
      contrastText: '#000000',
    },
    typography: {
      fontFamily: 'Work Sans, sans-serif',
      h1: {
        fontSize: 24,
        fontWeight: 1000,
      },
    },
  },
});

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
