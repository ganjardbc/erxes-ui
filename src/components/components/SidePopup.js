import React, { Component } from 'react'

class SidePopup extends Component {
    constructor() {
        super()
        this.state = {
            sidePopup: false
        }
    }
    render() {
        const { sidePopup } = this.state
        return (
            <div className="main-content">

                <div className="padding-15px">
                    <h1>Side Popup</h1>
                    <div className="margin-15px">
                        <button
                            onClick={() => this.setState({ sidePopup: true })}
                            className="btn btn-green">
                            Open Side Popup
                        </button>
                    </div>
                </div>

                {(sidePopup === true) ? (
                    <div className="app-popup app-popup-show">
                        <div className="popup-content-mikro background-white" style={{ position: "absolute", right: 0, bottom: 0, top: 0, overflow: "hidden", paddingBottom: "115px" }}>
                            <div className="padding-15px border-bottom grid grid-2x">
                                <div className="col-1">
                                    <h3 className="txt-site txt-main" style={{ paddingTop: "10px" }}>
                                        <i class="fas fa-sliders-h" style={{ marginRight: "10px" }}></i>
                                        Filters
                                    </h3>
                                </div>
                                <div className="col-2">
                                    <div className="grid grid-2x">
                                        <div className="col-1" style={{ marginRight: "-60px" }}>
                                            <button
                                                style={{ float: "right" }}
                                                onClick={() => alert("Search")}
                                                className="btn btn-blue">
                                                <i className="fas fa-search" style={{ color: "#fff", marginRight: "5px" }}></i>
                                                Search
                                            </button>
                                        </div>
                                        <div className="col-2">
                                            <div onClick={() => this.setState({ sidePopup: false })} style={{ textAlign: "right", paddingTop: "10px", cursor: "pointer" }}>
                                                <i className="fa fa-lw fa-times" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px padding-bottom-30px" style={{ overflow: "auto", height: "100%" }}>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicle Make</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Vehicle Make</option>
                                        <option value="2">Make 1</option>
                                        <option value="3">Make 2</option>
                                        <option value="4">Make 3</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicle Model</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Vehicle Model</option>
                                        <option value="2">Model 1</option>
                                        <option value="3">Model 2</option>
                                        <option value="4">Model 3</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicle Trim</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Vehicle Trim</option>
                                        <option value="2">Trim 1</option>
                                        <option value="3">Trim 2</option>
                                        <option value="4">Trim 3</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Registration State/Province</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Registration State/Province</option>
                                        <option value="2">State/Province 1</option>
                                        <option value="3">State/Province 2</option>
                                        <option value="4">State/Province 3</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Current Operator</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Current Operator</option>
                                        <option value="2">Current 1</option>
                                        <option value="3">Current 2</option>
                                        <option value="4">Current 3</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Fuel Types</h4>
                                    <input
                                        className="txt txt-sekunder"
                                        placeholder="Filter Fuel Types" />
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Loan/Lease Vendor</h4>
                                    <input
                                        className="txt txt-sekunder"
                                        placeholder="Filter Loan/Lease Vendors" />
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Purchase Vendor</h4>
                                    <input
                                        className="txt txt-sekunder"
                                        placeholder="Filter Purchase Vendors" />
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Ownership</h4>
                                    <input
                                        className="txt txt-sekunder"
                                        placeholder="Filter Ownership" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

            </div>
        )
    }
}

export default SidePopup