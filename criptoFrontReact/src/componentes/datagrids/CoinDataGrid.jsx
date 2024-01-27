import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MonedaServicio from '../../servicios/moneda_servicio';

const columns = [
  { field: 'id', headerName: 'Simbolo' },
  { field: 'name', headerName: 'Nombre' },
  { field: 'price', headerName: 'Precio', type: 'number' },
  { field: 'volume', headerName: 'Volumen', type: 'number' },
  { field: 'market_cap', headerName: 'Cap. Mercado', type: 'number' },
];

function CoinDataGrid() {
  const monedaServicio = new MonedaServicio();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await monedaServicio.getTopMonedas();
        const formattedData = data.map(elem => ({
          id: elem.symbol,
          market_cap: elem.market_cap,
          name: elem.name,
          price: elem.price,
          volume: elem.volume,
        }));
        setRows(formattedData);
      } catch (error) {
        console.error('Error al obtener las mejores monedas:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array de dependencias vacío significa que se ejecutará solo después del montaje

  return (
    <div style={{ height: 400, width: '100%' }}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DataGrid rows={rows} columns={columns} />
      )}
    </div>
  );
}

export default CoinDataGrid;
