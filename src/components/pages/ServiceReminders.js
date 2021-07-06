import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import DatePicker from '../../modules/popup/Date'
import Dots from '../../modules/Dots'

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
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle Renewal Type</div>
                </div>
                <div className="width width-15">
                    <div className="txt-site txt-10 txt-main txt-bold">Due Date</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Subscribers</div>
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
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                </div>
                <div className="width width-30">
                    <div className="display-flex">
                        <div style={{ width: 50, marginRight: 15 }}>
                            <div className="image image-50px image-radius background-blue" style={{ overflow: 'hidden' }}>
                                <img style={{ height: '100%', width: 'auto' }} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 65px)' }}>
                            <div className="txt-site txt-12 txt-main txt-bold" style={{ marginBottom: 8 }}>F-4</div>
                            <div className="display-flex">
                                <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'grey', marginTop: 2, marginRight: 5 }}></div>
                                <div className="txt-site txt-9 txt-primary">Solid <Dots /> Ladder <Dots /> Fire</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="display-flex">
                        <div className="txt-site txt-10 txt-main txt-bold">Registration</div>
                        <div className="txt-site txt-9" style={{ fontSize: 13, color: 'white', backgroundColor: 'red', marginLeft: 3, marginTop: -3, padding: 3  }}>Overdue</div>
                    </div>
                </div>
                <div className="width width-15">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{ marginBottom: 3 }}>Fri, Nov 30, 2018 (<span style={{ color: "red" }}>11 months ago</span>)</div>
                    <div className="txt-site txt-9 txt-primary">Due Soon on Fri, Nov 16, 2018</div>
                </div>
                <div className="width width-10">
                    <div className="display-flex">
                        <div className="txt-site txt-10 txt-main txt-bold">1 subcriber</div>
                        <div className="txt-site txt-9" style={{ fontSize: 13, color: 'white', backgroundColor: 'green', marginLeft: 3, marginTop: -3, padding: 3  }}>Active</div>
                    </div>
                    <div className="txt-site txt-9 txt-primary">Notification last sent Today</div>
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


class CardVehicleRenewals extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="padding-15px">
                <div className="display-flex border-bottom" style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
                    <button className="btn btn-sekunder" style={{ marginRight: 5 }}>
                        All Reminders <i className="icn icn-right fa fa-lw fa-chevron-down" />
                    </button>
                    <div style={{ width: 300, marginRight: 10 }}>
                        <DatePicker />
                    </div>
                    <input
                        type="text"
                        className="txt txt-sekunder-color"
                        placeholder="Filter vehicles"
                        style={{ width: 200, marginRight: 10 }}
                        // value={}
                        // onChange={}
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

                <div className="display-flex space-between" style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
                    <div className="width width-50 display-flex">
                        <div style={{ marginRight: 15 }}>
                            <div className="post-top txt-site txt-10 txt-main">0 selected:</div>
                        </div>
                        <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                            Edit / Reschedule
                        </button>
                        <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                            Manage Subscribers <i className="icn icn-right fa fa-lw fa-chevron-down" />
                        </button>
                        <button className="btn btn-small btn-icn btn-sekunder" style={{ marginRight: 5 }}>
                            <i className="icn fa fa-lw fa-trash-alt" />
                        </button>
                    </div>
                    <div className="width width-50 display-flex right">
                        <div style={{ marginRight: 15, marginLeft: 15 }}>
                            <div className="post-top txt-site txt-10 txt-main">1 - 50 of 54</div>
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
        )
    }
}

class VehicleRenewalReminder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'Service Reminders' },
                { status: '', title: 'Vehicle Renewals' },
                { status: '', title: 'Contact Renewals' }
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
                <div className="padding-15px background-white border-bottom">
                    <div style={{ width: '100%', paddingBottom: 15 }}>
                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-2'} onClick={(id) => this.opNavigator(id)} />
                    </div>
                    {navigator[0].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Service Reminders</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <button className="btn btn-sekunder" onClick={() => this.opMenu()}>
                                    <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                                </button>
                            </div>
                        </div>
                    )}
                    {navigator[1].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Vehicle Renewal Reminders</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <button className="btn btn-sekunder" onClick={() => this.opMenu()}>
                                    <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                                </button>
                            </div>
                        </div>
                    )}
                    {navigator[2].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Contact Renewals</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <button className="btn btn-sekunder" onClick={() => this.opMenu()}>
                                    <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {navigator[1].status === 'active' && (
                    <CardVehicleRenewals />
                )}

            </div>
        )
    }
}

export default VehicleRenewalReminder