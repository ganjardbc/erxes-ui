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

class WorkOrder extends Component {
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
                    <div className="width width-30">
                        <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Work Order</div>
                    </div>
                    <div className="width width-70 display-flex right">
                        <div style={{ marginLeft: 10 }}>
                            <button className="btn btn-no-color margin-right-10px">
                                <span className="txt-site txt-blue"> Service Task</span>
                            </button>
                            <button type="button" className="btn btn-green">
                                <i style={{ fontWeight: "bold" }} className="icn icn-left fa fa-lw fa-plus"></i>
                                Add Work Order
                            </button>
                        </div>
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
                            placeholder="Search numbers"
                            style={{ width: 200, marginRight: 10 }}
                            // value={}
                            // onChange={}
                            required />
                        <input
                            type="text"
                            className="txt txt-sekunder-color"
                            placeholder="Filter vehicles"
                            style={{ width: 200, marginRight: 10 }}
                            // value={}
                            // onChange={}
                            required />
                        <input
                            type="text"
                            className="txt txt-sekunder-color"
                            placeholder="Filter vehicle groups"
                            style={{ width: 200, marginRight: 10 }}
                            // value={}
                            // onChange={}
                            required />
                        <input
                            type="text"
                            className="txt txt-sekunder-color"
                            placeholder="Filter service task"
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
                        <div className="width width-50 display-flex"></div>
                        <div className="width width-50 display-flex right">
                            <button className="btn btn-small btn-sekunder">
                                Sort: Name (alphabetic) <i className="icn icn-right fa fa-lw fa-chevron-down" />
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

                    <div className="card no-margin no-hover no-radius border-all">
                        <div>
                            <div className="border-bottom">
                                <CardHeader />
                            </div>
                            <div className="border-bottom">
                                <CardVehicle />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default WorkOrder