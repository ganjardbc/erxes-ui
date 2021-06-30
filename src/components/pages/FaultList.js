import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import CardMenu from '../../modules/CardMenu'
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
                            <CardMenu data={[{title: 'Add Multiple Users', enableIcon: false, link: ''}]} />
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 10}} className="border-bottom">
                            <CardMenu data={[{title: 'Import Contacts', enableIcon: false, link: ''}]} />
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
                <div className="width width-20">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle</div>
                </div>
                <div className="width width-25">
                    <div className="txt-site txt-10 txt-main txt-bold">Code</div>
                </div>
                <div className="width width-15">
                    <div className="txt-site txt-10 txt-main txt-bold">Last Occured</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Status</div>
                </div>
                <div className="width width-5">
                    <div className="display-flex">
                        <div className="txt-site txt-10 txt-main txt-bold">Count</div>
                        <i className="fa fa-lw fa-info-circle" style={{marginLeft: 4}} />
                    </div>
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
                <div className="width width-20">
                    <div className="display-flex">
                        <div style={{width: 40, marginRight: 15}}>
                            <div className="image image-40px image-radius background-blue" style={{overflow: 'hidden'}}>
                                <img style={{height: '100%', width: 'auto'}} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{width: 'calc(100% - 55px)'}}>
                            <div className="txt-site txt-12 txt-main txt-bold" style={{marginBottom: 5}}>Chevy Service Van</div>
                            <div className="display-flex">
                                <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'red', marginTop: 2, marginRight: 5}}></div>
                                <div className="txt-site txt-9 txt-primary">Out of Service <Dots /> Van <Dots /> Admin</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-25">
                    <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 3}}>P0611</div>
                    <div className="display-flex">
                        <div className="txt-site txt-9 txt-primary">Fuel Injector Control Module Failure</div>
                        <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: '#000', marginTop: 2, marginLeft: 5}}></div>
                    </div>
                </div>
                <div className="width width-15">
                    <div className="display-flex">
                        <div className="txt-site txt-10 txt-main txt-bold">Over 1 year ago <Dots /></div>
                        <div className="fa fa-1x fa-crosshairs" style={{ fontSize: 12, color: '#000', marginTop: 2, marginLeft: 5}}></div>
                    </div>
                </div>
                <div className="width width-10">
                    <div className="display-flex">
                        <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'green', marginTop: 2, marginRight: 5}}></div>
                        <div className="txt-site txt-10 txt-main txt-bold">Resolved</div>
                    </div>
                    <div className="txt-site txt-9 txt-primary">Issue # 45</div>
                </div>
                <div className="width width-5">
                    <button className="btn btn-small-circle" style={{backgroundColor: '#999', color: '#fff', width: 30, height: 30}}>
                        3
                    </button>
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

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'All', value: '0' },
                { status: '', title: 'Open', value: '3' },
                { status: '', title: 'Pending', value: '0' },
                { status: '', title: 'Resolved', value: '1' },
                { status: '', title: 'Ignored', value: '0' }
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
                    <div className="width width-30">
                        <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Faults</div>
                    </div>
                    <div className="width width-70 display-flex right">
                        <div style={{marginLeft: 10}}>
                            <ButtonAction />
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div style={{width: '100%'}}>
                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-9'} onClick={(id) => this.opNavigator(id)} />
                    </div>

                    <div className="display-flex border-bottom" style={{width: '100%', paddingTop: 15, paddingBottom: 15}}>
                        <button className="btn btn-sekunder" style={{marginRight: 5}}>
                            All Codes <i className="icn icn-right fa fa-lw fa-chevron-down" />
                        </button>
                        <input 
                            type="text" 
                            className="txt txt-sekunder-color"
                            placeholder="Filter vehicle"
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
                            <i className="icn icn-left fa fa-lw fa-sliders-h" /> More
                        </button>
                        <button className="btn btn-main" style={{marginRight: 15}}>
                            <i className="icn icn-left fa fa-lw fa-search" /> Search 
                        </button>
                        <div>
                            <div className="post-top txt-site txt-10 txt-main">0 filters applied</div>
                        </div>
                    </div>

                    <div className="display-flex space-between" style={{width: '100%', paddingTop: 15, paddingBottom: 15}}>
                        <div className="width width-50 display-flex"></div>
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