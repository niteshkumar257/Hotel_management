import React from 'react'
import {BarChart,Bar,Legend,YAxis,XAxis,CartesianGrid,Tooltip}  from 'recharts';


const Chart = ({data}) => {
  return (
    <div>
        <BarChart width={1400} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="expenditure" fill="#82ca9d" />
 
  
</BarChart>
    </div>
  )
}

export default Chart