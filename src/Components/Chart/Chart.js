import React from 'react';
import { Pie, PieChart } from 'recharts';
// import { Pie, PieChart } from 'recharts';

const Chart = () => {
  const data01 = [
    {
      "name": "Aquib",
      "value": 400
    },
    {
      "name": "Sakib",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
  return (
    <div>
      <PieChart width={1300} height={550}>
        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8844d8" />
        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={110} outerRadius={130} fill="#82ca9d" label />

      </PieChart>
    </div>
  );
};

export default Chart;