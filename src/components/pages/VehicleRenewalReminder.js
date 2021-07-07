import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import CardServiceReminders from './ServiceReminders'
import CardVehicleRenewals from './VehicleRenewals'

class VehicleRenewalReminder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', title: 'Service Reminders' },
                { status: '', title: 'Vehicle Renewals' },
                { status: '', title: 'Contact Renewals' }
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

    render() {
        const { navigator } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div style={{ width: '100%', paddingBottom: 15 }}>
                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-2'} onClick={(id) => this.opNavigator(id)} />
                    </div>
                    {navigator[0].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Service Reminders</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <button className="btn btn-sekunder" style={{marginRight: 10}}>
                                    <i className="icn icn-left fa fa-lw fa-circle" style={{color: 'green'}} /> Reminder Forecasting is On <i className="icn icn-right fa fa-lw fa-caret-down" />
                                </button>
                                <button className="btn btn-sekunder">
                                    <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                                </button>
                            </div>
                        </div>
                    )}
                    {navigator[1].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Vehicle Renewal Reminders</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <button className="btn btn-sekunder" onClick={() => this.opMenu()}>
                                    <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                                </button>
                            </div>
                        </div>
                    )}
                    {navigator[2].status === 'active' && (
                        <div className="display-flex space-between">
                            <div className="width width-30">
                                <div className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Contact Renewals</div>
                            </div>
                            <div className="width width-70 display-flex right">
                                <button className="btn btn-sekunder" onClick={() => this.opMenu()}>
                                    <i className="icn icn-left fa fa-lw fa-ellipsis-v" /> Actions
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {navigator[0].status === 'active' && (
                    <CardServiceReminders />
                )}

                {navigator[1].status === 'active' && (
                    <CardVehicleRenewals />
                )}

            </div>
        )
    }
}

export default VehicleRenewalReminder