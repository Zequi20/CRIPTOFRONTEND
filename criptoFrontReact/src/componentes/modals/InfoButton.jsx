import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function InfoButton() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpenModal}>
        <InfoIcon />
      </IconButton>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Sobre la app</DialogTitle>
        <DialogContent>
          <p>By Ezequiel Pereira</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default InfoButton;
