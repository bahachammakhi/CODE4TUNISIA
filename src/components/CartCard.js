import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import mm from "../img/mm.png"
const data = [
  {
    name: 'Page A', mt: 4000,
  },
  {
    name: 'Page B', phy: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', eng: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', fr: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', ar: 1890, pv: 4800, amt: 2181,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div className="row">
         <div className="card w-50 ml-3 mt-3">
       <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mt" fill="#11111" />
        <Bar dataKey="phy" fill="#32a891" />
        <Bar dataKey="eng" fill="#3232a8" />
        <Bar dataKey="fr" fill="#a83246" />
        <Bar dataKey="ar" fill="#82ca9d" />
      </BarChart> 
     
      </div>
      <div className="ml-5 mt-5">
      <img
                src={mm}
                width="100"
                height="100"
                alt="Me"
                className="rounded-circle "
              />
      </div>
      </div>
     

     
      
    );
  }
}
