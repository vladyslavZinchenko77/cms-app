
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
const DummyChart = () => {

  const data = [
    { name: 'Jan', value: 50 },
    { name: 'Feb', value: 80 },
    { name: 'Mar', value: 120 },
    { name: 'Apr', value: 150 },
    { name: 'May', value: 200 },
];

  return (
      
    <div style={{width: "400px"}}>
      <Typography variant="h6" align="center">
        Sales
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
 
  )
}

export default DummyChart



