import React, { Component, createRef } from 'react'
import Dropzone from 'react-dropzone'

const dropzoneRef = createRef()

class ImportFile extends Component {
    constructor () {
        super()
        this.state = {}
    }
    render () {
        return (
                <Dropzone ref={dropzoneRef}>
                    {({ getRootProps, getInputProps }) => (
                        <div>
                            <input {...getInputProps()} />
                            <div className="display-flex">
                                <div {...getRootProps()} style={{cursor: 'pointer', marginRight: 10}}>
                                    <button className="btn btn-green">
                                        Pick File 
                                    </button>
                                </div>
                                <div>
                                    <div className="btn btn-div btn-sekunder btn-dashed" style={{cursor: 'default'}}>
                                        Or drop files here 
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Dropzone>
        )
    }
}

export default ImportFile