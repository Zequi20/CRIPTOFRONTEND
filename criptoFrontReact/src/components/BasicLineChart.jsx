import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

class CustomBarChart extends Component {
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
        const axisHorizontalData = response.data.map(elem => elem.high);
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
    const axisHorizontal = Array.from({ length: cantidadDias }, (_, index) => index + 1);
    return axisHorizontal;
  };

  render() {
    const { axisHorizontal, axisVertical } = this.state;

    const chartData = axisHorizontal.map((value, index) => ({
      name: String(index + 1),
      value,
    }));

    return (
      <BarChart
        width={400} // ajusta el ancho según tus necesidades
        height={300} // ajusta la altura según tus necesidades
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default CustomBarChart;
