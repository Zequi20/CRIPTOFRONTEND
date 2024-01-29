import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from "@mui/material";
import mainTheme from './themes/mainTheme';
import { SnackbarProvider } from 'notistack';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={mainTheme}>
    <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);