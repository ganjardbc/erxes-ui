import React, { Component } from 'react'

class ReceiveItemPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popupVisible: true
        }
    }

    render() {
        const { popupVisible } = this.state
        return (
            <div className="main-content">

                <div className="padding-15px">
                    <h1>Receive Item Popup</h1>
                    <div className="margin-15px">
                        <button
                            onClick={() => this.setState({ popupVisible: true })}
                            className="btn btn-green">
                            Open Popup
                        </button>
                    </div>
                </div>

                {popupVisible &&
                    <ReceiveItem
                        onClickClose={() => this.setState({ popupVisible: false })}
                    />
                }
            </div>
        )
    }
}

export default ReceiveItemPopup

class ReceiveItem extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div className="app-popup app-popup-show">
                <div className="popup-content-small background-white post-center">
                    <div className="padding-15px border-bottom">
                        <div className="display-flex">
                            <div className="width width-80">
                                <h3 className="txt-site txt-main">
                                    Receive items from PO #97
                                </h3>
                            </div>
                            <div className="display-flex right width width-20">
                                <button
                                    onClick={() => this.props.onClickClose()}
                                    type="button"
                                    className="popup-btn-close btn btn-micro-circle btn-no-color">
                                    <i className="fa fa-lw fa-times" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="padding-15px border-bottom">
                        <div className="display-flex border-bottom padding-bottom-10px">
                            <div className="width width-45">
                                <div className="txt-site txt-extra-bold txt-10">Item</div>
                            </div>
                            <div className="width width-15">
                                <div className="txt-site txt-center txt-extra-bold txt-10">Ordered</div>
                            </div>
                            <div className="width width-15">
                                <div className="txt-site txt-center txt-extra-bold txt-10">Total Received</div>
                            </div>
                            <div className="width width-15">
                                <div className="txt-site txt-center txt-extra-bold txt-10">Received - Full/Partial</div>
                            </div>
                        </div>
                        <div className="display-flex border-bottom padding-top-10px padding-bottom-10px">
                            <div className="width width-45">
                                <div className="txt-site txt-extra-bold txt-10">26A Icon</div>
                                <div className="txt-site txt-primary txt-9">26" Wiper Blade (Pack of 1)</div>
                            </div>
                            <div className="width width-15">
                                <div className="txt-site txt-center txt-extra-bold txt-10 ">23</div>
                            </div>
                            <div className="width width-15">
                                <div className="txt-site txt-center txt-extra-bold txt-10 ">0</div>
                            </div>
                            <div className="display-flex center width width-15">
                                <label className="switch red">
                                    <input type="checkbox" />
                                    <span className="slider" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="padding-right-15px padding-left-15px padding-bottom-15px border-bottom">
                        <div className="grid grid-2x grid-mobile-none gap-15px">
                            <div className="col-1 padding-top-10px">
                                <button  onClick={() => this.props.onClickClose()} type="button" className="btn btn-no-color">Cancel</button>
                            </div>
                            <div className="col-2 content-right padding-top-10px">
                                <button type="button" className="btn btn-orange">Receive</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}