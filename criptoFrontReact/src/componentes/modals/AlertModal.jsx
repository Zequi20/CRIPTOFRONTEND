import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slide from '@mui/material/Slide';
import AlertList from '../AlertList';
import AddAlertButton from '../AddAlertButton';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertModal = React.forwardRef(({ children }, ref) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: handleClickOpen,
  }));

  return (
    <React.Fragment>
      {React.cloneElement(children, { onClick: handleClickOpen })}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Alertas
            </Typography>
            <AddAlertButton/>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Listo
            </Button>
          </Toolbar>
        </AppBar>
        <AlertList/>
      </Dialog>
    </React.Fragment>
  );
});

export default AlertModal;
