import React, { Component } from 'react'
import Dots from '../../modules/Dots';
import TabBar from '../../modules/TabBar';

class Issues extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'Open', value: '53' },
                { status: '', title: 'Resolved', value: '9' },
                { status: '', title: 'Closed', value: '0' }
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
                <div className="padding-15px">
                    <div className="display-flex width width-100">
                        <div className="txt-site txt-main txt-16 txt-extra-bold" style={{ textAlign: 'left', padding: 10 }}>
                            <i className="icn icn-left fa fa-lw fa-info-circle" style={{ color: 'darkgray' }} /> Issues
                        </div>
                    </div>
                    <div className="display-flex center width width-100">
                        <div className="card-form margin-bottom-15px">
                            <div className="cf-header display-flex border-bottom">
                                <div className="display-flex width width-50 padding-5px" style={{ cursor: 'pointer' }}>
                                    <div className="width width-5 padding-10px">
                                        <span className="cf-title">
                                            <i className="icn icn-right fa fa-lw fa-caret-down"></i>
                                        </span>
                                    </div>
                                    <div className="width width-95">
                                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-9'} onClick={(id) => this.opNavigator(id)} />
                                    </div>
                                </div>
                                <div className="display-flex right width width-50 padding-5px">
                                    <button className="btn btn-small btn-no-color">
                                        <i className="icn fa fa-lw fa-plus"></i> Create New Issue
                                    </button>
                                </div>
                            </div>
                            <div className="cf-body border-bottom">
                                <div className="card margin-bottom-20px" style={{ borderLeft: '3p0x', borderLeftColor: 'teal', backgroundColor: 'azure' }}>
                                    <div className="card-pad" style={{ color: "darkgray" }}>
                                        <i className="icn fa fa-lw fa-info-circle"></i>  Select any issues that were resolved as part of this service.
                                    </div>
                                </div>
                                <div className="display-flex border-bottom margin-bottom-15px">
                                    <div className="display-flex width width-5">
                                        <i className="txt-site txt-sekunder fa fa-check padding-10px" />
                                    </div>
                                    <div className="width width-10">
                                        <div className="txt-site txt-extra-bold txt-10 padding-10px">Issue</div>
                                    </div>
                                    <div className="width width-50">
                                        <div className="txt-site txt-extra-bold txt-10 padding-10px"></div>
                                    </div>
                                    <div className="width width-15">
                                        <div className="txt-site txt-extra-bold txt-10 padding-10px">Assigned</div>
                                    </div>
                                    <div className="width width-15">
                                        <div className="txt-site txt-extra-bold txt-10 padding-10px">Due</div>
                                    </div>
                                </div>
                                <div className="display-flex border-bottom margin-bottom-15px">
                                    <div className="display-flex left width width-5">
                                        <input type="checkbox" className="txt-site txt-sekunder margin-left-10px" />
                                    </div>
                                    <div className="width width-10">
                                        <div className="txt-site txt-primary txt-10 margin-left-10px">#729</div>
                                    </div>
                                    <div className="width width-50">
                                        <div className="txt-site txt-extra-bold txt-blue txt-10 margin-left-10px margin-bottom-5px">[Inspection] Tires</div>
                                        <div className="txt-site txt-primary txt-10 margin-left-10px margin-bottom-5px">Reported <span className="txt-site txt-underline">3 days ago</span> by Josh Hickman
                                            <Dots /> <span className="txt-site txt-blue">Inspection Submission #53695201</span> </div>
                                        <div className="txt-site txt-primary txt-10 margin-left-10px margin-bottom-5px">Added to <span className="txt-site txt-blue">WO #282</span> </div>
                                        <div className="txt-site txt-primary txt-10 margin-left-10px margin-bottom-5px">Generated by failed inspection item "Tires" on <i className="icn icn-right fa fa-ellipsis-h" /> </div>
                                        <div className="txt-site txt-bold txt-blue txt-10 margin-left-10px margin-top-5px margin-bottom-5px">+ Link To Line Items</div>
                                    </div>
                                    <div className="width width-15">
                                        <div className="txt-site txt-blue txt-10 margin-left-10px margin-bottom-5px">
                                            <i className="txt-site txt-primary icn fa fa-clipboard-list" /> WO #283
                                            <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'teal', marginTop: 2, marginLeft: 5 }}></div>
                                        </div>
                                        <div className="txt-site txt-blue txt-10 margin-left-10px margin-bottom-5px">
                                            <i className="txt-site txt-primary icn fa fa-clipboard-list" /> WO #282
                                            <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'teal', marginTop: 2, marginLeft: 5 }}></div>
                                        </div>
                                    </div>
                                    <div className="width width-15">
                                        <div className="txt-site txt-extra-bold txt-10 margin-left-10px">Due</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cf-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Issues