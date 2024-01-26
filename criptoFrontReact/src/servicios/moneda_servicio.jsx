import axios from 'axios';

class MonedaServicio {
    constructor(){
        this.axios = axios.create();
    }

    fetchTopMonedas = () => {
        axios
          .get('http://127.0.0.1:5000/top_monedas')
          .then(response => {
            this.setState({ items: response.data });
          })
          .catch(error => {
            console.error(error);
          });
      };
}