import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/system';
import { YAxis } from 'recharts';

export default function CustomAreaChart({ prices }) {
  const [precios, setPrecios] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    // Verificar si prices es un array antes de mapearlo
    if (Array.isArray(prices)) {
      const data = prices.map(elem => elem.high);
      setPrecios(data);
      setLoading(false); // Cuando los datos se han cargado, establece loading en false
    }
  }, [prices]); // Agrega 'prices' como dependencia de useEffect

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <LineChart
        colors={[theme.palette.primary.main, theme.palette.secondary.main]}
          xAxis={[{ data: Array.from({ length: 30 }, (_, index) => index + 1), label: "Dias atras", scaleType: "linear" }]}
          
          series={[
            {
              data: precios, // Usa la array 'precios' obtenida de la prop 'prices'
              area: true
            },
          ]}
          height={300}
        />
      )}
    </>
  );
}
