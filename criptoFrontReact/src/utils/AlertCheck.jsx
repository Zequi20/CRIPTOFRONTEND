import { useSnackbar } from "notistack";
import { useEffect } from "react";
import MonedaServicio from "../servicios/moneda_servicio";
import AlertaServicio from "../servicios/alerta_servicio";


function AlertCheck(){
    const {enqueueSnackbar} = useSnackbar();
    const servicioMoneda = new MonedaServicio();
    const alertaServicio = new AlertaServicio();
    const handleCheck = async () => {
        try {
            const topMonedas = await servicioMoneda.getTopMonedas();
            const alertas = await alertaServicio.getAlertas();
            alertas.forEach(async (alerta) => {
                const monedaEncontrada = topMonedas.find(
                    (topMoneda) => topMoneda.symbol === alerta.moneda && topMoneda.price >= alerta.monto
                );
                if (monedaEncontrada) {
                    enqueueSnackbar(`El valor de ${alerta.moneda} es mayor o igual a ${alerta.monto.toLocaleString()}`);
                } else {
                    enqueueSnackbar(`El valor de ${alerta.moneda} es menor a ${alerta.monto.toLocaleString()}`);
                }
            });
        } catch (error) {
            console.error("Error al realizar la verificación:", error.message);
        }
    };

    useEffect( () => {
        handleCheck();
    } ,[]);

    return ( 
        <></>
    );
}

export default AlertCheck;