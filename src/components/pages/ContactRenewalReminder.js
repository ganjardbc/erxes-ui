import React, { Component } from 'react'
import DatePicker from '../../modules/popup/Date'

class CardHeader extends Component {
    render() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-40">
                    <div className="txt-site txt-10 txt-main txt-bold">Contact</div>
                </div>
                <div className="width width-20">
                    <div className="txt-site txt-10 txt-main txt-bold">Contact Renewal Reminder</div>
                </div>
                <div className="width width-20">
                    <div className="txt-site txt-10 txt-main txt-bold">Next due at</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main fa fa-lw fa-user"></div>
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
                <div className="width width-40">
                    <div className="display-flex">
                        <div style={{ width: 45, marginRight: 15 }}>
                            <div className="image image-50px background-blue" style={{ overflow: 'hidden', borderRadius: "30px" }}>
                                <img style={{ backgroundSize: "cover" }} src="https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 60px)' }}>
                            <div className="post-top display-flex align-center">
                                <div className="txt-site txt-11 txt-safe txt-bold" >Allie Hudson</div>
                                <div className="txt-site txt-10 txt-primary" style={{ marginLeft: 5, marginTop: 3 }}>#256221</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-20">
                    <div className="txt-site txt-10 txt-safe txt-bold">License Renewal</div>
                </div>
                <div className="width width-20">
                    <div className="display-flex align-center" style={{marginBottom: 3}}>
                        <div className="txt-site txt-10 txt-main txt-bold txt-underline" style={{ marginBottom: 3, marginRight: 5 }}>Sun, Jul 1, 2018</div>
                        <div className="card-value red">Overdue</div>
                    </div>
                    <div className="txt-site txt-9 txt-primary">Due soon: Fri, Jun 1, 2018</div>
                </div>
                <div className="width width-5">
                    <div className="display-flex">
                        <div className="card-value grey">3</div>
                    </div>
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

class ContactRenewalReminder extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="main-content no-padding">
                <div className="padding-15px display-flex space-between background-white border-bottom">
                    <div className="width width-30">
                        <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Contact Renewal Reminders</div>
                    </div>
                    <div className="width width-70 display-flex right">
                        <button className="btn btn-sekunder" style={{ marginLeft: 10 }}>
                            Import Contact Renewal Reminders
                        </button>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="display-flex border-bottom" style={{ width: '100%', paddingTop: 0, paddingBottom: 15 }}>
                        <button className="btn btn-sekunder" style={{ marginRight: 10 }}>
                            All Reminders <i className="icn fa fa-lw fa-sort" />
                        </button>
                        <div style={{ width: 280, marginRight: 10 }}>
                            <DatePicker />
                        </div>
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
                                Manage Subscribers <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                                <i className="fa fa-lw fa-trash-alt" />
                            </button>
                        </div>
                        <div className="width width-50 display-flex right">
                            <div style={{ marginRight: 15, marginLeft: 15 }}>
                                <div className="post-top txt-site txt-10 txt-main">1 - 9 of 9</div>
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

export default ContactRenewalReminder