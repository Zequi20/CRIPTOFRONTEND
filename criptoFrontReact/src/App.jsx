import React, { Component } from 'react';
import BottomAppBar from './components/BottomAppBar.jsx';
import CollapsibleTable from './components/CollapsibleTable.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchTopMonedas();
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

  render() {
    return (
      <div className='App'>
        <CollapsibleTable items={this.state.items} />
        <BottomAppBar />
      </div>
    );
  }
}

export default App;
