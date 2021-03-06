import React, { Component } from 'react'
import Dots from '../../modules/Dots'
import MenuBar from '../../modules/MenuBar'

class ServiceEntries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigator: [
                { status: 'active', value: '', title: 'Vehicle Overview', icon: 'fa fa-lg fa-th-large' },
                { status: '', value: '123', title: 'Photos', icon: 'fa fa-lg fa-image' },
                { status: '', value: '2', title: 'Documents', icon: 'fa fa-lg fa-file' },
                { status: '', value: '3', title: 'Comments', icon: 'fa fa-lg fa-comment' }
            ],
            navigator2: [
                { status: '', value: '35', title: 'Work Orders' },
                { status: '', value: '4', title: 'Inspections' },
                { status: '', value: '110', title: 'Issues' },
                { status: '', value: '0', title: 'Faults' },
                { status: '', value: '20', title: 'Recalls' },
                { status: '', value: '4', title: 'Reminders' },
                { status: '', value: '89', title: 'Service History' },
                { status: '', value: '56', title: 'Fuel History' },
                { status: '', value: '16', title: 'Expense History' },
                { status: '', value: '41', title: 'Parts Usage' },
                { status: '', value: '4', title: 'Assignment History' },
                { status: '', value: '320', title: 'Matery History' },
                { status: '', value: '169', title: 'Location History' }
            ],
            navigator3: [
                { status: '', value: '', title: 'Recall Notifications', icon: 'fa fa-lg fa-external-link-alt' },
                { status: '', value: '', title: 'View Vehicle History', icon: 'fa fa-lg fa-external-link-alt' },
                { status: '', value: '', title: 'Settings', icon: 'fa fa-lg fa-cog' }
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
        const { navigator, navigator2, navigator3 } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px display-flex space-between background-white">
                    <div className="width width-50">
                        <div className="post-top txt-site txt-16 txt-bold txt-blue padding-top-5px">Vehicle / LE-5 / Service Entries / <span className="post-top txt-site txt-16 txt-bold txt-main padding-top-5px">Service Entry #6147526</span></div>

                    </div>
                    <div className="width width-50 display-flex right">
                        <div style={{ marginLeft: 10 }}>
                            <button type="button" className="btn btn-blue margin-right-10px">
                                <i style={{ fontWeight: "bold" }} className="icn icn-left fa fa-lw fa-pencil-alt"></i>
                                Edit
                                <i style={{ fontWeight: "bold", marginLeft: 5 }} className="icn icn-right fa fa-lw fa-caret-down"></i>
                            </button>
                            <button type="button" className="btn btn-green">
                                <i style={{ fontWeight: "bold" }} className="icn icn-left fa fa-lw fa-plus"></i>
                                Add Work Order
                            </button>
                        </div>


                    </div>

                </div>

                <div className="display-flex background-white border-bottom">
                    <div className="width width-10 padding-10px">
                        <div style={{ width: 40, marginRight: 15 }}>
                            <div className="image image-100px image-radius background-blue" style={{ overflow: 'hidden' }}>
                                <img style={{ height: '100%', width: 'auto' }} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="width width-70">
                        <div className="padding-bottom-5px txt-site txt-20 txt-bold txt-main">LE-5</div>
                        <div className="padding-bottom-5px  txt-site txt-12 txt-bold txt-primary">SUV <Dots /> 2015 Chevrolet Tahoe <Dots /> 1GCLNC2K5FR62841 <Dots /> BRT5546 <Dots /> <i className="fa fa-credit-card" /> 0</div>
                        <div className="display-flex padding-bottom-5px ">
                            <div className="txt-site txt-main txt-extra-bold txt-9 padding-bottom-10px padding-right-30px">96,250 mi <i className="icn icn-right fa fa-pencil-alt" /></div>
                            <div className="txt-site txt-main txt-extra-bold txt-9 padding-bottom-10px padding-right-30px">
                                <span className="fa fa-1x fa-circle" style={{ fontSize: 11, color: 'lightgreen', marginTop: 2, marginRight: 5 }}></span>
                                Active <i className="icn icn-right fa fa-chevron-down" /></div>
                            <div className="txt-site txt-main txt-extra-bold txt-9 padding-bottom-10px padding-right-30px">Law Enforcement <i className="icn icn-right fa fa-pencil-alt" /></div>
                            <div className="txt-site txt-blue txt-extra-bold txt-9 padding-bottom-10px">Caimen Dennis <i style={{ color: 'lightgrey' }} className="icn icn-right fa fa-minus-circle" /></div>
                        </div>
                    </div>
                    <div className="width width-20 padding-right-10px">
                        <div className="padding-15px border-all">
                            <div className="padding-5px txt-site txt-14 txt-bold txt-main txt-center">Service Reminders</div>
                            <div className="display-flex center">
                                <div className="padding-5px txt-site txt-14 txt-bold txt-red txt-center border-right">1</div>
                                <div className="padding-5px txt-site txt-14 txt-bold txt-main txt-center">0</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-2x-col7 grid-mobile-none gap-15px">
                    <div className="column-1">
                        <div className="padding-15px">
                            <button className="btn btn-green btn-full">
                                <i className="icn icn-left fa fa-lw fa-plus" /> Quick Add
                            </button>
                            <div className="border-bottom">
                                <MenuBar data={navigator} onClick={(id) => this.opNavigator(id)} />
                            </div>
                            <div className="border-bottom">
                                <MenuBar data={navigator2} onClick={(id) => console.log('id', id)} />
                            </div>
                            <div>
                                <MenuBar data={navigator3} onClick={(id) => console.log('id', id)} />
                            </div>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="padding-15px">
                            <div className="txt-site txt-16 txt-main">Service Entries Details</div>
                        </div>
                        <div className="padding-15px">
                            <div className="card no-margin no-hover no-radius border-all">
                                <div className="card-form">
                                    <div className="cf-header border-bottom">
                                        <div className="display-flex">
                                            <div className="display-flex right width width-40 padding-right-10px">
                                                <div className="cf-subtitle"> Start Date </div>
                                            </div>
                                            <div className="width width-60">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-header border-bottom">
                                        <div className="display-flex">
                                            <div className="display-flex right width width-40 padding-right-10px">
                                                <div className="cf-subtitle"> Completion Date </div>
                                            </div>
                                            <div className="width width-60">
                                                <div className="cf-subtitle txt-site txt-main txt-extra-bold txt-underline"> Wed, Nov 6 2019 8:49 AM </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-header border-bottom">
                                        <div className="display-flex">
                                            <div className="display-flex right width width-40 padding-right-10px">
                                                <div className="cf-subtitle"> Odometer </div>
                                            </div>
                                            <div className="width width-60">
                                                <div className="cf-subtitle txt-site txt-main txt-extra-bold txt-underline"> 96,200 mi </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-header border-bottom">
                                        <div className="display-flex">
                                            <div className="display-flex right width width-40 padding-right-10px">
                                                <div className="cf-subtitle"> Resolved Issues </div>
                                            </div>
                                            <div className="width width-60">
                                                <div className="cf-subtitle">
                                                    #732 <span className="txt-site txt-blue txt-extra-bold">[Inspection] Tires</span>
                                                </div>
                                                <div className="cf-subtitle">
                                                    Generated by failed inspection item "Tires" on the "Daily Ispection" from submitted...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-header border-bottom">
                                        <div className="display-flex">
                                            <div className="display-flex right width width-40 padding-right-10px">
                                                <div className="cf-subtitle"> Vendor </div>
                                            </div>
                                            <div className="width width-60">
                                                <div className="cf-subtitle">
                                                    <span className="txt-site txt-blue txt-extra-bold">Firestone - Interverness 280</span>
                                                </div>
                                            </div>
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

export default ServiceEntries