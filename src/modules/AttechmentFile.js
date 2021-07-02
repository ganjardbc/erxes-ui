import React, { Component } from 'react'
import DNDFileUpload from './DNDFileUpload'

class AttechementFile extends Component {
    constructor () {
        super()
        this.state = {}
    }
    render () {
        return (
            <div className="card no-margin no-hover no-radius border-all">
                <div className="padding-15px display-flex space-between border-bottom" style={{paddingTop: 5, paddingBottom: 5}}>
                    <div>
                        <div className="post-top display-flex">
                            <div className="txt-site txt-main txt-10 txt-bold" style={{marginRight: 5}}>
                                Documents 
                            </div>
                            <div className="card-value grey">3</div>
                        </div>
                    </div>
                    <button className="btn btn-post btn-small">
                        <i className="icn icn-left fa fa-lw fa-plus" /> Add Document 
                    </button>
                </div>
                <div style={{paddingTop: 0, paddingBottom: 10}}>
                    <div className="padding-15px">
                        <DNDFileUpload />
                    </div>
                    <div className="padding-15px">
                        <div className="txt-site txt-10 txt-primary txt-center">No documents yet</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AttechementFile