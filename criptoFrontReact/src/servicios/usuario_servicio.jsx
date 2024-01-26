import axios from "axios";

class UsuarioServicio {
  constructor() {
    this.axios = axios.create();
  }

  async loguearUsuario(credenciales) {
    try {
      const response = await this.axios.post('http://127.0.0.1:5000/login', credenciales );
      return response.data;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      return null;
    }
  }
  

}

export default UsuarioServicio;