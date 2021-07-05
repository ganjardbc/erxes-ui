import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'

class CardInspections extends Component {
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
                        <div key={i} style={{padding: '10px 0', width: 'calc(100% / 4)'}}>
                            <div style={{margin: '0 10px'}}>
                                <div className="card no-margin no-radius border-all">
                                    <div className="padding-15px display-flex space-between">
                                        <div className="display-flex" style={{width: 'calc(100% - 35px)'}}>
                                            {dt.status && (
                                                <div style={{paddingTop: 4, paddingRight: 5}}>
                                                    <i className="fa fa-lw fa-circle" style={{color: dt.status === 'wip' ? 'orange' : 'green'}} />
                                                </div>
                                            )}
                                            <div className="txt-site txt-16 txt-main txt-bold" style={{paddingTop: 2}}>{ dt.title }</div>
                                        </div>
                                        <div style={{width: 35}}>
                                            <button className="btn btn-small-circle btn-grey">
                                                <i className="fa fa-lw fa-ellipsis-v" />
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: 15, paddingRight: 15}}>
                                        <div className="txt-site txt-10 txt-primary">{ dt.description }</div>
                                    </div>
                                    <div className="padding-15px">
                                        {dt.data && dt.data.map((sb, j) => {
                                            return (
                                                <div key={j} className={"padding-10px display-flex space-between " + (j !== (dt.data.length - 1) ? 'border-bottom' : '')}>
                                                    <div>
                                                        <div className="post-top txt-site txt-11 txt-main txt-bold">
                                                            { sb.key }
                                                        </div>
                                                    </div>
                                                    <div className={"card-value " + (sb.status === 'todo' ? 'grey' : 'orange')}>
                                                        { sb.value }
                                                    </div>
                                                </div>
                                            )
                                        })}
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

class CardInspectionHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const data = [
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/c27a7801fb34152ba075916eca99f4ccceabdee8/7e558/assets/images/homepage/capterra.svg', 
                title: 'Bit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                data: [
                    {key: 'Items', value: 67, status: 'todo'},
                    {key: 'Vehicles', value: 1, status: 'todo'},
                    {key: 'Workflows', value: 0, status: 'wip'},
                    {key: 'Submissions', value: 0, status: 'wip'}
                ]
            },
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/c27a7801fb34152ba075916eca99f4ccceabdee8/7e558/assets/images/homepage/capterra.svg', 
                title: 'Cargo - DVIR',
                description: 'REQUIRED BY ALL DRIVERS AFTER TRIP',
                status: 'wip',
                data: [
                    {key: 'Items', value: 23, status: 'todo'},
                    {key: 'Vehicles', value: 0, status: 'wip'},
                    {key: 'Workflows', value: 0, status: 'wip'},
                    {key: 'Submissions', value: 0, status: 'wip'}
                ]
            },
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/c27a7801fb34152ba075916eca99f4ccceabdee8/7e558/assets/images/homepage/capterra.svg', 
                title: 'Daily Pre Check Inspection',
                data: [
                    {key: 'Items', value: 0, status: 'wip'},
                    {key: 'Vehicles', value: 0, status: 'wip'},
                    {key: 'Workflows', value: 0, status: 'wip'},
                    {key: 'Submissions', value: 0, status: 'wip'}
                ]
            },
            {
                cover: 'https://d33wubrfki0l68.cloudfront.net/c27a7801fb34152ba075916eca99f4ccceabdee8/7e558/assets/images/homepage/capterra.svg', 
                title: 'Daily Vehicle Inspection',
                description: 'This inspection should be performed prior to any vehicle leaving the shop',
                status: 'done',
                data: [
                    {key: 'Items', value: 15, status: 'todo'},
                    {key: 'Vehicles', value: 58, status: 'todo'},
                    {key: 'Workflows', value: 1, status: 'todo'},
                    {key: 'Submissions', value: 1108, status: 'todo'}
                ]
            }
            
        ]
        return (
            <div className="padding-15px">
                <CardInspections data={data} />
            </div>
        )
    }
}

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'Active' },
                { status: '', title: 'Archived' }
            ],
            bars: [
                { status: '', title: 'Inspection History' },
                { status: '', title: 'Item Failures' },
                { status: '', title: 'Schedules' },
                { status: 'active', title: 'Forms' }
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
        const {navigator, bars} = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div style={{ width: '100%', paddingBottom: 15 }}>
                        <TabBar enableScroll={false} isSmall={true} data={bars} theme={'theme-2'} onClick={(id) => console.log(id)} />
                    </div>
                    <div className="display-flex space-between">
                        <div className="width width-30">
                            <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Inspection Form</div>
                        </div>
                        <div className="width width-70 display-flex right">
                            <button className="btn btn-sekunder">
                                <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                            </button>
                            <button className="btn btn-green" style={{marginLeft: 10}}>
                                <i className="icn icn-left fa fa-lw fa-plus" /> Add Inspection Form
                            </button>
                        </div>
                    </div> 
                </div>

                <div className="padding-15px" style={{paddingBottom: 0}}>
                    <div className="display-flex space-between" style={{ width: '100%' }}>
                        <div className="width width-50 display-flex">
                            <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-9'} onClick={(id) => this.opNavigator(id)} />
                        </div>
                        <div className="width width-50 display-flex right">
                            <button className="btn btn-small btn-sekunder">
                                Sort: Title <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <div style={{ marginRight: 15, marginLeft: 15 }}>
                                <div className="post-top txt-site txt-10 txt-main">1 - 50 of 54</div>
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
                </div>

                <CardInspectionHistory />

            </div>
        )
    }
}

export default Pages