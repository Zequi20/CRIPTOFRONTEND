import React, { useState, useEffect } from "react";
import CustomAreaChart from "./CustomAreaChart";
import MonedaServicio from "../../servicios/moneda_servicio";
import CustomSelect from "../CustomSelect";
import { Typography } from "@mui/material";

function SelectLineChart() {
  const monedaServicio = new MonedaServicio();

  const [listaSimbolos, setListSimbolos] = useState([]);
  const [dataHistorial, setDataHistorial] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCurrencyChange = (selectedValue) => {
    setSelectedCurrency(selectedValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await monedaServicio.getTopMonedas();
        const coinList = data.map(element => ({
          "name": element.name,
          "value": element.symbol
        }));
        setListSimbolos(coinList);
        setSelectedCurrency(coinList[0].value); // Corrección aquí
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await monedaServicio.getHistorialPrecio(selectedCurrency);
        console.log(datos);
        setDataHistorial(datos);
      } catch (error) {
        console.error("Error al obtener el historial de precios:", error.message);
      }
    };
    fetchData();
  }, [selectedCurrency]);

  return (
    <>
      <CustomSelect options={listaSimbolos} onSelectionChange={handleCurrencyChange} />
      <CustomAreaChart prices={dataHistorial} />
    </>
  );
}

export default SelectLineChart;
