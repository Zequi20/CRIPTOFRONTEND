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
}

export default MonedaServicio;
