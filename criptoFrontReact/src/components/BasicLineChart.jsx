import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

class CustomAreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      axisVertical: [],
      axisHorizontal: [],
      chartWidth: 0,
    };
  }

  componentDidMount() {
    this.fetchChartData();
    this.updateChartWidth();
    window.addEventListener('resize', this.updateChartWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartWidth);
  }

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

  calculateAxisHorizontal = cantidadDias => {
    const axisHorizontal = Array.from({ length: cantidadDias }, (_, index) => index + 1);
    return axisHorizontal;
  };

  updateChartWidth = () => {
    const chartWidth = window.innerWidth * 0.95;
    this.setState({ chartWidth });
  };

  render() {
    const { axisHorizontal, axisVertical, chartWidth } = this.state;

    const chartData = axisHorizontal.map((value, index) => ({
      name: String(index + 1),
      valor: value,
    }));

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

    return (
      <AreaChart
        width={chartWidth}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Valor', angle: -90, position: 'insideLeft', style: { fill: '#232f34' } }} />
        <Tooltip content={<CustomTooltip />} />
        <Area dataKey="valor" fill="#344955" name="Valor" />
      </AreaChart>
    );
  }
}

export default CustomAreaChart;
