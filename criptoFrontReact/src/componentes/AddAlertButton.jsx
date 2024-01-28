import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function AddAlertButton({ onAdd }) {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleAddAlert = () => {
        if (onAdd) {
            onAdd();
        }
        handleCloseDialog();
    };

    return (
        <>
            <IconButton color="inherit" onClick={handleOpenDialog}>
                <AddIcon />
            </IconButton>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Agregar Alerta</DialogTitle>
                <DialogContent>
                    {/* Aquí puedes agregar el contenido del formulario para agregar alertas */}
                    {/* Por ejemplo, campos de entrada para la moneda, monto, etc. */}
                    {/* Puedes usar TextField, Select, etc. */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAddAlert} color="primary">
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddAlertButton;
