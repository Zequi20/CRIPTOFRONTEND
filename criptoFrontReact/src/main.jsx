import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4a6572', 
      main: '#344955',
      dark: '#232f34',
       // Cambia este color según tus preferencias
      contrastText: '#ffffff',
    },
    secondary: {
      
      main: '#f9aa33',
      
       // Cambia este color según tus preferencias
      contrastText: '#000000',
    },
    components: {
      MuiDrawer: {
        paper: {
          backgroundColor: '#344955',  // Cambia esto al color que desees
          color: '#ffffff',           // Cambia esto al color de texto que desees
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
)
