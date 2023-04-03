import React from 'react'
import {BarChart,Bar,Legend,YAxis,XAxis,CartesianGrid,Tooltip}  from 'recharts';

const data = [
  {
    "id": 1,
    "month": "january",
    "year": 2023,
    "expenditure": 100000000,
    "number_of_guests": 300
},
{
    "id": 2,
    "month": "january",
    "year": 2024,
    "expenditure": 0,
    "number_of_guests": 0
},
{
    "id": 3,
    "month": "january",
    "year": 2024,
    "expenditure": 1222323,
    "number_of_guests": 232
},
{
    "id": 4,
    "month": "january",
    "year": 2023,
    "expenditure": 100000,
    "number_of_guests": 100
},
{
    "id": 5,
    "month": "february",
    "year": 2023,
    "expenditure": 20000,
    "number_of_guests": 200
},
{
    "id": 6,
    "month": "march",
    "year": 2024,
    "expenditure": 200000,
    "number_of_guests": 500
},
{
    "id": 7,
    "month": "august",
    "year": 2023,
    "expenditure": 1000000,
    "number_of_guests": 800
},{
  "id": 8,
  "month": "march",
  "year": 2024,
  "expenditure": 200000,
  "number_of_guests": 500
},
{
  "id": 9,
  "month": "august",
  "year": 2023,
  "expenditure": 1000000,
  "number_of_guests": 800
}
  ]
const Chart = ({data}) => {
  return (
    <div>
        <BarChart width={1400} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="number_of_guests" fill="#8884d8" />
 
  
</BarChart>
    </div>
  )
}

export default Chart