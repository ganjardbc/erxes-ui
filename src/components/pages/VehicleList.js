import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'

class CardHeader extends Component {
    render () {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-40">
                    <div className="txt-site txt-10 txt-main txt-bold">Name</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Status</div>
                </div>
                <div className="width width-7">
                    <div className="txt-site txt-10 txt-main txt-bold">Type</div>
                </div>
                <div className="width width-13">
                    <div className="txt-site txt-10 txt-main txt-bold">Group</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Current Meter</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Operator</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-bold"></div>
                </div>
            </div>
        )
    }
}

class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-40">
                    <div className="display-flex">
                        <div style={{width: 50, marginRight: 15}}>
                            <div className="image image-50px image-radius background-blue" style={{overflow: 'hidden'}}>
                                <img style={{height: '100%', width: 'auto'}} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{width: 'calc(100% - 65px)'}}>
                            <div className="txt-site txt-12 txt-main txt-bold" style={{marginBottom: 8}}>123RWN</div>
                            <div className="txt-site txt-9 txt-primary" style={{marginBottom: 4}}>2011 Toyota Hilux</div>
                            <div className="display-flex" style={{marginBottom: 4}}>
                                <div className="txt-site txt-9 txt-primary" style={{marginRight: 5}}>VIN/SN:</div>
                                <div className="txt-site txt-9 txt-main">MR0CX3342312312FD</div>
                            </div>
                            <div className="display-flex">
                                <div className="txt-site txt-9 txt-primary" style={{marginRight: 5}}>License Plate:</div>
                                <div className="txt-site txt-9 txt-main">123RWN</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="display-flex">
                        <div>
                            <div className="post-top background-green" style={{width: 13, height: 13, borderRadius: '100%', marginRight: 5}}></div>
                        </div>
                        <div className="txt-site txt-10 txt-main txt-bold">Active</div>
                    </div>
                </div>
                <div className="width width-7">
                    <div className="txt-site txt-10 txt-main txt-bold">UTE</div>
                </div>
                <div className="width width-13">
                    <div className="txt-site txt-10 txt-main txt-bold">Law Enforcement</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>28,800 mi</div>
                    <div className="txt-site txt-9 txt-primary">3 days ago</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Allie Hudson</div>
                </div>
                <div className="width width-5">
                    <button className="btn btn-small btn-grey" style={{height: 20}}>
                        <i className="fa fa-lw fa-ellipsis-v" />
                    </button>
                </div>
            </div>
        )
    }
}

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'All' },
                { status: '', title: 'Assigned' },
                { status: '', title: 'Unassigned' },
                { status: '', title: 'Archived' },
            ]
        }
    }

    opNavigator = (e, isNumber = false) => {
        const id = isNumber ? e : Number(e.currentTarget.dataset.id)
        const { navigator } = this.state
        let nav = navigator.map((data, index) => {
            return { ...data, status: id === index ? 'active' : '' }
        })
        this.setState({ navigator: nav })
    }

    render () {
        const {navigator} = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px display-flex space-between background-white border-bottom">
                    <div className="width width-70">
                        <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Vehicle List</div>
                    </div>
                    <div className="width width-30 display-flex right">
                        <button className="btn btn-sekunder">
                            <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                        </button>
                        <button className="btn btn-green" style={{marginLeft: 10}}>
                            <i className="icn icn-left fa fa-lw fa-plus" /> Add Vehicle
                        </button>
                    </div>
                </div>

                <div className="padding-15px">
                    <div style={{width: '100%'}}>
                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-9'} onClick={(id) => this.opNavigator(id)} />
                    </div>

                    <div className="display-flex border-bottom" style={{width: '100%', paddingTop: 15, paddingBottom: 15}}>
                        <input 
                            type="text" 
                            className="txt txt-sekunder-color"
                            placeholder="Search names, VINs, and Code"
                            style={{width: 200, marginRight: 10}}
                            // value={}
                            // onChange={}
                            required />
                        <input 
                            type="text" 
                            className="txt txt-sekunder-color"
                            placeholder="Filter vehicle types"
                            style={{width: 200, marginRight: 10}}
                            // value={}
                            // onChange={}
                            required />
                        <input 
                            type="text" 
                            className="txt txt-sekunder-color"
                            placeholder="Filter statuses"
                            style={{width: 200, marginRight: 10}}
                            // value={}
                            // onChange={}
                            required />
                        <button className="btn btn-sekunder" style={{marginRight: 10}}>
                            <i className="icn icn-left fa fa-lw fa-sliders-h" /> Actions
                        </button>
                        <button className="btn btn-blue" style={{marginRight: 15}}>
                            <i className="icn icn-left fa fa-lw fa-search" /> Search 
                        </button>
                        <div>
                            <div className="post-top txt-site txt-10 txt-main">0 filters applied</div>
                        </div>
                    </div>

                    <div className="display-flex space-between" style={{width: '100%', paddingTop: 15, paddingBottom: 15}}>
                        <div className="width width-50 display-flex">
                            <div style={{marginRight: 15}}>
                                <div className="post-top txt-site txt-10 txt-main">0 selected:</div>
                            </div>
                            <button className="btn btn-small btn-sekunder" style={{marginRight: 5}}>
                                Updates <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <button className="btn btn-small btn-icn btn-sekunder" style={{marginRight: 5}}>
                                <i className="icn fa fa-lw fa-archive" />
                            </button>
                            <button className="btn btn-small btn-sekunder" style={{marginRight: 5}}>
                                <i className="icn icn-left fa fa-lw fa-print" /> Print Labels
                            </button>
                        </div>
                        <div className="width width-50 display-flex right">
                            <button className="btn btn-small btn-sekunder">
                                Sort: Name (alphabetic) <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <div style={{marginRight: 15, marginLeft: 15}}>
                                <div className="post-top txt-site txt-10 txt-main">1 - 50 of 83</div>
                            </div>
                            <div className="display-flex">
                                <button className="btn btn-small btn-icn btn-sekunder">
                                    <i className="icn fa fa-lw fa-chevron-left" />
                                </button>
                                <button className="btn btn-small btn-icn btn-sekunder">
                                    <i className="icn fa fa-lw fa-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card no-margin no-hover no-radius border-all">
                        <div>
                            <div className="border-bottom">
                                <CardHeader />
                            </div>
                            <div className="border-bottom">
                                <CardVehicle />
                            </div>
                            <div className="border-bottom">
                                <CardVehicle />
                            </div>
                            <div className="border-bottom">
                                <CardVehicle />
                            </div>
                            <div>
                                <CardVehicle />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Pages