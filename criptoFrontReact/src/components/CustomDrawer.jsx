import React, { Component } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <IconButton onClick={this.toggleDrawer} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={this.toggleDrawer}>
          <Paper
            style={{
              backgroundColor: 'black',
              color: 'white',
              width: 250,
              padding: '16px', // Ajusta según tus preferencias
            }}
          >
            {/* Contenido del Drawer */}
            <Typography variant="h6" component="div">
              Encabezado del Drawer
            </Typography>
            <p>Opciones de menú...</p>
          </Paper>
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;
