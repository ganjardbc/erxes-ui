import React, { Component } from 'react'

class FilterCliclPopup extends Component {
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
                    <h1>Filter Click Popup</h1>
                    <div className="margin-15px">
                        <button
                            onClick={() => this.setState({ sidePopup: true })}
                            className="btn btn-sekunder">
                            <i class="fas fa-sliders-h" style={{ marginRight: "10px" }}></i>  Filter
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
                                <div className="margin-bottom-15px border-bottom">
                                    <h4 className="txt-site txt-main txt-13 txt-extra-bold margin-bottom-5px">Vehicle</h4>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicles</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Vehicles</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicle Types</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Vehicle Types</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicle Groups</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Vehicle Groups</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Status</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Statuses</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Year</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter year</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicle Make</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Make</option>
                                    </select>
                                </div>
                                <div className="margin-bottom-15px">
                                    <h4 className="txt-site txt-main txt-12 margin-bottom-5px">Vehicle Model</h4>
                                    <select className="txt txt-sekunder" style={{ width: "100%" }}>
                                        <option selected value="0">Filter Model</option>
                                    </select>
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

export default FilterCliclPopup