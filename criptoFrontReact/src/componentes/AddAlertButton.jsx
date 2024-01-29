import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CustomSelect from './CustomSelect';
import AlertaServicio from '../servicios/alerta_servicio';

function AddAlertButton() {
    const alertaServicio = new AlertaServicio();
    const [openDialog, setOpenDialog] = useState(false);
    const [monto, setMonto] = useState(0);
    const [moneda, setMoneda] = useState('');

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleAddAlert = async () => {
        try {
            if (monto > 0 && moneda !== '') {
                const userDataString = localStorage.getItem("user");
                const userData = JSON.parse(userDataString);
                
                const response = await alertaServicio.addAlerta({
                    "usuario": userData.id,
                    "monto": monto,
                    "moneda": moneda
                });
                console.log(response);
            }
        } catch (error) {
            console.error("Error al agregar la alerta:", error.message);
        } finally {
            handleCloseDialog();
        }
    };

    const onMontoChange = (event) => {
        setMonto(event.target.value);
    };

    const onMonedaChange = (value) => {
        setMoneda(value);
    };

    return (
        <>
            <IconButton color="inherit" onClick={handleOpenDialog}>
                <AddIcon />
            </IconButton>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Agregar Alerta</DialogTitle>
                <DialogContent>
                    <br />
                    <CustomSelect options={JSON.parse(localStorage.getItem("coins"))} onSelectionChange={onMonedaChange} />
                    <br />
                    <TextField
                        variant="outlined"
                        type="number"
                        required
                        fullWidth
                        id="monto"
                        label="Monto (USD)"
                        name="monto"
                        value={monto}
                        onChange={onMontoChange}
                    />
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
