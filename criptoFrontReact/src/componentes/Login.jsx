import React, {useState} from "react";
import UsuarioServicio from "../servicios/usuario_servicio";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Login(){

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
            "nombre" : nombre,
            "clave" : clave,
        };
        const respuesta = await servicioUsusario.loguearUsuario(credenciales)
        if(respuesta["success"]){
            console.log("login exitoso");
            localStorage.setItem("user", JSON.stringify(credenciales));
            navegar('/tabla');
        }else{
            console.log("login fallido");
        }
    };

    return (
        <>
            <h1>Loguearse</h1>
            <br />
            <input type="text" name="usuario" value={nombre} onChange={handleNombre} id="user" />
            <br />
            <input type="password" name="clave" value={clave} onChange={handleClave} id="pass" />
            <br />
            <Button variant="contained" onClick={onClickLogin}>Login</Button>
        </>
    );
}

export default Login;