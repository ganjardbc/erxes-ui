import React, { Component } from 'react'

class CardIntegration extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const {data} = this.props
        return (
            <div className="display-flex wrap">
                {data && data.map((dt, i) => {
                    return (
                        <div key={i} style={{padding: '10px 0', width: 'calc(100% / 3)'}}>
                            <div style={{margin: '0 10px'}}>
                                <div className="card no-margin no-radius border-all">
                                    <div className="display-flex space-between">
                                        <div></div>
                                        <div>
                                            <button className="btn btn-small-circle btn-grey">
                                                <i className="fa fa-lw fa-ellipsis-v" />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-bottom" style={{paddingLeft: 15, paddingRight: 15}}>
                                            <div className="image image-middle">
                                                <img className="img" src={dt.cover} alt="" />
                                            </div>
                                        </div>
                                        <div className="display-flex space-between" style={{paddingTop: 20, paddingBottom: 15}}>
                                            <div className="width width-50">
                                                <div className="txt-site txt-center txt-10 txt-main txt-bold">Total Devices</div>
                                                <div className="txt-site txt-center txt-18 txt-bold txt-blue" style={{marginTop: 5}}>{ dt.totalDevice }</div>
                                            </div>
                                            <div className="width width-50">
                                                <div className="txt-site txt-center txt-10 txt-main txt-bold">Mapped Devices</div>
                                                <div className="txt-site txt-center txt-18 txt-bold txt-blue" style={{marginTop: 5}}>{ dt.mappedDevice }</div>
                                            </div>
                                        </div>
                                        <div className="padding-15px" style={{textAlign: 'center', paddingBottom: 30}}>
                                            <button className="btn btn-main" style={{margin: 'auto'}}>
                                                Manage Devices 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    )
                })}
            </div>
        )
    }
}

class CardIntegrationHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const data = [
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/c27a7801fb34152ba075916eca99f4ccceabdee8/7e558/assets/images/homepage/capterra.svg', totalDevice: 21, mappedDevice: 150, 
                data: [
                    {value: '6777667668', status: 'awaiting', owner: 'Added by Michael Harrison 9', signature: 'months ago'}
                ]
            },
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/1546e086cafc7bba387126cf4a727bb4949e555e/637c2/assets/images/homepage/software-advice.svg', totalDevice: 3, mappedDevice: 45, 
                data: [
                    {value: '6777667668', status: 'awaiting', owner: 'Added by Michael Harrison 9', signature: 'months ago'}
                ]
            },
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/4551cdca4938126a7fbcd56b7670997d64a9b36d/727fc/assets/images/homepage/getapp.svg', totalDevice: 54, mappedDevice: 4, 
                data: [
                    {value: '6777667668', status: 'awaiting', owner: 'Added by Michael Harrison 9', signature: 'months ago'},
                    {value: '6777667668', status: 'awaiting', owner: 'Added by Michael Harrison 9', signature: 'months ago'}
                ]
            },
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/c27a7801fb34152ba075916eca99f4ccceabdee8/7e558/assets/images/homepage/capterra.svg', totalDevice: 21, mappedDevice: 150, 
                data: []
            },
        ]
        return (
            <div className="padding-15px">
                <CardIntegration data={data} />
            </div>
        )
    }
}

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div className="display-flex space-between">
                        <div className="width width-30">
                            <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">GPS Integrations</div>
                        </div>
                        <div className="width width-70 display-flex right">
                            <button className="btn btn-green" style={{marginLeft: 10}}>
                                Add GPS Integration <i className="icn fa fa-lw fa-caret-down" />
                            </button>
                        </div>
                    </div> 
                </div>

                <CardIntegrationHistory />

            </div>
        )
    }
}

export default Pages