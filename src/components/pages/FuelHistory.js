import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import CardMenu from '../../modules/CardMenu'
import DatePicker from '../../modules/popup/Date'
import Dots from '../../modules/Dots'


class ButtonAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visiblePopup: false
        }
    }

    handleClickOutside(element) {
        const outsideclickListener = event => {
            if (!element.contains(event.target)) {
                removeClickListener()
            }
        }
    
        const removeClickListener = () => {
            this.setState({visiblePopup: false})
            document.removeEventListener('click', outsideclickListener)
        }
    
        document.addEventListener('click', outsideclickListener)
    }
    
    opMenu = () => {
        var element = document.getElementById('button-actions')
        this.setState({visiblePopup: true})
        this.handleClickOutside(element)
    }

    render () {
        const {visiblePopup} = this.state
        return (
            <div style={{position: 'relative'}}>
                <button className="btn btn-sekunder" onClick={() => this.opMenu()}>
                    <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                </button>

                <div
                    style={{ top: "45px", width: "280px" }}
                    id="button-actions"
                    className={visiblePopup ? "app-menu-popup" : "app-menu-popup app-menu-popup-hide"}>
                    <div className="content">
                        <div style={{paddingTop: 10, paddingBottom: 10}} className="border-bottom">
                            <CardMenu data={[{title: 'Add Multiple Users', enableIcon: false, link: ''},]} />
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 10}} className="border-bottom">
                            <CardMenu data={[{title: 'Import Contacts', enableIcon: false, link: ''},]} />
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 10}} className="border-bottom">
                            <CardMenu data={[
                                {title: 'Manage User Roles', enableIcon: false, link: ''},
                                {title: 'Manage Password Requirements', enableIcon: false, link: ''}
                            ]} />
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 10}}>
                            <CardMenu reverseIcon={true} data={[
                                {title: 'Find Duplicates', enableIcon: true, icon: 'fa fa-lw fa-user', link: ''},
                                {title: 'Export CSV', enableIcon: true, icon: 'fa fa-lw fa-download', link: ''}
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardHeader extends Component {
    render () {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-30">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Time</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Usage</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Volume</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Total</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">FE</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Cost</div>
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
                <div className="width width-30">
                    <div className="display-flex">
                        <div style={{width: 40, marginRight: 15}}>
                            <div className="image image-40px image-radius background-blue" style={{overflow: 'hidden'}}>
                                <img style={{height: '100%', width: 'auto'}} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{width: 'calc(100% - 55px)'}}>
                            <div className="txt-site txt-12 txt-main txt-bold" style={{marginBottom: 5}}>DW-2</div>
                            <div className="display-flex">
                                <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'green', marginTop: 2, marginRight: 5}}></div>
                                <div className="txt-site txt-9 txt-primary">Ready <Dots /> Truck <Dots /> Personal</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>10:34 AM</div>
                    <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>Yoshi</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>455.0 mi</div>
                    <div className="txt-site txt-9 txt-primary" style={{marginBottom: 3}}>13.347 mi</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>29.75</div>
                    <div className="txt-site txt-9 txt-primary" style={{marginBottom: 3}}>Gassoline</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>$65.15</div>
                    <div className="txt-site txt-9 txt-primary" style={{marginBottom: 3}}>2.19/gallon</div>
                </div>
                <div className="width width-10">
                    <div className="display-flex">
                        <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>15.3</div>
                        <div className="txt-site txt-9 txt-primary" style={{marginLeft: 2, marginBottom: 3}}>MPG (US)</div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="display-flex">
                        <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>$0.14</div>
                        <div className="txt-site txt-9 txt-primary" style={{marginBottom: 3}}>/mi</div>
                    </div>
                </div>
                <div className="width width-5">
                    <button className="btn btn-small btn-grey" style={{width: 30, height: 30}}>
                        <i className="fa fa-lw fa-ellipsis-v" />
                    </button>
                </div>
            </div>
        )
    }
}

class CardCount extends Component {
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
                            <div className="txt-site txt-13 txt-blue txt-bold" style={{marginBottom: 5}}>{ dt.value }</div>
                            <div className="txt-site txt-10 txt-main txt-bold">{ dt.title }</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: '', title: 'Fuel History' },
                { status: 'active', title: 'Fuel Integrations' }
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
                <div className="padding-15px background-white border-bottom">
                    <div style={{width: '100%', paddingBottom: 15}}>
                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-2'} onClick={(id) => this.opNavigator(id)} />
                    </div>
                    {navigator[0].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Fuel History</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <div style={{marginLeft: 10}}>
                                    <ButtonAction />
                                </div>
                                <button className="btn btn-green" style={{marginLeft: 10}}>
                                    <i className="icn icn-left fa fa-lw fa-plus" /> Add Fuel Entry
                                </button>
                            </div>
                        </div> 
                    )}
                    {navigator[1].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Fuel Integrations</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <button className="btn btn-green" style={{marginLeft: 10}}>
                                    <i className="icn icn-left fa fa-lw fa-plus" /> Add Fuel Card Account
                                </button>
                            </div>
                        </div> 
                    )}
                </div>

                {navigator[0].status === 'active' && (
                    <div className="padding-15px">
                        <div className="display-flex border-bottom" style={{width: '100%', paddingTop: 0, paddingBottom: 15}}>
                            <div style={{ width: 300, marginRight: 10 }}>
                                <DatePicker />
                            </div>
                            <input 
                                type="text" 
                                className="txt txt-sekunder-color"
                                placeholder="Filter vehicles"
                                style={{width: 200, marginRight: 10}}
                                // value={}
                                // onChange={}
                                required />
                            <button className="btn btn-sekunder" style={{marginRight: 10}}>
                                <i className="icn icn-left fa fa-lw fa-sliders-h" /> More
                            </button>
                            <button className="btn btn-main" style={{marginRight: 15}}>
                                <i className="icn icn-left fa fa-lw fa-search" /> Search 
                            </button>
                            <div style={{marginRight: 15}}>
                                <div className="post-top txt-site txt-10 txt-main">0 filters applied</div>
                            </div>
                            <button className="btn btn-main-reverse" style={{marginRight: 15}}>
                                Clear All 
                            </button>
                        </div>

                        <div style={{width: '100%', paddingTop: 15, paddingBottom: 0}}>
                            <CardCount data={dataCount} />
                        </div>

                        <div className="display-flex space-between" style={{width: '100%', paddingTop: 15, paddingBottom: 15}}>
                            <div className="width width-50 display-flex">
                                <div style={{marginRight: 15}}>
                                    <div className="post-top txt-site txt-10 txt-main">0 selected:</div>
                                </div>
                                <button className="btn btn-small btn-icn btn-sekunder" style={{marginRight: 5}}>
                                    <i className="icn fa fa-lw fa-trash-alt" />
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
                )}

                {navigator[1].status === 'active' && (
                    <div className="padding-15px"></div>
                )}

            </div>
        )
    }
}

const dataCount = [
    {title: 'Total Fuel Cost', value: '$909.28'},
    {title: 'Total Gallons', value: '390.94'},
    {title: 'Avg. Fuel Economy', value: '113.85 MPG (US) | GH/HR (US)'},
    {title: 'Cost/Gallon', value: '$2.33'}
]

export default Pages