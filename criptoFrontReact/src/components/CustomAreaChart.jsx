import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #ccc', padding: '10px', color: '#232f34' }}>
        <p>{`Día ${label} - Valor: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool, // Debería ser un booleano
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number, // Debería ser un número
    })
  ),
  label: PropTypes.string, // Debería ser una cadena de texto
};
class CustomAreaChart extends Component {
  state = {
    axisVertical: [],
    axisHorizontal: [],
    chartWidth: 0,
  };

  componentDidMount() {
    this.fetchChartData();
    this.updateChartWidth();
    window.addEventListener('resize', this.updateChartWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartWidth);
  }

  fetchChartData = async () => {
    const { simbolo } = this.props;
    const apiUrl = `http://127.0.0.1:5000/historial_precio/${simbolo}`;

    try {
      const response = await axios.get(apiUrl);
      const axisHorizontalData = response.data.map(elem => elem.high);
      const axisVerticalData = this.calculateAxisHorizontal(axisHorizontalData.length);

      this.setState({
        axisHorizontal: axisHorizontalData,
        axisVertical: axisVerticalData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  calculateAxisHorizontal = cantidadDias => {
    return Array.from({ length: cantidadDias }, (_, index) => index + 1);
  };

  updateChartWidth = () => {
    const chartWidth = window.innerWidth * 0.95;
    this.setState({ chartWidth });
  };

  render() {
    const { axisHorizontal, chartWidth } = this.state;

    const chartData = axisHorizontal.map((value, index) => ({
      name: String(index + 1),
      valor: value,
    }));

    return (
      <AreaChart
        width={chartWidth}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis label={{ value: '', angle: -90, position: 'insideLeft', style: { fill: '#232f34' } }} />
        <Tooltip content={<CustomTooltip />} />
        <Area dataKey="valor" fill="#344955" name="Valor" />
      </AreaChart>
    );
  }
}

CustomAreaChart.propTypes = {
  simbolo: PropTypes.string.isRequired,
};

export default CustomAreaChart;
