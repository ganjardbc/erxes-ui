import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import Dots from '../../modules/Dots'

class CardHeader extends Component {
    render() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-15">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Number</div>
                </div>
                <div className="width width-30">
                    <div className="txt-site txt-10 txt-main txt-bold">Details</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Assigned</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-bold">Total</div>
                </div>
                <div className="width width-10">
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
                <div className="width width-15">
                    <div className="display-flex">
                        <div style={{ width: 40, marginRight: 15 }}>
                            <div className="image image-40px image-radius background-blue" style={{ overflow: 'hidden' }}>
                                <img style={{ height: '100%', width: 'auto' }} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 55px)' }}>
                            <div className="txt-site txt-12 txt-main txt-bold" style={{ marginBottom: 5 }}>Chevy Service Van</div>
                            <div className="display-flex">
                                <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'red', marginTop: 2, marginRight: 5 }}></div>
                                <div className="txt-site txt-9 txt-primary">Out of Service <Dots /> Van <Dots /> Admin</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{ marginBottom: 3 }}>#285</div>
                    <div className="display-flex">
                        <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'teal', marginTop: 2, marginRight: 5 }}></div>
                        <div className="txt-site txt-9 txt-primary">1 hr 59 min</div>
                    </div>
                </div>
                <div className="width width-30">
                    <div className="display-flex margin-bottom-5px">
                        <div className="fa fa-1x fa-wrench" style={{ fontSize: 12, color: '#000', marginTop: 2, marginRight: 5 }}></div>
                        <div className="txt-site txt-10 txt-main txt-bold">Tire Replacement</div>
                    </div>
                    <div className="display-flex margin-bottom-5px">
                        <div className="fa fa-1x fa-info-circle" style={{ fontSize: 12, color: '#000', marginTop: 2, marginRight: 5 }}></div>
                        <div style={{ cursor: 'pointer' }} className="txt-site txt-10 txt-main txt-blue txt-bold">Breakdown</div>
                    </div>
                    <div className="display-flex margin-bottom-5px">
                        <button type="button" className="btn btn-small btn-black">Accident</button>
                    </div>
                    <div className="display-flex margin-bottom-5px">
                        <div className="txt-site txt-9 txt-primary">Issued on <label className="txt-site txt-9 txt-primary txt-underline">Nov 7, 2019</label></div>
                    </div>
                </div>
                <div className="width width-10">

                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-extra-bold">{`$443.96`}</div>
                </div>
                <div className="width width-10">
                    <div className="display-flex center">
                        <button className="btn btn-small btn-sekunder margin-right-5px" style={{ height: 30 }}>
                            <i className="fa fa-lw fa-eye" />
                        </button>
                        <button className="btn btn-small btn-sekunder margin-right-5px" style={{ width: 60, height: 30 }}>
                            <div className="display-flex">
                                <i className="fa fa-lw fa-flag" style={{ marginRight: 5 }} />
                                <i className="fa fa-xs fa-chevron-down" />
                            </div>
                        </button>
                        <button className="btn btn-small btn-grey margin-right-5px" style={{ width: 30, height: 30 }}>
                            <i className="fa fa-lw fa-ellipsis-v" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

class WorkOrderDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'All', value: '0' },
                { status: '', title: 'Open', value: '53' },
                { status: '', title: 'Pending', value: '9' },
                { status: '', title: 'Waiting for parts', value: '9' },
                { status: '', title: 'Completed', value: '0' }
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
                    <div className="display-flex width width-40">
                        <div className="post-top txt-site txt-16 txt-blue txt-bold txt-main padding-top-5px padding-right-10px">Work Orders / #283 /</div>
                        <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Edit Work Order</div>
                    </div>
                    <div className="width width-60 display-flex right">
                        <div style={{ marginLeft: 10 }}>
                            <button className="btn btn-no-color margin-right-10px">
                                <span className="txt-site txt-blue">Cancel</span>
                            </button>
                            <button type="button" className="btn btn-blue">
                                Save Work Order
                            </button>
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="display-flex center width width-100">
                        <div className="display-flex width width-80">
                            <div className="display-flex width width-50">
                                <div className="txt-site txt-main txt-16 txt-extra-bold" style={{ textAlign: 'left', padding: 10 }}>
                                    <i className="icn icn-left fa fa-lw fa-list" /> Work Order Details
                                </div>
                            </div>
                            <div className="display-flex right width width-50">
                                <button className="btn btn-small btn-sekunder">
                                    <i className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'teal', marginTop: 2, marginRight: 5 }}></i>  Open <i className="icn icn-right fa fa-lw fa-chevron-down" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="display-flex center width width-100">
                        <div className="display-flex width width-80">
                            <div className="card-form margin-bottom-15px">
                                <div className="cf-header display-flex border-bottom">
                                    <div className="display-flex width width-50 padding-5px">
                                        <label className="cf-title" style={{ whiteSpace: 'nowrap' }}>
                                            #283  <i className="icn icn-right fa fa-lw fa-pencil-alt"></i>
                                        </label>
                                    </div>
                                    <div className="display-flex right width width-50">
                                        <button className="btn btn-small btn-sekunder">
                                            Edit Details
                                        </button>
                                    </div>
                                </div>
                                <div className="cf-body border-bottom">
                                    <div className="display-flex">
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Issue Date</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-extra-bold txt-12">Nov 6, 2019 10:21 AM</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Start Date</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-extra-bold txt-12">Nov 6, 2019 10:21 AM</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Completion Date</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-extra-bold txt-12">Nov 6, 2019 10:21 AM</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Vehicle</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-blue txt-extra-bold txt-12">PR-2</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Odometer</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-extra-bold txt-12">75,251</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="display-flex">
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Issue By</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-blue txt-extra-bold txt-12">Josh Hickman</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Assigned To</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-blue txt-extra-bold txt-12">Caimen Dennis</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Invoice Number</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-primary txt-extra-bold txt-12">Not Set</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">PO Number</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-primary txt-extra-bold txt-12">Not Set</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="display-flex">
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Vendor</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-primary txt-extra-bold txt-12">Not Set</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Labels</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-primary txt-extra-bold txt-12">Not Set</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cf-footer">
                                    <div className="display-flex">
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Change Number</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-primary txt-extra-bold txt-12"></label>
                                                    </div>
                                                </div>
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Job Code</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-primary txt-extra-bold txt-12"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="display-flex width width-50">
                                            <div className="cf-field">
                                                <div className="display-flex padding-bottom-5px">
                                                    <div className="width width-30">
                                                        <label className="txt-site txt-primary txt-12">Vendor 2</label>
                                                    </div>
                                                    <div className="width width-70 padding-left-10px">
                                                        <label className="txt-site txt-main txt-primary txt-extra-bold txt-12"></label>
                                                    </div>
                                                </div>
                                            </div>
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

export default WorkOrderDetail