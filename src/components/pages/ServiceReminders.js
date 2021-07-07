import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import LinearProgress from '@material-ui/core/LinearProgress'
import Dots from '../../modules/Dots'
import CardCount from '../../modules/CardCount'
import CardMenu from '../../modules/CardMenu'

const BorderLinearProgress = withStyles({
	root: {
    height: 30,
    borderRadius: '4px',
    backgroundColor: lighten('#f39c12', 0.5),
  },
  bar: {
    borderRadius: '4px',
    backgroundColor: '#f39c12',
  },
})(LinearProgress)

class ButtonMore extends Component {
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
        var element = document.getElementById('button-import')
        this.setState({visiblePopup: true})
        this.handleClickOutside(element)
    }

    render () {
        const {visiblePopup} = this.state
        return (
            <div style={{position: 'relative'}}>
                <button className="btn btn-small btn-grey" style={{ height: 23 }} onClick={() => this.opMenu()}>
                    <i className="fa fa-lw fa-ellipsis-v" />
                </button>

                <div
                    style={{ top: "25px", width: "280px" }}
                    id="button-import"
                    className={visiblePopup ? "app-menu-popup" : "app-menu-popup app-menu-popup-hide"}>
                    <div className="content">
                        <div style={{paddingTop: 10, paddingBottom: 10}} className="border-bottom">
                            <CardMenu reverseIcon={true} data={[
                                {title: 'Enter Service', enableIcon: true, icon: 'fa fa-lw fa-cog', link: ''},
                                {title: 'Add to Work Order', enableIcon: true, icon: 'fa fa-lw fa-clipboard', link: ''},
                                {title: 'Send Notification(s)', enableIcon: true, icon: 'fa fa-lw fa-envelope', link: ''}
                            ]} />
                        </div>
                        <div style={{paddingTop: 10, paddingBottom: 10}}>
                            <CardMenu reverseIcon={true} data={[
                                {title: 'Edit', enableIcon: true, icon: 'fa fa-lw fa-pencil-alt', link: ''},
                                {title: 'Delete', enableIcon: true, icon: 'fa fa-lw fa-trash-alt', link: ''},
                                {title: 'View Comliance', enableIcon: true, icon: 'fa fa-lw fa-check-circle', link: ''},
                                {title: 'View Full History', enableIcon: true, icon: 'fa fa-lw fa-clock', link: ''}
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardHeader extends Component {
    render() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-2">
                    <div className="txt-site txt-10 txt-main txt-bold">
                        <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                    </div>
                </div>
                <div className="width width-25">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle</div>
                </div>
                <div className="width width-20">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle Services</div>
                </div>
                <div className="width width-15">
                    <div className="txt-site txt-10 txt-main txt-bold">Due Date</div>
                </div>
                <div className="width width-15">
                    <div className="txt-site txt-10 txt-main txt-bold">Subscribers</div>
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

    render() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-2">
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                </div>
                <div className="width width-25">
                    <div className="display-flex">
                        <div style={{ width: 50, marginRight: 15 }}>
                            <div className="image image-50px image-radius background-blue" style={{ overflow: 'hidden' }}>
                                <img style={{ height: '100%', width: 'auto' }} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 65px)' }}>
                            <div className="txt-site txt-12 txt-main txt-bold" style={{ marginBottom: 8 }}>PW-4</div>
                            <div className="display-flex">
                                <div className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'red', marginTop: 2, marginRight: 5 }}></div>
                                <div className="txt-site txt-9 txt-primary">Out of services <Dots /> Van <Dots /> Public Works</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width width-20">
                    <div className="display-flex" style={{marginBottom: 5}}>
                        <div className="card-value red">Overdue</div>
                    </div>
                    <div className="txt-site txt-10 txt-main txt-bold">Oil Change and Filter Replacement</div>
                    <div className="txt-site txt-9 txt-primary">over 2 month(s) or 3,500 miles</div>
                </div>
                <div className="width width-15">
                    <div className="display-flex align-center">
                        <div style={{width: 20}}>
                            <i className="fa fa-lw fa-calendar-alt" style={{fontSize: 10}} />
                        </div>
                        <div className="txt-site txt-9 txt-red">7 months ago</div>
                    </div>
                    <div className="display-flex align-center">
                        <div style={{width: 20}}>
                            <i className="fa fa-lw fa-signal" style={{fontSize: 10}} />
                        </div>
                        <div className="txt-site txt-9 txt-main">2.168 mi from now</div>
                    </div>
                    <div style={{paddingTop: 20}}>
                        <div className="display-flex">
                            <div className="txt-site txt-10 txt-main">Compilance: </div>
                            <div className="card-value green" style={{marginLeft: 5}}>Beta</div>
                        </div>
                        <div className="txt-site txt-10 txt-safe">22%</div>
                    </div>
                </div>
                <div className="width width-15">
                    <div className="display-flex align-center">
                        <div className="txt-site txt-10 txt-main txt-bold">1 subcriber</div>
                        <div className="card-value green" style={{marginLeft: 5}}>Active</div>
                    </div>
                    <div className="txt-site txt-9 txt-primary">Notification last sent Today</div>
                </div>
                <div className="width width-5 display-flex">
                    <div>
                        <div className="card-value grey" style={{marginRight: 5}}>5</div>
                    </div>
                    <ButtonMore />
                </div>
            </div>
        )
    }
}

class CardServiceReminders extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const dataCount = [
            {title: 'Overdue', value: '14'},
            {title: 'Due Soon', value: '5'}
        ]

        return (
            <div className="padding-15px">
                <div className="display-flex border-bottom" style={{ width: '100%', paddingTop: 0, paddingBottom: 15 }}>
                    <button className="btn btn-sekunder" style={{ marginRight: 5 }}>
                        All Reminders <i className="icn icn-right fa fa-lw fa-caret-down" />
                    </button>
                    <input
                        type="text"
                        className="txt txt-sekunder-color"
                        placeholder="Filter vehicles"
                        style={{ width: 200, marginRight: 10 }}
                        // value={}
                        // onChange={}
                        required />
                    <input
                        type="text"
                        className="txt txt-sekunder-color"
                        placeholder="Filter service tasks"
                        style={{ width: 200, marginRight: 10 }}
                        // value={}
                        // onChange={}
                        required />
                    <button className="btn btn-sekunder" style={{ marginRight: 10 }}>
                        <i className="icn icn-left fa fa-lw fa-sliders-h" /> More
                    </button>
                    <button className="btn btn-main" style={{ marginRight: 15 }}>
                        <i className="icn icn-left fa fa-lw fa-search" /> Search
                    </button>
                    <div>
                        <div className="post-top txt-site txt-10 txt-main">0 filters applied</div>
                    </div>
                </div>

                <div className="display-flex align-center" style={{ paddingTop: 15, paddingBottom: 0 }}>
                    <div style={{width: '50%'}}>
                        <CardCount data={dataCount} rows={'2'} />
                    </div>
                    <div style={{width: '50%'}}>
                        <BorderLinearProgress variant="determinate" value={30} valueBuffer={500} />
                    </div>
                </div>

                <div className="display-flex space-between" style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
                    <div className="width width-50 display-flex">
                        <div style={{ marginRight: 15 }}>
                            <div className="post-top txt-site txt-10 txt-main">0 selected:</div>
                        </div>
                        <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                            Manage Subscribers <i className="icn icn-right fa fa-lw fa-caret-down" />
                        </button>
                        <button className="btn btn-small btn-icn btn-sekunder" style={{ marginRight: 5 }}>
                            <i className="icn fa fa-lw fa-trash-alt" />
                        </button>
                    </div>
                    <div className="width width-50 display-flex right">
                        <button className="btn btn-small btn-sekunder" style={{ marginRight: 5 }}>
                            Group : Week <i className="icn icn-right fa fa-lw fa-caret-down" />
                        </button>
                        <div style={{ marginRight: 15, marginLeft: 15 }}>
                            <div className="post-top txt-site txt-10 txt-main">1 - 50 of 54</div>
                        </div>
                        <div className="display-flex">
                            <button className="btn btn-small btn-icn btn-sekunder">
                                <i className="icn fa fa-lw fa-caret-left" />
                            </button>
                            <button className="btn btn-small btn-icn btn-sekunder">
                                <i className="icn fa fa-lw fa-caret-right" />
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
        )
    }
}

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <CardServiceReminders />
            </div>
        )
    }
}

export default Pages