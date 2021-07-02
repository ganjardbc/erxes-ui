import React, { Component, createRef } from 'react'
import Dropzone from 'react-dropzone'

const dropzoneRef = createRef()
class DNDFileUpload extends Component {
    constructor () {
        super()
        this.state = {}
    }
    render () {
        return (
            <Dropzone ref={dropzoneRef}>
                {({ getRootProps, getInputProps }) => (
                    <div className="card no-margin no-hover" style={{border: '2px #999 dashed'}}>
                        <div style={{ height: 100, textAlign: 'center' }}>
                            <div {...getRootProps()} className="padding-10px" style={{ cursor: 'pointer' }}>
                                <input {...getInputProps()} />
                                <div className="display-flex width width-80" style={{ margin: 'auto' }}>
                                    <div style={{ height: 80 }} className="width width-40">
                                        <div className="post-top">
                                            <i className="txt-site txt-right txt-primary txt-24 fa fa-cloud-upload-alt"></i>
                                        </div>
                                    </div>
                                    <div style={{ height: 80, textAlign: 'left' }} className="width width-60">
                                        <div className="post-top">
                                            <div className="txt-site txt-main txt-12 txt-bold" style={{marginBottom: 5}}> Drop files here to upload</div>
                                            <div className="txt-site txt-primary txt-10 "> or click to pick files</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Dropzone>
        )
    }
}

export default DNDFileUpload