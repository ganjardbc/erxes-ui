import React, { Component } from 'react'

class ShareReport extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="main-content">
                <div className="padding-5px">
                    <form>
                        <div className="grid grid-2x-colmin5 grid-mobile-none gap-15px">
                            <div className="card-form margin-bottom-15px" style={{ width: '720px' }}>
                                <div className="cf-header">
                                    <div className="cf-title">
                                        Share Report
                                    </div>

                                </div>
                                <div className="cf-body">
                                    <div className="cf-field">
                                        <label className="cf-label">Use the following link to share report:</label>
                                        <div>
                                            <button type="button" className="btn btn-no-color"> <i className="fa fa-link"></i> </button>
                                            <input style={{ width: '76%' }} type="text" className="cf-input txt txt-sekunder" required />
                                            <button type="button" className="btn btn-green"> Copy Link </button>
                                        </div>
                                        <div className="cf-subtitle">
                                            Link expires in 7 days
                                        </div>
                                    </div>
                                    <div className="cf-field">
                                        <div className="card" style={{ borderLeft: '3p0x', borderLeftColor: 'orange' }}>
                                            <div className="card-pad">
                                                Be careful, this link allows anyone with access to view all data within the currently selected columns and filter parameters.
                                                If you didn't mean to do this, click this to unshare.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cf-footer">
                                    <div className="padding-bottom-20px"></div>
                                    <div className="grid grid-2x grid-mobile-none gap-15px">
                                        <div className="col-1 padding-top-10px">
                                        </div>
                                        <div className="col-2 content-right padding-top-10px">
                                            <button type="button" className="btn btn-blue">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default ShareReport