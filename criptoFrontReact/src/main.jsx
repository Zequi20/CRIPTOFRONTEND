import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import {CssBaseline, ThemeProvider } from "@mui/material";
import mainTheme from './themes/mainTheme';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);