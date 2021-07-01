import { Badge } from '@material-ui/core'
import React, { Component, createRef } from 'react'
import Dropzone from 'react-dropzone'

const dropzoneRef = createRef()
class AttachmentFile extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div className="main-content">
                <div className="padding-5px">
                    <h1>Attachment</h1>
                    <form className="width width-50">
                        <div className="card-form margin-bottom-15px">
                            <div className="cf-header border-bottom">
                                <div className="display-flex width width-100">
                                    <div className="width width-50">
                                        <div className="cf-title">
                                            Photos <Badge className="margin-left-10px" badgeContent={0} color="primary" showZero></Badge>
                                        </div>
                                    </div>
                                    <div className="display-flex right width width-50">
                                        <div style={{ cursor: 'pointer' }} className="cf-subtitle">
                                            + Add Photo
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
                                <h5 style={{ textAlign: 'center', opacity: 0.5, padding: 20 }}>No photo yet</h5>
                            </div>
                            <div className="cf-footer"></div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
} export default AttachmentFile