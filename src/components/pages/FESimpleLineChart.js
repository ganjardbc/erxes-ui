import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
];
  
const TITLE = ['UV', 'PV', 'AMT'];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

class CardLineChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'Fuel History' },
                { status: '', title: 'Fuel Integrations' }
            ]
        }
    }

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

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
    
    render() {
        return (
            <div className="txt-site txt-9 txt-primary">
                <ResponsiveContainer width="100%" aspect={4.0/1.9}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 0, right: 0, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default CardLineChart