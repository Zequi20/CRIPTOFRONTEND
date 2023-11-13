import React, { Component } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HistoryIcon from '@mui/icons-material/History';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    backgroundColor: '#232f34',
    color: 'white',
    width: 250,
  },
  '& .MuiSvgIcon-root, & .MuiTypography-root': {
    color: 'white', // Establece el color del ícono y del texto aquí
  },
});

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedMenuItem: 'Inicio', // Agrega un estado para el elemento seleccionado
    };
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  handleMenuItemClick = (menuItem) => {
    this.setState({ selectedMenuItem: menuItem });
    // Agrega lógica adicional según sea necesario
  };

  render() {
    const { open, selectedMenuItem } = this.state;

    return (
      <div>
        <IconButton onClick={this.toggleDrawer} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <StyledDrawer anchor="left" open={open} onClose={this.toggleDrawer}>
          {/* Contenido del Drawer */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px',
              '& .MuiSvgIcon-root, & .MuiTypography-root': {
                mr: 2, // Espaciado entre el ícono y el texto
              },
            }}
          >
            <MonetizationOnIcon fontSize="large" />
            <Typography variant="h5" component="div" sx={{ color: 'white' }}>
              Criptomonedas
            </Typography>
          </Box>
          <List>
            <ListItemButton
              key="Inicio"
              selected={selectedMenuItem === 'Inicio'}
              onClick={() => this.handleMenuItemClick('Inicio')}
              sx={{
                '&:hover, &:focus': { backgroundColor: 'rgba(255, 165, 0, 0.2)' },
                '&.Mui-selected .MuiSvgIcon-root, &.Mui-selected .MuiTypography-root': {
                  color: 'orange',
                },
              }}
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
            <ListItemButton
              key="Historial"
              selected={selectedMenuItem === 'Historial'}
              onClick={() => this.handleMenuItemClick('Historial')}
              sx={{
                '&:hover, &:focus': { backgroundColor: 'rgba(255, 165, 0, 0.2)' },
                '&.Mui-selected .MuiSvgIcon-root, &.Mui-selected .MuiTypography-root': {
                  color: 'orange',
                },
              }}
            >
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Historial" />
            </ListItemButton>
            
            {/* Agrega más elementos según sea necesario */}
          </List>
        </StyledDrawer>
      </div>
    );
  }
}

export default CustomDrawer;
