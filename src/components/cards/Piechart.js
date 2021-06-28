import React, { Component } from 'react'
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Group Pie A', value: 400 },
  { name: 'Group Pie B', value: 300 },
  { name: 'Group Pie C', value: 300 },
  { name: 'Group Pie D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class CardPieChart extends Component {
	
	state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className="card">
                    
        <div className="padding-15px background-blue">
          Pie Chart
        </div>

        <div className="padding-bottom-10px txt-site txt-11">
          <ResponsiveContainer 
            width='100%' 
            aspect={4.0/2.8}>
	        	<PieChart style={{
	        		margin: 'auto',
	        		}}>
			        <Pie
			          data={data}
			          labelLine={false}
			          label={renderCustomizedLabel}
			          outerRadius={90}
			          fill="#8884d8"
			          dataKey="value"
			        >
			          {
			            data.map(
			            	(entry, index) => <Cell 
			            		key={`cell-${index}`} 
			            		fill={COLORS[index % COLORS.length]} />
			            )
			          }
			        </Pie>
			      </PieChart>
          </ResponsiveContainer>

          <div className="padding-15px">
            <div>
              { this.PieInfo() }
            </div>
          </div>

        </div>
      </div>
    )
  }

  PieInfo = () => {
    let dt = []
    let val = data.length

    for (let index = 0; index < val; index++) {
      dt.push(
        <div className="margin-5px">
          <span className="fa fa-lw fa-circle" style={{color: COLORS[index]}} /> { data[index].name }
        </div>
      )
    }

    return dt
  }

}

export default CardPieChart