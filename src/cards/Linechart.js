import React, { Component } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const TITLE = ['UV', 'PV', 'AMT'];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

class CardLineChart extends Component {
	
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
        <div className="padding-10px background-white border-bottom">
          <div className="txt-site txt-bold text-main txt-12">Line Chart</div>
        </div>
        <div>
          <div className="padding-10px txt-site txt-9">
          <ResponsiveContainer 
            width='100%' 
            aspect={4.0/2.8}>
            <AreaChart 
              data={data}
              margin={{
                top: 0, right: 0, left: 0, bottom: 0,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="uv" 
                stackId="1" 
                stroke="#8884d8" 
                fill="#8884d8" />
              <Area 
                type="monotone" 
                dataKey="pv" 
                stackId="1" 
                stroke="#82ca9d" 
                fill="#82ca9d" />
              <Area 
                type="monotone" 
                dataKey="amt" 
                stackId="1" 
                stroke="#ffc658" 
                fill="#ffc658" />
            </AreaChart>
            </ResponsiveContainer>

            <div className="padding-15px">
              <div className="display-flex-normal txt-site txt-center" style={{margin: 'auto'}}>
                { this.LineInfo() }
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  LineInfo = () => {
    let dt = []
    let val = TITLE.length

    for (let index = 0; index < val; index++) {
      dt.push(
        <div className="padding-5px">
          <span className="fa fa-lw fa-circle" style={{color: COLORS[index]}} /> { TITLE[index] }
        </div>
      )
    }

    return dt
  }

}

export default CardLineChart