import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

var data = [
  {
    name: 'Clovis',
    Workload: 3
  },
  {
    name: 'Karen',
    Workload: 4
  },
  {
    name: 'Sergey',
    Workload: 5
  },
  {
    name: 'Steven',
    Workload: 6
  },
  {
    name: 'TingTing',
    Workload: 1
  },
  {
    name: 'Inco',
    Workload: 2
  },
];

export default class Example extends PureComponent {
  render() {
    return (
        <ResponsiveContainer width={800} height={250}>
        <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="Workload"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="Workload" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
