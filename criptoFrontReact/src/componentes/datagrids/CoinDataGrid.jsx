import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MonedaServicio from '../../servicios/moneda_servicio';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Simbolo' },
  { field: 'name', headerName: 'Nombre' },
  { field: 'price', headerName: 'Precio (USD)', type: 'number', width: 150 },
  { field: 'volume', headerName: 'Volumen', type: 'number', width: 180 },
  { field: 'market_cap', headerName: 'Cap. Mercado', type: 'number', width: 180},
];

const CoinDataGrid = () => {
  const monedaServicio = new MonedaServicio();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await monedaServicio.getTopMonedas();
        const formattedData = formatData(data);
        setRows(formattedData);
      } catch (error) {
        handleFetchError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 6000);
    return () => clearInterval(intervalId);
  }, []);

  const formatData = (data) => {
    return data.map((elem) => ({
      id: elem.symbol,
      market_cap: elem.market_cap,
      name: elem.name,
      price: elem.price,
      volume: elem.volume,
    }));
  };

  const handleFetchError = (error) => {
    console.error('Error al obtener las mejores monedas:', error.message);
  };

  return (
    <Box style={{ height: 400, width: '100%' }}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DataGrid rows={rows} columns={columns} />
      )}
    </Box>
  );
};

export default CoinDataGrid;
