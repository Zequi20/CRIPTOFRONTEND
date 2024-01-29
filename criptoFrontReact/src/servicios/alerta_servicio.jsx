import axios from 'axios';

class AlertaServicio {
  constructor() {
    this.axios = axios.create();
  }

  getAlertas = async () => {
    try {
      const response = await this.axios.get('http://127.0.0.1:5000/alertas');
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las mejores monedas');
    }
  };
 
  delAlerta = async (id) => {
    try {
      const response = await this.axios.post('http://127.0.0.1:5000/del_alerta', id);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al eliminar la alerta');
    }
  };

  addAlerta = async (data) => {
    try {
      const response = await this.axios.post('http://127.0.0.1:5000/add_alerta', data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al eliminar la alerta');
    }
  };

}

export default AlertaServicio;
