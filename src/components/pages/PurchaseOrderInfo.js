import { Badge } from '@material-ui/core'
import React, { Component, createRef } from 'react'
import Dropzone from 'react-dropzone'

const dropzoneRef = createRef()

class PurchaseOrderInfo extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        let items = ['x']
        return (
            <div className="main-content">
                <div className="padding-5px">
                    <form>
                        <div className="card-form margin-bottom-15px">
                            <div className="cf-header">
                                <div className="grid grid-2x grid-mobile-none gap-15px">
                                    <div className="column-1">
                                        <div className="width width-100">
                                            <div className="cf-title display-flex" style={{ margin: 'auto' }}>
                                                <div className="txt-site txt-blue margin-right-10px">
                                                    {`Purchase Orders / Approve /`}
                                                </div>
                                                <div className="txt-site">Purchase Orders #12</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column-2 content-right">
                                        <div className="width display-flex right">
                                            <button className="btn btn-sekunder margin-right-10px">
                                                <i className="icn fa fa-lw fa-print" /> Print
                                            </button>
                                            <button type="button" className="btn btn-blue">
                                                Edit Purchase Order
                                                <i style={{ marginLeft: 10, fontWeight: "bold" }} className="icn icn-right fa fa-lw fa-chevron-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-2x-colmin7 grid-mobile-none gap-15px">
                            <div className="column-1">
                                <div className="card-form margin-bottom-15px display-flex">
                                    <div className="width width-40">
                                        <div className="cf-header">
                                            <div className="display-flex width width-100">
                                                <div className="cf-title display-flex width width-50">
                                                    Current Status
                                                </div>
                                                <div className="cf-subtitle display-flex right width width-50">
                                                    Last updated <label className="margin-left-10px txt-site txt-underline">14 days ago</label>
                                                </div>
                                            </div>
                                            <div className="padding-10px"></div>
                                            <div className="padding-20px" style={{ backgroundColor: '#99FF99', margin: 'auto', textAlign: 'center' }}>
                                                <div className="txt-site txt-18 txt-green txt-bold">APPROVED</div>
                                            </div>
                                        </div>
                                        <div className="cf-body">
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px border-bottom">
                                                <div className="display-flex width width-40 txt-site txt-bold txt-11">
                                                    Description
                                                </div>
                                                <div className="display-flex width width-60 txt-site txt-bold txt-11">
                                                    Not Set
                                                </div>
                                            </div>
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-bottom">
                                                <div className="display-flex width width-40">
                                                    <div className="width width-100">
                                                        <i className="icn fa fa-xs fa-tag margin-right-10px"></i>
                                                        <label className="txt-site txt-bold txt-11">Labels</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex width width-60">
                                                    <label className="txt-site txt-blue txt-11">Edit Lables</label>
                                                </div>
                                            </div>
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-bottom">
                                                <div className="display-flex width width-40">
                                                    <div className="width width-100">
                                                        <i className="icn fa fa-xs fa-map-marker-alt margin-right-10px"></i>
                                                        <label className="txt-site txt-bold txt-11">Part Location</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex width width-60">
                                                    <label className="txt-site txt-extra-bold txt-11">Maintenance HQ</label>
                                                </div>
                                            </div>
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-bottom">
                                                <div className="display-flex width width-40">
                                                    <div className="width width-100">
                                                        <i className="icn fa fa-xs fa-store margin-right-10px"></i>
                                                        <label className="txt-site txt-bold txt-11">Vendor</label>
                                                    </div>
                                                </div>
                                                <div className="display-flex width width-60">
                                                    <label className="txt-site txt-blue txt-11">Autozone</label>
                                                </div>
                                            </div>
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-bottom">
                                                <div className="display-flex width width-40 txt-site txt-bold txt-11">
                                                    Created By
                                                </div>
                                                <div className="width width-60">
                                                    <div className="txt-site txt-extra-bold txt-11">Matthew Holand</div>
                                                    <label className="txt-site txt-underline txt-11">14 days ago</label>
                                                </div>
                                            </div>
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-bottom">
                                                <div className="display-flex width width-40 txt-site txt-bold txt-11">
                                                    Approved By
                                                </div>
                                                <div className="width width-60">
                                                    <div className="txt-site txt-extra-bold txt-11">Matthew Holand</div>
                                                    <label className="txt-site txt-underline txt-11">14 days ago</label>
                                                </div>
                                            </div>
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-bottom">
                                                <div className="display-flex width width-40 txt-site txt-bold txt-11">
                                                    Invoice #
                                                </div>
                                                <div className="display-flex width width-60 txt-site txt-bold txt-11">
                                                </div>
                                            </div>
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-bottom">
                                                <div className="display-flex width width-40 txt-site txt-bold txt-11">
                                                    Blanket PO Number
                                                </div>
                                                <div className="display-flex width width-60 txt-site txt-bold txt-11">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="width width-60">
                                        <div className="cf-header">
                                            <div className="display-flex width width-100 padding-left-20px padding-bottom-10px border-bottom">
                                                <div className="display-flex width width-40 txt-site txt-extra-bold txt-10">
                                                    Item
                                                </div>
                                                <div className="width width-20">
                                                    <div className="txt-site txt-center txt-extra-bold txt-10">Order</div>
                                                    <div className="txt-site txt-center txt-extra-bold txt-10">Quantity</div>
                                                </div>
                                                <div className="width width-20">
                                                    <div className="txt-site txt-right txt-extra-bold txt-10">Line Item Unit</div>
                                                    <div className="txt-site txt-right txt-extra-bold txt-10">Cost</div>
                                                </div>
                                                <div className="display-flex center width width-20 txt-site txt-extra-bold txt-10">
                                                    Subtotal
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cf-body">
                                            {items.map(() => {
                                                return (
                                                    <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-5px border-bottom">
                                                        <div className="width width-40">
                                                            <div className="txt-site txt-extra-bold txt-blue txt-9 margin-bottom-5px">26A Icon</div>
                                                            <div className="txt-site txt-7">26" Wiper Blade (Pack of 1)</div>
                                                        </div>
                                                        <div className="width width-20">
                                                            <div className="txt-site txt-center txt-bold txt-9">23<label className="txt-site txt-center txt-9">ea</label></div>
                                                        </div>
                                                        <div className="width width-20">
                                                            <div className="txt-site txt-right txt-extra-bold txt-10">{`$22.24`}</div>
                                                        </div>
                                                        <div className="width width-20">
                                                            <div className="txt-site txt-center txt-extra-bold txt-10">{`$511.52`}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className="grid grid-2x grid-mobile-none gap-15px border-bottom">
                                                <div className="column-1"></div>
                                                <div className="column-2">
                                                    <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px">
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-left txt-bold txt-9 margin-bottom-5px">Parts</div>
                                                        </div>
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-right txt-extra-bold txt-9">{`$511.52`}</div>
                                                        </div>
                                                    </div>
                                                    <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-5px">
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-left txt-bold txt-9 margin-bottom-5px">Shipping</div>
                                                        </div>
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-right txt-extra-bold txt-9">{`$0.00`}</div>
                                                        </div>
                                                    </div>
                                                    <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-5px">
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-left txt-bold txt-9 margin-bottom-5px">Discount</div>
                                                        </div>
                                                        <div className="display-flex right width width-50">
                                                            <div style={{ opacity: 0.5 }} className="txt-site txt-right txt-grey txt-9 margin-right-5px">{`(0.0%)`}</div>
                                                            <div className="txt-site txt-right txt-extra-bold txt-9">{`- $0.00`}</div>
                                                        </div>
                                                    </div>
                                                    <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-5px">
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-left txt-bold txt-9 margin-bottom-5px">Tax</div>
                                                        </div>
                                                        <div className="display-flex right width width-50">
                                                            <div style={{ opacity: 0.5 }} className="txt-site txt-right txt-grey txt-9 margin-right-5px">{`(%)`}</div>
                                                            <div className="txt-site txt-right txt-extra-bold txt-9">{`$0.00`}</div>
                                                        </div>
                                                    </div>
                                                    <div className="display-flex width width-100 padding-left-20px padding-bottom-10px padding-top-10px border-top">
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-left txt-extra-bold txt-9 margin-bottom-5px">Total</div>
                                                        </div>
                                                        <div className="width width-50">
                                                            <div className="txt-site txt-right txt-extra-bold txt-18">{`$511.52`}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-2x grid-mobile-none gap-15px">
                                                <div className="column-1"></div>
                                                <div className="column-2 content-right">
                                                    <div className="width width-100 padding-left-20px padding-bottom-10px padding-top-10px">
                                                        <button type='button' className="btn btn-blue">Mark Purchased</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="column-2">
                                <div className="card-form margin-bottom-15px">
                                    <div className="cf-header border-bottom">
                                        <div className="display-flex width width-100">
                                            <div className="width width-50">
                                                <div className="cf-title">
                                                    Documents <Badge className="margin-left-10px" badgeContent={0} color="primary" showZero></Badge>
                                                </div>
                                            </div>
                                            <div className="display-flex right width width-50">
                                                <div style={{ cursor: 'pointer' }} className="cf-subtitle">
                                                    + Add Document
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="cf-body">
                                        <div className="padding-20px">
                                            <Dropzone ref={dropzoneRef}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <div>
                                                        <div style={{ height: 100, borderStyle: 'dashed', borderWidth: 1, textAlign: 'center' }}>
                                                            <div {...getRootProps()} className="padding-10px" style={{ cursor: 'pointer' }}>
                                                                <input {...getInputProps()} />
                                                                <div className="display-flex center width width-100">
                                                                    <div style={{ margin: 'auto', paddingRight: 10 }} className="width width-20">
                                                                        <h4 className="txt-site txt-right txt-main txt-12">
                                                                            <i className="icn icn-right fa fa-cloud-upload-alt"></i>
                                                                        </h4>
                                                                    </div>
                                                                    <div style={{ margin: 'auto' }} className="width width-80">
                                                                        <h4 className="txt-site txt-main txt-10 "> Drop files here to upload</h4>
                                                                        <h4 style={{ color: 'lightgray' }} className="txt-site txt-main txt-10 "> or click to pick files</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>
                                        </div>
                                        <h5 style={{ textAlign: 'center', opacity: 0.5, padding: 20 }}>No document yet</h5>
                                    </div>
                                    <div className="cf-footer"></div>
                                </div>

                                <div className="card-form margin-bottom-15px">
                                    <div className="cf-header border-bottom">
                                        <div className="display-flex width width-100">
                                            <div className="width width-50">
                                                <div className="cf-title">
                                                    Comments <Badge className="margin-left-10px" badgeContent={0} color="primary" showZero></Badge>
                                                </div>
                                            </div>
                                            <div className="display-flex right width width-50">
                                                <div style={{ cursor: 'pointer' }} className="cf-subtitle">
                                                    + Add Comments
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="cf-body">
                                        <h5 style={{ textAlign: 'center', opacity: 0.5, padding: 20 }}>No comments yet</h5>
                                    </div>
                                    <div className="cf-footer"></div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default PurchaseOrderInfo