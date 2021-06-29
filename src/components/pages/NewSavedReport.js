import React, { Component } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

class NewSavedReport extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="main-content" style={{ width: '460px' }}>
                <div className="padding-5px">
                    <form>
                        <div className="grid grid-2x-colmin5 grid-mobile-none gap-15px">
                            <div className="card-form margin-bottom-15px">
                                <div className="cf-header">
                                    <div className="cf-title">
                                        New Saved Report <span className="cf-subtitle">
                                            - Operating Cost Summary
                                        </span>
                                    </div>

                                </div>
                                <div className="cf-body">
                                    <div className="cf-field">
                                        <div className="grid grid-2x-col8 grid-mobile-none gap-15px">
                                            <div className="col-1 content-right">
                                                <label className="cf-label">Name</label><label className="cf-important">*</label>
                                            </div>
                                            <div className="col-2">
                                                <input type="text" className="cf-input txt txt-sekunder" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-field">
                                        <div className="grid grid-2x-col8 grid-mobile-none gap-15px">
                                            <div className="col-1 content-right">
                                                <label className="cf-label">Description</label><label className="cf-important">*</label>
                                            </div>
                                            <div className="col-2">
                                                <textarea type="text" className="cf-input txt txt-sekunder" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-field">
                                        <div className="grid grid-2x-col8 grid-mobile-none gap-15px">
                                            <div className="col-1 content-right">
                                                <label className="cf-label">Visibility</label> <i className="fa fa-xs fa-info-circle"></i>
                                            </div>
                                            <div className="col-2">
                                                <div>
                                                    <input type="radio" id="public" name="public" value="Public" />
                                                    <label for="public"> Public</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="private" name="private" value="Private" />
                                                    <label for="private"> Private</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-field">
                                        <div className="grid grid-2x-col8 grid-mobile-none gap-15px">
                                            <div className="col-1 content-right">
                                                <label className="cf-label">Email Schedule</label> <i className="fa fa-xs fa-info-circle"></i>
                                            </div>
                                            <div className="col-2">
                                                <button type="button" className="btn btn-blue">
                                                    ON
                                                </button>
                                                <button type="button" className="btn btn-secondary">
                                                    OFF
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-field">
                                        <div className="grid grid-2x-col8 grid-mobile-none gap-15px">
                                            <div className="col-1 content-right">
                                                <label className="cf-label">Recipients</label><label className="cf-important">*</label>
                                            </div>
                                            <div className="col-2">
                                                <Multiselect
                                                    options={[{ name: 'Calmen Dennis', id: 1 }, { name: 'Allie Hudson', id: 2 }]}
                                                    style={{
                                                        multiselectContainer: {
                                                            fontFamily: "FontFirst2, Helvetica Neue, Helvetica, Arial, sans-serif"
                                                        }
                                                    }}
                                                    displayValue="name" // Property name to display in the dropdown options
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="padding-left-20px border-all" style={{ width: '460px' }}>
                                        <div className="cf-field">
                                            <label className="cf-label padding-right-20px">Frequency</label>
                                            <select className="cf-input slc slc-sekunder" style={{ width: '300px' }}>
                                                <option value="1">Select an option</option>
                                                <option value="1">opsi kategori</option>
                                                <option value="1">opsi kategori</option>
                                                <option value="1">opsi kategori</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="cf-footer">
                                    <div className="padding-bottom-20px border-bottom"></div>
                                    <div className="grid grid-2x grid-mobile-none gap-15px">
                                        <div className="col-1 padding-top-10px">
                                            <button type="button" className="btn btn-no-color">Cancel</button>
                                        </div>
                                        <div className="col-2 content-right padding-top-10px">
                                            <button type="button" className="btn btn-no-color margin-right-10px">Send Test Email <i className="fa fa-xs fa-info-circle"></i></button>
                                            <button type="button" className="btn btn-blue">Save</button>
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
export default NewSavedReport