import React, { Component } from 'react'
import MenuBar from '../../modules/MenuBar'
import { withStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        borderRadius: '10px',
        backgroundColor: lighten('#ccc', 0.5),
    },
    bar: {
        borderRadius: '10px',
        backgroundColor: '#2ecc71',
    },
})(LinearProgress)

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

class CardOverView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'Details' },
                { status: '', title: 'Specs' },
                { status: '', title: 'Engine & Transmission' },
                { status: '', title: 'Wheels & Tires' },
                { status: '', title: 'Fluids' },
                { status: '', title: 'Purchase' },
                { status: '', title: 'Loan/Lease' }
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
        return (
            <div>
                <div className="display-flex space-between border-bottom" style={{ width: '100%', paddingTop: 15, paddingBottom: 20 }}>
                    <div className="width width-50 display-flex">
                        <div className="post-top txt-site txt-18 txt-main txt-bold">Overview</div>
                    </div>
                    <div className="width width-50 display-flex right">
                        <button className="btn btn-small btn-sekunder">
                            Add Subaccount
                        </button>
                    </div>
                </div>
                <div className="display-flex margin-top-15px">
                    <div style={{ position: 'relative', width: 'calc(100% - 8px)', marginRight: 8 }}>
                        <div className="card no-margin no-hover no-radius border-all" style={{ marginBottom: "15px" }}>
                            <div className="padding-15px display-flex space-between border-bottom">
                                <div>
                                    <div className="post-top txt-site txt-main txt-12 txt-bold">
                                        <strong>Credit Summary</strong>
                                    </div>
                                </div>
                                <div>
                                    <div className="txt-site txt-primary txt-9">
                                        Last updated from cbCharge yesterday
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px">
                                <BorderLinearProgress variant="determinate" value={50} valueBuffer={500} />
                                <div className="padding-20px">
                                    <div className="display-flex" style={{ height: 50, marginTop: 20, marginBottom: 20 }}>
                                        <div style={{ width: '100%', height: '100%' }}>
                                            <div className="post-top">
                                                <div className="txt-site txt-10 txt-primary" style={{ marginTop: 5 }}>Current Balance</div>
                                                <div className="txt-site txt-22 txt-bold">$2,352.20</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '100%', height: '100%' }}>
                                            <div className="post-top">
                                                <div className="txt-site txt-10 txt-primary" style={{ marginTop: 5 }}>Availabel Credit <span style={{ float: "right", fontWeight: "bold", color: "#000" }}>$2,647.80</span></div>
                                                <div className="txt-site txt-10 txt-primary" style={{ marginTop: 5 }}>Total Credit Line <span style={{ float: "right", fontWeight: "bold", color: "#000" }}>$5,000.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card no-margin no-hover no-radius border-all">
                            <div className="padding-15px display-flex space-between border-bottom">
                                <div>
                                    <div className="post-top txt-site txt-main txt-12 txt-bold">
                                        <strong>Transaction</strong> <span>Last 7 Days</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="txt-site txt-blue txt-10">
                                        View 18 transaction
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px" style={{ width: '90%' }}>
                                <ResponsiveContainer
                                    width='100%'
                                    aspect={4.0 / 2.8}>
                                    <BarChart
                                        data={data}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0, }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', width: 'calc(100% - 8px)', marginLeft: 8 }}>
                        <div className="card no-margin no-hover no-radius border-all" style={{ marginBottom: 15 }}>
                            <div className="padding-5px display-flex space-between border-bottom" style={{ paddingTop: 4, paddingBottom: 4 }}>
                                <div className="txt-site txt-main txt-12 txt-bold padding-10px">
                                    Account Details
                                </div>
                            </div>
                            <div className="padding-15px border-bottom">
                                <div className="txt-site txt-10 txt-primary">Service</div>
                                <div className="txt-site txt-11 txt-bold"><i className="fa fa-lw fa-circle" style={{ fontSize: 11, color: 'green', marginTop: 1, marginRight: 5 }} />Enabled</div>
                            </div>
                            <div className="padding-15px">
                                <div className="txt-site txt-10 txt-primary">cbChange ID <i className="icn fa fa-lw fa-info-circle" /></div>
                                <div className="txt-site txt-11 txt-bold">999999</div>
                            </div>
                        </div>

                        <div className="card no-margin no-hover no-radius border-all">
                            <div className="padding-15px display-flex space-between border-bottom">
                                <div>
                                    <div className="post-top txt-site txt-main txt-12 txt-bold">
                                        Vehicles
                                    </div>
                                </div>
                                <div>
                                    <div className="txt-site txt-blue">
                                        Manage
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px">
                                <div className="display-flex" style={{ height: 50, marginTop: 20, marginBottom: 20 }}>
                                    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                                        <div className="post-top">
                                            <div className="txt-site txt-10 txt-primary" style={{ marginTop: 5 }}>Enabled</div>
                                            <div className="txt-site txt-22 txt-blue txt-bold">61</div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                                        <div className="post-top">
                                            <div className="txt-site txt-10 txt-primary" style={{ marginTop: 5 }}>Invalid</div>
                                            <div className="txt-site txt-22 txt-orange txt-bold">22</div>
                                        </div>
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

class MaintenanceShopIntegration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            navigator: [
                { status: 'active', value: '', title: 'Overview' },
                { status: '', value: '', title: 'Vehicle Management' },
                { status: '', value: '', title: 'Notification Policies' },
                { status: '', value: '', title: 'Driver Support' },
                { status: '', value: '', title: 'Service Code Mappings' },
                { status: '', value: '', title: 'Maintenance History' }
            ],
            navigatorSub: [
                { status: '', value: '', title: 'Auto Integrate', icon: 'fa fa-lg fa-external-link-square-alt' }
            ]
        }
    }

    opNavigator = (e, isNumber = false) => {
        const id = isNumber ? e : Number(e.currentTarget.dataset.id)
        const { navigator } = this.state
        let nav = navigator.map((data, index) => {
            return { ...data, status: id === index ? 'active' : '' }
        })
        this.setState({ navigator: nav, selectedIndex: id })
    }

    render() {
        const { navigator, navigatorSub } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div className="display-flex">
                        <div style={{ width: 80, marginRight: 15 }}>
                            <div className="image image-80px image-radius background-blue" style={{ overflow: 'hidden' }}>
                                <img style={{ height: '100%', width: 'auto' }} src="https://lh3.googleusercontent.com/proxy/44g9_1lPp4yn2VZlb3RnPKL22cc-4jZognPmOBCKlXguw1KONhIXjNETnXCWjVVPvH2f1q91_AO-AKmk17InLKpqM2E72GhLS3-wGgFadeX_Vg-SxOybT25AmFhkRLj4dGGaCr82slbMqpU" alt="" />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 285px)' }}>
                            <div className="txt-site txt-11 txt-primary margin-top-10px">Service</div>
                            <div className="txt-site txt-18 txt-main txt-bold margin-top-5px" style={{ fontWeight: "bold" }}>Maintenance Shop Integration</div>
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="display-flex space-between" style={{ paddingBottom: 15 }}>
                        <div style={{ width: 250, marginRight: 15 }}>
                            <div className="border-bottom">
                                <MenuBar data={navigator} onClick={(id) => this.opNavigator(id)} />
                            </div>
                            <div>
                                <MenuBar data={navigatorSub} onClick={(id) => console.log('id', id)} />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 265px)' }}>
                            <div>
                                {navigator[0].status === 'active' && <CardOverView />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MaintenanceShopIntegration