import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import {
    BarChart, Bar, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 8, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 18, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

class CardHeader extends Component {
    render() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-2">
                    <div className="txt-site txt-10 txt-main txt-bold">
                        <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                    </div>
                </div>
                <div className="width width-30">
                    <div className="txt-site txt-10 txt-main txt-bold">Part</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Category</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Manufacture</div>
                </div>
                <div className="width width-7">
                    <div className="txt-site txt-10 txt-main txt-bold">Unit Cost</div>
                </div>
                <div className="width width-7">
                    <div className="txt-site txt-10 txt-main txt-bold">Total Qty</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-bold"></div>
                </div>
            </div>
        )
    }
}

class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-2">
                    <div className="txt-site txt-10 txt-main txt-bold">
                        <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                    </div>
                </div>
                <div className="width width-30">
                    <div className="display-flex">
                        <div style={{ width: 50, marginRight: 15 }}>
                            <div className="image image-50px" style={{ borderRadius: 5, backgroundColor: '#999', textAlign: 'center' }}>
                                <i className="post-top fa fa-lw fa-box" style={{ color: '#fff', fontSize: 24 }} />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 65px)' }}>
                            <div className="txt-site txt-12 txt-main txt-bold" style={{ marginBottom: 8 }}>10</div>
                            <div className="display-flex">
                                <div className="txt-site txt-9 txt-primary">Ac dulco fuel filter</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Filters</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Bosch</div>
                </div>
                <div className="width width-7">
                    <div className="txt-site txt-10 txt-main txt-bold">$2.50</div>
                </div>
                <div className="width width-7">
                    <div className="txt-site txt-10 txt-main txt-bold">1</div>
                </div>
                <div className="width width-5">
                    <button className="btn btn-small btn-grey" style={{ height: 20 }}>
                        <i className="fa fa-lw fa-ellipsis-v" />
                    </button>
                </div>
            </div>
        )
    }
}

class PartList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'All' },
                { status: '', title: 'City Hall' },
                { status: '', title: 'Fire Station' },
                { status: '', title: 'Maintenance HQ' },
                { status: '', title: 'Police Station' },
                { status: '', title: 'Public Works' },
                { status: '', title: 'Archived' }
            ]
        }
    }

    opNavigator = (e, isNumber = false) => {
        const id = isNumber ? e : Number(e.currentTarget.dataset.id)
        const { navigator } = this.state
        let nav = navigator.map((data, index) => {
            return { ...data, status: id === index ? 'active' : '' }
        })
        this.setState({ navigator: nav })
    }

    render() {
        const { navigator } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px display-flex space-between background-white border-bottom">
                    <div className="width width-30">
                        <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Parts List</div>
                    </div>
                    <div className="width width-70 display-flex right">
                        <div className="width width-70 display-flex right">
                            <button className="btn btn-sekunder" onClick={() => this.opMenu()}>
                                <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                            </button>
                        </div>
                        <button className="btn btn-green" style={{ marginLeft: 10 }}>
                            <i className="icn icn-left fa fa-lw fa-plus" /> Add Part
                        </button>
                    </div>
                </div>

                <div className="padding-15px">
                    <div style={{ width: '100%' }}>
                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-9'} onClick={(id) => this.opNavigator(id)} />
                    </div>

                    <div className="display-flex border-bottom" style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
                        <input
                            type="text"
                            className="txt txt-sekunder-color"
                            placeholder="Search numbers and ..."
                            style={{ width: 200, marginRight: 10 }}
                            required />
                        <input
                            type="text"
                            className="txt txt-sekunder-color"
                            placeholder="Filter categories"
                            style={{ width: 200, marginRight: 10 }}
                            required />
                        <input
                            type="text"
                            className="txt txt-sekunder-color"
                            placeholder="Filter manufactures"
                            style={{ width: 200, marginRight: 10 }}
                            required />
                        <button className="btn btn-sekunder" style={{ marginRight: 10 }}>
                            <i className="icn icn-left fa fa-lw fa-sliders-h" /> More
                        </button>
                        <button className="btn btn-main" style={{ marginRight: 15 }}>
                            <i className="icn icn-left fa fa-lw fa-search" /> Search
                        </button>
                        <div>
                            <div className="post-top txt-site txt-10 txt-main">0 filters applied</div>
                        </div>
                    </div>

                    <div className="display-flex wrap">
                        <div style={{ width: 'calc(100% / 2)' }}>
                            <div style={{ width: '100%', paddingTop: 15, paddingBottom: 0 }}>
                                <div className="display-flex wrap">
                                    <div style={{ padding: '10px 0', width: 'calc(100% / 4)' }}>
                                        <div className="txt-site txt-10 txt-main txt-bold" style={{ marginBottom: 5 }}>Total Inventory Value <i className="icn icn-right fa fa-lw fa-info-circle" /></div>
                                        <div className="txt-site txt-18 txt-blue txt-bold">$72,329.96</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '100%', paddingTop: 15, paddingBottom: 0 }}>
                                <div className="display-flex wrap">
                                    <div style={{ padding: '10px 0', width: 'calc(100% / 3)' }}>
                                        <div className="txt-site txt-10 txt-main txt-bold" style={{ marginBottom: 5 }}>Out of Stock</div>
                                        <div className="txt-site txt-18 txt-blue txt-bold" style={{ color: "red" }}>3</div>
                                    </div>
                                    <div style={{ padding: '10px 0', width: 'calc(100% / 3)' }}>
                                        <div className="txt-site txt-10 txt-main txt-bold" style={{ marginBottom: 5 }}>Low Stock</div>
                                        <div className="txt-site txt-18 txt-blue txt-bold" style={{ color: "orange" }}>8</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% / 2)' }}>
                            <div style={{ padding: '10px 0', width: 'calc(100% / 2)' }}>
                                <ResponsiveContainer
                                    width='100%'
                                    aspect={4.0 / 2.8}>
                                    <BarChart
                                        data={data}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0, }}>
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="display-flex space-between" style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
                        <div className="width width-50 display-flex">
                            <div style={{ marginRight: 15 }}>
                                <div className="post-top txt-site txt-10 txt-main">0 selected:</div>
                            </div>
                            <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                                <i className="icn fa fa-lw fa-archive" />
                            </button>
                            <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                                <i className="icn icn-left fa fa-lw fa-map-marker-alt" />
                                Manage Locations <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                                <i className="icn icn-left fa fa-lw fa-print" />
                                Print Labels
                            </button>
                        </div>
                        <div className="width width-50 display-flex right">
                            <button className="btn btn-small btn-sekunder">
                                Sort: Number <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <div style={{ marginRight: 15, marginLeft: 15 }}>
                                <div className="post-top txt-site txt-10 txt-main">1 - 35 of 35</div>
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

                    <div className="card no-margin no-hover no-radius border-all">
                        <div>
                            <div className="border-bottom">
                                <CardHeader />
                            </div>
                            <div className="border-bottom">
                                <CardVehicle />
                            </div>
                            <div className="border-bottom">
                                <CardVehicle />
                            </div>
                            <div className="border-bottom">
                                <CardVehicle />
                            </div>
                            <div>
                                <CardVehicle />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PartList