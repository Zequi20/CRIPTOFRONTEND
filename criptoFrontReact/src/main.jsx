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
    typography: {
      fontFamily: 'Work Sans, sans-serif', // Establece la fuente principal
      h1: {
        fontSize: 24, // Personaliza el tamaño para h1
        fontWeight: 1000, // Personaliza el peso de la fuente para h1
      },
      // Añade más estilos para otras variantes de tipografía según sea necesario
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
