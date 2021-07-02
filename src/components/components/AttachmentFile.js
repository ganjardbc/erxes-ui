import React, { Component } from 'react'
import AttechementFile from '../../modules/AttechmentFile'

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
                    <div style={{width: 500, paddingTop: 20}}>
                        <AttechementFile />
                    </div>
                </div>
            </div>

        )
    }
} export default AttachmentFile