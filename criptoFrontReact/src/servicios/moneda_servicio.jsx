import axios from 'axios';

class MonedaServicio {
  constructor() {
    this.axios = axios.create();
  }

  getTopMonedas = async () => {
    try {
      const response = await this.axios.get('http://127.0.0.1:5000/top_monedas');
      return response.data; // Devuelve los datos en lugar de actualizar el estado directamente
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las mejores monedas'); // Lanza una nueva excepción
    }
  };
  getHistorialPrecio = async (simbolo) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/historial_precio/${simbolo}`);
      if (!response.ok) {
        throw new Error(`Error al obtener el historial de precios para ${simbolo}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en el servicio de historial de precios:', error.message);
      throw error;
    }
  };
}

export default MonedaServicio;
