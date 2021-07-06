import React, { Component } from 'react'

class CardVehicleSchedule extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderHeaderInfo() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-30">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle Rules</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Schedule</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-bold"></div>
                </div>
            </div>
        )
    }

    renderHeader() {
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
                <div className="width width-50">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Schedule</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-bold"></div>
                </div>
            </div>
        )
    }

    renderBodyInfo() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-30">
                    <div className="txt-site txt-10 txt-main txt-bold"><i className="icn fa fa-lw fa-exchange-alt margin-right-5px" style={{ transform: "rotate(90deg)" }} />Groups: Law Enforcement</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Daily</div>
                </div>
                <div className="width width-5">
                    <button className="btn btn-small btn-grey" style={{ width: 25, height: 25 }}>
                        <i className="fa fa-lw fa-ellipsis-v" />
                    </button>
                </div>
            </div>
        )
    }

    renderBody() {
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
                <div className="width width-50">
                    <div className="display-flex">
                        <div style={{ width: 50, marginRight: 15 }}>
                            <div className="image image-50px image-radius background-blue" style={{ overflow: 'hidden' }}>
                                <img style={{ height: '100%', width: 'auto' }} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 65px)' }}>
                            <div className="display-flex">
                                <div className="width width-50">
                                    <div className="txt-site txt-12 txt-blue txt-main txt-bold" style={{ marginBottom: 8 }}>LE-1</div>
                                </div>
                                <div className="width width-50" style={{ textAlign: "right" }}>
                                    <div className="txt-site txt-10 txt-main txt-bold" style={{ marginBottom: 8 }}>
                                        <div style={{ backgroundColor: "grey", color: "#fff", padding: 5, width: "10%", float: "right" }}>Rule</div>
                                    </div>
                                </div>
                            </div>
                            <div className="txt-site txt-9 txt-primary"><i className="icn fa fa-lw fa-flag margin-right-5px" /> Out of Service <i className="icn fa fa-lw fa-tag margin-left-5px margin-right-5px" /> SUV <i className="icn fa fa-lw fa-drum-steelpan margin-left-5px margin-right-5px" /> Law Enforcement</div>
                        </div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Daily</div>
                </div>
                <div className="width width-5">
                    <button className="btn btn-small btn-grey" style={{ width: 25, height: 25 }}>
                        <i className="fa fa-lw fa-ellipsis-v" />
                    </button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="padding-0px">
                <div className="display-flex space-between" style={{ width: '100%', paddingBottom: 15 }}>
                    <div className="width width-50 display-flex">
                        <button className="btn btn-main" style={{ marginRight: 15 }}>
                            Manage Vehicles
                        </button>
                        <div>
                            <div className="post-top txt-site txt-10 txt-main"> 58 vehicle(s) will see this form on Fleetio Go </div>
                        </div>
                    </div>
                </div>
                <div className="card no-margin no-hover no-radius border-all">
                    <div className="border-bottom">
                        {this.renderHeaderInfo()}
                    </div>
                    {this.renderBodyInfo()}
                </div>

                <div className="display-flex space-between" style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
                    <div className="width width-50 display-flex">
                        <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                            <i className="icn fa fa-lw fa-undo" />
                        </button>
                        <input
                            type="text"
                            className="txt txt-sekunder-color"
                            placeholder="Vehicle Name/VIN/License Plate"
                            style={{ width: 200, marginRight: 10 }} />
                        <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                            View All <i className="icn icn-right fa fa-lw fa-chevron-down" />
                        </button>
                        <div>
                            <div className="post-top txt-site txt-10 txt-main"><input type="checkbox" className="txt-site txt-sekunder margin-rights-10px" /> Hide Disabled</div>
                        </div>
                    </div>
                    <div className="width width-50 display-flex right">
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
                    <div className="border-bottom">
                        {this.renderHeader()}
                    </div>
                    {this.renderBody()}
                    {this.renderBody()}
                    {this.renderBody()}
                    {this.renderBody()}
                    {this.renderBody()}
                </div>
            </div>
        )
    }
}

class VehicleSchedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            navigator: [
                { status: '', value: '15', title: 'Inspection Items', icon: '' },
                { status: 'active', value: '58', title: 'Vehicle & Schedules', icon: '' },
                { status: '', value: '1', title: 'Workflows', icon: '' }
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
        const { navigator } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div className="display-flex space-between" style={{ paddingBottom: 15 }}>
                        <div className="width width-30">
                            <div className="display-flex post-top txt-site txt-12 txt-primary">
                                <div className="txt-site txt-12 txt-safe txt-main">Inspection Forms</div> <div style={{ marginLeft: 5, marginRight: 5 }}>/</div>
                                <div className="txt-site txt-12 txt-main">
                                    <i className="fa fa-lw fa-circle" style={{ fontSize: 11, color: 'green', marginTop: 1, marginRight: 5 }} />
                                    Daily Vehicle Inspection
                                    <i className="txt-site txt-8 txt-primary fa fa-lw fa-pencil-alt" style={{ marginLeft: 5 }} />
                                </div>
                            </div>
                        </div>
                        <div className="width width-70 display-flex right">
                            <div className="txt-site txt-12 txt-safe txt-main">Cancel</div>
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="display-flex space-between" style={{ paddingBottom: 15 }}>
                        <div style={{ width: 250, marginRight: 15 }}>
                            <div style={{ backgroundColor: "#fff" }}>
                                <div>
                                    <ul className="menu-side" style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        {navigator && navigator.map((dt, i) => {
                                            return (
                                                <li className={dt.status} data-id={i} onClick={(id) => this.opNavigator(id)}>
                                                    {dt.icon && (
                                                        <div className="ms-icn">
                                                            <i className={dt.icon ? dt.icon : "fa fa-lw fa-th-large"} />
                                                        </div>
                                                    )}
                                                    <div className="ms-label" style={{ color: "#000" }}>
                                                        {dt.title}
                                                    </div>
                                                    <div className="ms-val" style={{ backgroundColor: "grey", color: "#fff", borderRadius: 15, textAlign: "center" }}>
                                                        {dt.value}
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 265px)' }}>
                            <div>
                                {navigator[1].status === 'active' && <CardVehicleSchedule />}
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

export default VehicleSchedule