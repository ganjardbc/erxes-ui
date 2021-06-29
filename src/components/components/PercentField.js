import React, { Component } from 'react'

class PercentField extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="main-content">

                <div className="padding-15px grid grid-2x">
                    <div className="col-1">
                        <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
                            Field Percent
                        </div>
                    </div>
                    <div className="col-2 content-right"></div>
                </div>

                <div className="display-flex-normal">
                    <div className="padding-15px grid grid-2x">
                        <div className="col-1">
                            <div className="padding-15px grid grid-3x">
                                <div className="col-1">
                                    <div className="txt-site txt-12 txt-main padding-top-5px" style={{ fontWeight: "bold", textAlign: "right", marginRight: "20px" }}>Discount: </div>
                                </div>
                                <div className="col-2">
                                    <div className="margin-bottom-20px card-date-picker">
                                        <div className="double" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <select style={{ border: "2px solid rgba(0,0,0,0.2)", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", padding: "10px", fontWeight: "bold" }}>
                                                <option style={{ fontWeight: "bold" }} selected value="percent">%</option>
                                                <option style={{ fontWeight: "bold" }} value="decimal">.</option>
                                            </select>
                                            <input
                                                style={{ color: "#000", textAlign: "right", padding: 15, borderTopRightRadius: "5px", borderBottomRightRadius: "5px", border: "2px solid rgba(0,0,0,0.2)", borderLeft: "none" }}
                                                className="input"
                                                type="number"
                                                name="percent">
                                            </input>
                                        </div>
                                        <div className="txt-site txt-11 txt-main padding-top-5px" style={{ textAlign: "right" }}>$0.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px grid grid-3x">
                                <div className="col-1">
                                    <div className="txt-site txt-12 txt-main padding-top-5px" style={{ fontWeight: "bold", textAlign: "right", marginRight: "20px" }}>Tax: </div>
                                </div>
                                <div className="col-2">
                                    <div className="margin-bottom-20px card-date-picker">
                                        <div className="double" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <select style={{ border: "2px solid rgba(0,0,0,0.2)", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", padding: "10px", fontWeight: "bold" }}>
                                                <option style={{ fontWeight: "bold" }} selected value="percent">%</option>
                                                <option style={{ fontWeight: "bold" }} value="decimal">.</option>
                                            </select>
                                            <input
                                                style={{ color: "#000", textAlign: "right", padding: 15, borderTopRightRadius: "5px", borderBottomRightRadius: "5px", border: "2px solid rgba(0,0,0,0.2)", borderLeft: "none" }}
                                                className="input"
                                                type="number"
                                                name="percent">
                                            </input>
                                        </div>
                                        <div className="txt-site txt-11 txt-main padding-top-5px" style={{ textAlign: "right" }}>$0.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PercentField