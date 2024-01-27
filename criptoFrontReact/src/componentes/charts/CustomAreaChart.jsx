import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 4, 8.5, 1.5, 5],
        },
        {
          data: [4, 5, 6, 8, 2, 9],
        },
        {
          data: [4, 8, 6, 2, 2, 9],
        },
        {
          data: [4, 2, 6, 8, 2, 9],
        },
      ]}
      height={300}
    />
  );
}
