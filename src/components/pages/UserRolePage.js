import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'

class CardRoles extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderHeaderInfo() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-30">
                    <div className="txt-site txt-10 txt-main txt-bold">Vehicle Rules</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Schedule</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-bold"></div>
                </div>
            </div>
        )
    }

    renderHeader() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-50">
                    <div className="txt-site txt-10 txt-main txt-bold">Name</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main txt-bold">Users</div>
                </div>
                <div className="width width-5">
                    <div className="txt-site txt-10 txt-main txt-bold"></div>
                </div>
            </div>
        )
    }

    renderBody() {
        return (
            <div className="padding-15px display-flex space-between">
                <div className="width width-50">
                    <div className="txt-site txt-10 txt-main txt-bold">Driver Role - Inspections Focused</div>
                </div>
                <div className="width width-10">
                    <div className="txt-site txt-10 txt-main text-blue txt-bold">1 Users</div>
                </div>
                <div className="width width-5">
                    <button className="btn btn-small btn-grey" style={{ width: 25, height: 25 }}>
                        <i className="fa fa-lw fa-ellipsis-v" />
                    </button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="padding-0px">
                <div className="display-flex space-between" style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
                    <div className="width width-50 display-flex">
                        <div className="card-date-picker margin-right-5px">
                            <div className="double">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Search names" />
                                <button
                                    type="button"
                                    className="btn btn-grey border-left btn-no-radius">
                                    <i className="fa fa-lg fa-search" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="post-top txt-site txt-10 txt-blue txt-main"> Clear </div>
                        </div>
                    </div>
                    <div className="width width-50 display-flex right">
                        <div style={{ marginRight: 15, marginLeft: 15 }}>
                            <div className="post-top txt-site txt-10 txt-main">1 - 8 of 8</div>
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
                    <div className="border-bottom">
                        {this.renderHeader()}
                    </div>
                    {this.renderBody()}
                    {this.renderBody()}
                    {this.renderBody()}
                    {this.renderBody()}
                    {this.renderBody()}
                </div>
            </div>
        )
    }
}

class UserRolePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            navigator: [
                { status: '', value: '', title: 'Account Settings', icon: '' },
                { status: '', value: '', title: 'Billing & Subscriptions', icon: '' },
                { status: '', value: '', title: 'Export Account Data', icon: '' },
                { status: '', value: '', title: 'Groups & Subgroups', icon: '' },
                { status: 'active', value: '', title: 'Roles', icon: '' },
                { status: '', value: '', title: 'Webhooks', icon: '' },
                { status: '', value: '', title: 'Integration Links', icon: '' },
                { status: '', value: '', title: 'Password Requirements', icon: '' }
            ],
            navigator2: [
                { status: '', value: '', title: 'Custom Fields' },
                { status: '', value: '', title: 'Labels' }
            ],
            navigator3: [
                { status: '', value: '', title: 'Custom Widgets', icon: '' }
            ],
            headers: [
                { status: 'active', title: 'Standard Roles' },
                { status: '', title: 'Users With Custom Roles' }
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

    render() {
        const { navigator, navigator2, navigator3, headers } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div className="display-flex space-between">
                        <div className="width width-30">
                            <div className="display-flex post-top txt-site txt-15 txt-primary">
                                <div className="txt-site txt-15 txt-bold txt-main">Roles</div>
                            </div>
                        </div>
                        <div className="width width-70 display-flex right">
                            <button className="btn btn-green" style={{ marginLeft: 10 }}>
                                <i className="icn icn-left fa fa-lw fa-plus" /> Add Roles
                            </button>
                        </div>
                    </div>
                </div>

                <div className="padding-15px">
                    <div className="display-flex space-between" style={{ paddingBottom: 15, paddingTop: 15 }}>
                        <div style={{ width: 250, marginRight: 10 }}>
                            <div style={{ fontWeight: "bold", marginBottom: 15 }}>General Settings</div>
                            <div className="border-top">
                                <ul className="menu-side" style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    {navigator && navigator.map((dt, i) => {
                                        return (
                                            <li className={dt.status} data-id={i} onClick={(id) => this.opNavigator(id)}>
                                                {dt.icon && (
                                                    <div className="ms-icn">
                                                        <i className={dt.icon ? dt.icon : "fa fa-lw fa-th-large"} />
                                                    </div>
                                                )}
                                                <div className="ms-label" style={{ color: "#000", fontWeight: "normal" }}>
                                                    {dt.title}
                                                </div>
                                                <div className="ms-val" style={{ borderRadius: 15 }}>
                                                    {dt.value}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div style={{ fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Feature Settings</div>
                            <div className="border-top">
                                <ul className="menu-side" style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    {navigator2 && navigator2.map((dt, i) => {
                                        return (
                                            <li className={dt.status} data-id={i} onClick={(id) => this.opNavigator(id)}>
                                                {dt.icon && (
                                                    <div className="ms-icn">
                                                        <i className={dt.icon ? dt.icon : "fa fa-lw fa-th-large"} />
                                                    </div>
                                                )}
                                                <div className="ms-label" style={{ color: "#000", fontWeight: "normal" }}>
                                                    {dt.title}
                                                </div>
                                                <div className="ms-val" style={{ borderRadius: 15 }}>
                                                    {dt.value}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div style={{ fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Dashboard</div>
                            <div className="border-top">
                                <ul className="menu-side" style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    {navigator3 && navigator3.map((dt, i) => {
                                        return (
                                            <li className={dt.status} data-id={i} onClick={(id) => this.opNavigator(id)}>
                                                <div className="ms-label" style={{ color: "#000", fontWeight: "normal" }}>
                                                    {dt.title}
                                                </div>
                                                <div className="ms-val" style={{ borderRadius: 15 }}>
                                                    {dt.value}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: 'calc(100% - 265px)' }}>
                            <div style={{ width: '100%' }}>
                                <TabBar enableScroll={false} isSmall={true} data={headers} theme={'theme-9'} onClick={(id) => this.opNavigator(id)} />
                            </div>
                            <div>
                                {navigator[4].status === 'active' && <CardRoles />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserRolePage