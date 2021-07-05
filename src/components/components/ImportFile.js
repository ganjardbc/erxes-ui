import React, { Component } from 'react'
import ImportFileComponent from '../../modules/ImportFile'

class ImportFile extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div className="main-content">
                <div className="padding-5px">
                    <h1>Import File</h1>
                    <div style={{paddingTop: 20}}>
                        <div className="card no-margin no-padding no-hover no-radius border-all">
                            <div className="padding-15px display-flex">
                                <div style={{width: 'calc(50% - 7px)', marginRight: 7}}>
                                    <div className="card-form">
                                        <div className="cf-field">
                                            <label className="cf-label">File</label><label className="cf-important">*</label>
                                            <div style={{marginTop: 10}}>
                                                <ImportFileComponent />
                                            </div>
                                        </div>
                                        <div className="cf-subtitle">
                                            Choose a CSV file or other delimited text file (such as tab-delimited file) with data to import into Fleetio.
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 'calc(50% - 7px)', marginLeft: 7}}>
                                    <div className="card-form">
                                        <div className="cf-field">
                                            <label className="cf-label">Type</label><label className="cf-important">*</label>
                                            <select className="cf-input slc slc-sekunder">
                                                <option value="1">option type</option>
                                                <option value="1">option type</option>
                                                <option value="1">option type</option>
                                                <option value="1">option type</option>
                                            </select>
                                        </div>

                                        <div className="cf-field">
                                            <label className="cf-label">Delimeter</label>
                                            <select className="cf-input slc slc-sekunder">
                                                <option value="1">comma CSV</option>
                                                <option value="1">comma CSV</option>
                                                <option value="1">comma CSV</option>
                                                <option value="1">comma CSV</option>
                                            </select>
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
} export default ImportFile