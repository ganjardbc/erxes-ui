import React, { Component } from 'react'

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