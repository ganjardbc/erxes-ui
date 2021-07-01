import React, { Component } from 'react'
import MenuBar from '../../modules/MenuBar'
import TabBar from '../../modules/TabBar'
import CardCount from '../../modules/CardCount'
import CardVehicle from '../../modules/CardVehicle'
import Dots from '../../modules/Dots'
import CardLineChart from './FELineChart'
import CardSimpleLineChart from './FESimpleLineChart'

class CardDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const dataCount = [
            {title: 'Avg. MPG (US)', value: '64.02'},
            {title: 'Avg. Fuel Cost/Mile', value: '$0.04'},
            {title: 'Total Gallons', value: '1356.3'},
            {title: 'Total Fuel Cost', value: '$3,168.55'}
        ]
        return (
            <div className="card no-margin no-hover no-radius border-all">
                <div className="border-bottom">
                    <div className="padding-20px">
                        <CardCount data={dataCount} />
                    </div>
                </div>
                <div className="padding-20px">
                    <CardLineChart />
                </div>
            </div>
        )
    }
}

class CardOverView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'Details' },
                { status: '', title: 'Specs' },
                { status: '', title: 'Engine & Transmission' },
                { status: '', title: 'Wheels & Tires' },
                { status: '', title: 'Fluids' },
                { status: '', title: 'Purchase' },
                { status: '', title: 'Loan/Lease' }
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
        const { navigator } = this.state
        const dataCount = [
            {title: 'Total Cost/Miel', value: '$0.26'},
            {title: 'MPG (US)', value: '64.02'},
            {title: 'Total Cost', value: '$25,456.79'},
            {title: 'Service Cost', value: '$17,501.44'},
            {title: 'Fuel Cost', value: '$3,5168.55'},
            {title: 'Other Cost', value: '$4,768.80'},
            {title: 'Miles/Day', value: '$58.3'}
        ]
        return (
            <div>
                <div style={{width: '100%', paddingBottom: 15}}>
                    <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-2'} onClick={(id) => this.opNavigator(id)} />
                </div>
                <div className="display-flex">
                    <div style={{position: 'relative', width: 'calc(100% - 8px)', marginRight: 8}}>
                        <div className="card no-margin no-hover no-radius border-all">
                            <div className="padding-15px">
                                <CardCount data={dataCount} rows={'3'} isReverse={true} />
                            </div>
                            <div className="padding-15px" style={{width: '90%'}}>
                                <CardSimpleLineChart />
                            </div>
                        </div>
                    </div>
                    <div style={{position: 'relative', width: 'calc(100% - 8px)', marginLeft: 8}}>
                        <div className="card no-margin no-hover no-radius border-all" style={{marginBottom: 15}}>
                            <div className="padding-15px display-flex space-between border-bottom" style={{paddingTop: 4, paddingBottom: 4}}>
                                <div>
                                    <div className="post-top txt-site txt-main txt-10 txt-bold">
                                        Open Issues
                                    </div>
                                </div>
                                <button className="btn btn-sekunder btn-small">
                                    <i className="icn icn-left fa fa-lw fa-plus" /> Add Issue
                                </button>
                            </div>
                            <div className="padding-15px border-bottom">
                                <div className="display-flex" style={{height: 50, marginTop: 20, marginBottom: 20}}>
                                    <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                                        <div className="post-top">
                                            <div className="txt-site txt-22 txt-orange txt-bold">12</div>
                                            <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Open</div>
                                        </div>
                                    </div>
                                    <div style={{width: '100%', height: '100%', textAlign: 'center'}} className="border-left">
                                        <div className="post-top">
                                            <div className="txt-site txt-22 txt-primary txt-bold">0</div>
                                            <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Overdue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px">
                                <div className="display-flex space-between">
                                    <div style={{width: 'calc(100% - 35px)'}}>
                                        <div className="txt-site txt-11 txt-safe txt-bold">363 <Dots /> Crack in front Windshield</div>
                                        <div className="txt-site txt-9 txt-primary" style={{marginTop: 5}}>Reported over 1 year ago by Caimen Dennis</div>
                                        <div className="display-flex" style={{marginTop: 10}}>
                                            <button className="btn btn-small btn-sekunder">
                                                <i className="icn icn-left fa fa-lw fa-image" /> 1
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{width: 35}}>
                                        <button className="btn btn-small-circle btn-grey">
                                            <i className="fa fa-lw fa-ellipsis-v" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card no-margin no-hover no-radius border-all">
                            <div className="padding-15px display-flex space-between border-bottom">
                                <div>
                                    <div className="post-top txt-site txt-main txt-10 txt-bold">
                                        Service Reminders 
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div className="padding-15px">
                                <div className="display-flex" style={{height: 50, marginTop: 20, marginBottom: 20}}>
                                    <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                                        <div className="post-top">
                                            <div className="txt-site txt-22 txt-red txt-bold">5</div>
                                            <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Overdue</div>
                                        </div>
                                    </div>
                                    <div style={{width: '100%', height: '100%', textAlign: 'center'}} className="border-left">
                                        <div className="post-top">
                                            <div className="txt-site txt-22 txt-primary txt-bold">0</div>
                                            <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Due Soop</div>
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
}

class CardPhotos extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const data = [
            {cover: 'https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg', title: 'Avg. MPG (US)', type: 'error'},
            {cover: 'https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg', title: 'Avg. Fuel Cost/Mile', type: 'vehicle'},
            {cover: 'https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg', title: 'Total Gallons', type: 'vehicle'},
            {cover: 'https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg', title: 'Total Fuel Cost', type: 'Inspections'},
            {cover: 'https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg', title: 'Avg. MPG (US)', type: 'error'},
            {cover: 'https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg', title: 'Avg. Fuel Cost/Mile', type: 'vehicle'},
            {cover: 'https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg', title: 'Total Gallons', type: 'vehicle'}
        ]
        return (
            <div>
                <div className="display-flex space-between" style={{width: '100%', paddingTop: 0, paddingBottom: 10}}>
                    <div className="width width-50 display-flex">
                        <button className="btn btn-small btn-sekunder">
                            Show: All Photos <i className="icn icn-right fa fa-lw fa-chevron-down" />
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

                <div>
                    <CardVehicle data={data} />
                </div>

            </div>
        )
    }
}

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            navigator: [
                { status: '', value: '', title: 'Fuel Entries', icon: 'fa fa-lg fa-home' },
                { status: '', value: '', title: 'Vehicle Overview', icon: 'fa fa-lg fa-th-large' },
                { status: 'active', value: '123', title: 'Photos', icon: 'fa fa-lg fa-image' },
                { status: '', value: '2', title: 'Documents', icon: 'fa fa-lg fa-file' },
                { status: '', value: '3', title: 'Comments', icon: 'fa fa-lg fa-comment' }
            ]
        }
    }

    opNavigator = (e, isNumber = false) => {
        const id = isNumber ? e : Number(e.currentTarget.dataset.id)
        const { navigator } = this.state
        let nav = navigator.map((data, index) => {
            return { ...data, status: id === index ? 'active' : '' }
        })
        this.setState({ navigator: nav, selectedIndex: id })
    }

    render () {
        const { navigator, selectedIndex } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div className="display-flex space-between" style={{paddingBottom: 15}}>
                        <div className="width width-30">
                            <div className="display-flex post-top txt-site txt-12 txt-primary">
                                <div className="txt-site txt-12 txt-safe txt-main">Vehicles</div> <div style={{marginLeft: 5, marginRight: 5}}>/</div>
                                <div className="txt-site txt-12 txt-safe txt-main">LE-5</div> <div style={{marginLeft: 5, marginRight: 5}}>/</div>
                                <div className="txt-site txt-12 txt-bold txt-main">{ navigator[selectedIndex].title }</div>
                            </div>
                        </div>
                        <div className="width width-70 display-flex right">
                            <button className="btn btn-orange" style={{marginLeft: 10}}>
                                <i className="icn icn-left fa fa-lw fa-retweet" /> Recalculate All Fuel Entries
                            </button>
                            <button className="btn btn-green" style={{marginLeft: 10}}>
                                <i className="icn icn-left fa fa-lw fa-plus" /> Add Fuel Entry
                            </button>
                        </div>
                    </div> 
                    <div className="display-flex space-between" style={{paddingBottom: 5}}>
                        <div style={{width: 80, marginRight: 15}}>
                            <div className="image image-80px image-radius background-blue" style={{overflow: 'hidden'}}>
                                <img style={{height: '100%', width: 'auto'}} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{width: 'calc(100% - 285px)'}}>
                            <div className="txt-site txt-18 txt-main txt-bold" style={{marginBottom: 5}}>LE-5</div>
                            <div className="txt-site txt-9 txt-primary">SUV <Dots /> 2015 Chevrolet Thoe <Dots /> 1GNLC2K2234023430234 <Dots /> BRT5564 <Dots /> <i className="fa fa-lw fa-id-card" /> 0</div>
                            <div className="display-flex" style={{paddingTop: 10}}>
                                <div className="display-flex align-center" style={{marginRight: 30}}>
                                    <div className="txt-site txt-11 txt-main txt-bold" style={{marginRight: 5}}>96,250</div>
                                    <div className="txt-site txt-11 txt-primary" style={{marginRight: 5}}>mi</div>
                                    <i className="txt-site txt-8 txt-primary fa fa-lw fa-pencil-alt" />
                                </div>
                                <div className="display-flex align-center" style={{marginRight: 30}}>
                                    <i className="fa fa-lw fa-circle" style={{ fontSize: 11, color: 'green', marginTop: 1, marginRight: 5}} />
                                    <div className="txt-site txt-11 txt-main txt-bold" style={{marginRight: 5}}>Active</div>
                                    <i className="txt-site txt-8 txt-primary fa fa-lw fa-chevron-down" />
                                </div>
                                <div className="display-flex align-center" style={{marginRight: 30}}>
                                    <div className="txt-site txt-11 txt-main txt-bold" style={{marginRight: 5}}>Law Envorcement</div>
                                    <i className="txt-site txt-8 txt-primary fa fa-lw fa-pencil-alt" />
                                </div>
                                <div className="display-flex align-center">
                                    <div className="txt-site txt-11 txt-safe txt-bold" style={{marginRight: 5}}>Caimen Dennis</div>
                                    <i className="txt-site txt-8 txt-primary fa fa-lw fa-minus-circle" />
                                </div>
                            </div>
                        </div>
                        <div style={{width: 180}} className="border-all">
                            <div className="txt-site txt-9 txt-center txt-main txt-bold" style={{paddingTop: 8, paddingBottom: 12}}>SERVICE REMINDERS</div>
                            <div className="display-flex" style={{height: 35}}>
                                <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                                    <div className="post-top txt-site txt-22 txt-red txt-bold">1</div>
                                </div>
                                <div style={{width: '100%', height: '100%', textAlign: 'center'}} className="border-left">
                                    <div className="post-top txt-site txt-22 txt-primary txt-bold">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="display-flex space-between" style={{paddingBottom: 15}}>
                        <div style={{width: 250, marginRight: 15}}>
                            <button className="btn btn-green btn-full">
                                <i className="icn icn-left fa fa-lw fa-plus" /> Quick Add
                            </button>

                            <MenuBar data={navigator} onClick={(id) => this.opNavigator(id)} />
                        </div>
                        <div style={{width: 'calc(100% - 265px)'}}>
                            <div>
                                {navigator[0].status === 'active' && <CardDashboard />}
                                {navigator[1].status === 'active' && <CardOverView />}
                                {navigator[2].status === 'active' && <CardPhotos />}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Pages