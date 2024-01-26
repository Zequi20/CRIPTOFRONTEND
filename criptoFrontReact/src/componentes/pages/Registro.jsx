import React, { useState } from "react";
import UsuarioServicio from "../../servicios/usuario_servicio";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Registro() {
    const theme = useTheme();
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const servicioUsusario = new UsuarioServicio();
    const navegar = useNavigate();
    const handleNombre = (event) => {
        setNombre(event.target.value);
    };
    const handleClave = (event) => {
        setClave(event.target.value);
    };

    const onClickRegister = async () => {
        const credenciales = {
            "nombre": nombre,
            "clave": clave,
        };
        const respuesta = await servicioUsusario.registrarUsuario(credenciales);
        if(respuesta.status === 200){
            navegar('/');
        }
    };

    return (
        <div style={{margin: '0 auto', marginTop: theme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h1" variant="h5">
                Registrarse
            </Typography>
            <form style={{ width: '85%', marginTop: theme.spacing(1) }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="nombre"
                            label="Nombre de usuario"
                            name="nombre"
                            value={nombre} onChange={handleNombre}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="clave"
                            label="Contraseña"
                            type="password"
                            id="clave"
                            value={clave} onChange={handleClave}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained"
                type="button"
                fullWidth
                onClick={onClickRegister}
                style={{ marginTop: theme.spacing(3) }}>
                    Registrarse
                </Button>
            </form>
        </div>
    );
}

export default Registro;