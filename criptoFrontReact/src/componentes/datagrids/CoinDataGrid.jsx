import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MonedaServicio from '../../servicios/moneda_servicio';

const columns = [
  { field: 'id', headerName: 'Simbolo' },
  { field: 'name', headerName: 'Nombre' },
  { field: 'price', headerName: 'Precio (USD)', type: 'number' },
  { field: 'volume', headerName: 'Volumen', type: 'number' },
  { field: 'market_cap', headerName: 'Cap. Mercado', type: 'number' },
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
    const intervalId = setInterval(()=> {
        fetchData();
    }, 6000);
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
    <div style={{ height: 400, width: '100%' }}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DataGrid rows={rows} columns={columns} />
      )}
    </div>
  );
};

export default CoinDataGrid;
