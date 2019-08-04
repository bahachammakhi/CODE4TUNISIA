import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';


const data = [
  {
    name: 'Presence', uv: 31.47, pv: 2400, fill: '#8884d8',
  },
  {
    name: 'Participation', uv: 26.69, pv: 4567, fill: '#83a6ed',
  },
  {
    name: 'Communication', uv: 15.69, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: 'Behavo', uv: 8.22, pv: 9800, fill: '#82ca9d',
  },
];

const style = {
  top: 100,
  left: 350,

  lineHeight: '24px',
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  render() {
    return (
        <div className="mt-5">
        <div> 
      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
     
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        
      </RadialBarChart>
     </div>
     </div>
    );
  }
}
