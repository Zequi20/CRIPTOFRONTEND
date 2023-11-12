import React, { Component } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';

class BasicLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      axisVertical: [],
      axisHorizontal: [],
    };
  }

  componentDidMount() {
    this.fetchChartData();
  }

  // Método para obtener los datos de la API
  fetchChartData = () => {
    const { simbolo } = this.props;
    const apiUrl = `http://127.0.0.1:5000/historial_precio/${simbolo}`;

    axios
      .get(apiUrl)
      .then(response => {
        const { axis_horizontal: axisHorizontalData } = response.data.map(elem => elem["high"]);
        
        const axisVerticalData = this.calculateAxisHorizontal(axisHorizontalData.length);

        this.setState({
          axisHorizontal: axisHorizontalData,
          axisVertical: axisVerticalData,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Método para calcular el eje horizontal
  calculateAxisHorizontal = cantidadDias => {
    const axisHorizontal = [];
    for (let i = 0; i < cantidadDias; i++) {
      axisHorizontal.push(i + 1);
    }
    return axisHorizontal;
  }

  render() {
    const { axisHorizontal, axisVertical } = this.state;

    return (
      <LineChart
        xAxis={[{ data: axisHorizontal }]}
        series={[{ data: axisVertical }]}
        width={500}
        height={300}
      />
    );
  }
}

export default BasicLineChart;
