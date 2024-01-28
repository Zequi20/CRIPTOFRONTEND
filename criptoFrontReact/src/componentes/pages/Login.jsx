import React, { useState } from "react";
import UsuarioServicio from "../../servicios/usuario_servicio";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Login() {
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

    const onClickLogin = async () => {
        const credenciales = {
            "nombre": nombre,
            "clave": clave,
        };
        const respuesta = await servicioUsusario.loguearUsuario(credenciales)
        if (respuesta["success"]) {
            console.log("login exitoso");
            localStorage.setItem("user", JSON.stringify({
                "nombre" : nombre,
                "clave": clave,
                "id": respuesta["id"]
            }));
            navegar('/tabla');
        } else {
            console.log("login fallido");
        }
    };

    const onClickReg = async () => {
        navegar('/registro');
    };

    return (
        <div style={{margin: '0 auto', marginTop: theme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h1" variant="h5">
                Iniciar sesión
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
                onClick={onClickLogin}
                style={{ marginTop: theme.spacing(3) }}>
                    Inciar Sesion
                </Button>
                <Button variant="text"
                type="button"
                fullWidth
                onClick={onClickReg}
                style={{ marginTop: theme.spacing(3) }}>
                    No tienes una cuenta? Registrate
                </Button>
            </form>
        </div>
    );
}

export default Login;