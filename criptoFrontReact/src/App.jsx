import React, { Component } from 'react';
import BottomAppBar from './components/BottomAppBar.jsx'
import CollapsibleTable from './components/CollapsibleTable.jsx';
import Typography from '@mui/material/Typography';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // Inicializa items como un array vacío
    };
  }

  componentDidMount() {
    // Realiza una solicitud GET a la API
    axios.get('http://127.0.0.1:5000/top_monedas')
      .then(response => {
        // Actualiza el estado con los datos obtenidos
        this.setState({ items: response.data });
      })
      .catch(error => {
        // Maneja los errores si la solicitud falla
        console.error(error);
      });
  }

  render() {
    return (
      <div className='App'>
        <Typography variant="h3">CoinWatch</Typography>
          <CollapsibleTable items={this.state.items} />
          <BottomAppBar/>
        
      </div>

    );
  }
}

export default App;
