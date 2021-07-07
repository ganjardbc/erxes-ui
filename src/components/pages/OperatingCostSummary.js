import React, { Component } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

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
const dataPie = [
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

class OperatingCostSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    PieInfo = () => {
        let dt = []
        let val = dataPie.length

        for (let index = 0; index < val; index++) {
            dt.push(
                <div className="margin-5px">
                    <span className="fa fa-lw fa-circle" style={{ color: COLORS[index] }} /> {dataPie[index].name}
                </div>
            )
        }

        return dt
    }

    render() {
        return (
            <div className="main-content no-padding">
                <div className="padding-15px display-flex space-between background-white">
                    <div className="width width-50">
                        <div className="post-top txt-site txt-16 txt-bold txt-blue padding-top-5px">Reports / <span className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Operating Cost Summary</span></div>
                    </div>
                    <div className="width width-50 display-flex right">
                        <div style={{ marginLeft: 10 }}>
                            <button type="button" className="btn btn-sekunder margin-right-10px">
                                <i style={{ fontWeight: "bold" }} className="icn icn-left fa fa-lw fa-save"></i>
                                Save
                            </button>
                            <button type="button" className="btn btn-sekunder margin-right-10px">
                                <i style={{ fontWeight: "bold" }} className="icn icn-left fa fa-lw fa-share-alt"></i>
                                Share
                            </button>
                            <button type="button" className="btn btn-sekunder margin-right-10px">
                                Export CSV
                                <i style={{ fontWeight: "bold", marginLeft: 5 }} className="icn icn-right fa fa-lw fa-caret-down"></i>
                            </button>
                            <button type="button" className="btn btn-sekunder">
                                <i style={{ fontWeight: "bold" }} className="icn icn-left fa fa-lw fa-print"></i>
                                Print
                            </button>
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="card no-margin no-hover no-radius border-all">
                        <div className="card-form">
                            <div className="cf-body border-bottom">
                                <div className="display-flex space-between">
                                    <div className="width width-5"></div>
                                    <div className="width width-20 padding-15px">
                                        <div className="padding-bottom-10px">
                                            <div className="cf-subtitle">Total Cost (Filtered)</div>
                                            <div style={{ color: 'blue', fontSize: 30 }} className="cf-title">$11,342.66</div>
                                        </div>
                                        <div className="padding-bottom-10px">
                                            <div className="cf-subtitle">Service Cost (Filtered)</div>
                                            <div style={{ color: 'blue', fontSize: 25 }} className="cf-title">$8,385.52</div>
                                        </div>
                                        <div className="padding-bottom-10px">
                                            <div className="cf-subtitle">Fuel Cost (Filtered)</div>
                                            <div style={{ color: 'blue', fontSize: 25 }} className="cf-title">$909.28</div>
                                        </div>
                                        <div className="padding-bottom-10px">
                                            <div className="cf-subtitle">Other Cost (Filtered)</div>
                                            <div style={{ color: 'blue', fontSize: 25 }} className="cf-title">$2,048.21</div>
                                        </div>
                                    </div>
                                    <div className="width width-40 padding-15px">
                                        <div className="padding-bottom-10px">
                                            <div className="cf-subtitle txt-site txt-center">Average Cost/Meter</div>
                                        </div>
                                        <div className="padding-5px">
                                            <ResponsiveContainer
                                                width='80%'
                                                aspect={4.0 / 2.8}>
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
                                        </div>
                                    </div>
                                    <div className="width width-30 padding-15px">
                                        <div className="padding-bottom-10px">
                                            <div className="cf-subtitle txt-site txt-center">Cost Breakdown</div>
                                        </div>
                                        <div className="padding-5px">
                                            <ResponsiveContainer
                                                width='100%'
                                                aspect={4.0 / 2.8}>
                                                <PieChart style={{
                                                    margin: 'auto',
                                                }}>
                                                    <Pie
                                                        data={dataPie}
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
                                        </div>
                                        <div className="padding-15px">
                                            <div>
                                                {this.PieInfo()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="width width-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="display-flex space-between" style={{ width: '100%' }}>
                        <div className="width width-50 display-flex">
                            <button className="btn btn-small btn-sekunder margin-right-15px">
                                Group: Vehicle Group <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <button className="btn btn-small btn-sekunder margin-right-15px">
                                <i className="icn icn-right fa fa-lw fa-sliders-h" /> Filter
                            </button>
                            <div className="margin-right-15px">
                                <div className="post-top txt-site txt-10 txt-main">1 filters applied</div>
                            </div>
                            <button className="btn btn-small btn-no-color margin-right-15px">
                                Clear all
                            </button>
                        </div>
                        <div className="width width-50 display-flex right">
                            <button className="btn btn-small btn-sekunder">
                                Columns <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <div style={{ marginRight: 15, marginLeft: 15 }}>
                                <div className="post-top txt-site txt-10 txt-main">1 - 50 of 83</div>
                            </div>
                            <div className="display-flex">
                                <button className="btn btn-small btn-icn btn-sekunder">
                                    <i className="icn fa fa-lw fa-chevron-left" />
                                </button>
                                <button className="btn btn-small btn-icn btn-sekunder">
                                    <i className="icn fa fa-lw fa-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="padding-15px">
                    <div className="card no-margin no-hover no-radius border-all">
                        <div className="card-form">
                            <div className="cf-header border-bottom">
                                <div className="display-flex space-between">
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Vehicle</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Year Make</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Model</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Current Meter</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">VIN/SN</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Service Cost (lifetime)</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Fuel Cost (lifetime)</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Other Cost (lifetime)</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Oil Type</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Cost/Meter (lifetime)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cf-header border-bottom">
                                <div className="display-flex space-between">
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold">Fire</div>
                                    </div>
                                    <div className="width width-10">
                                        <div className="post-top txt-site txt-10 txt-main txt-extra-bold txt-right">N/A</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OperatingCostSummary