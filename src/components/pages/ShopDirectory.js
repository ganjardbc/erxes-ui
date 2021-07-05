import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import SimpleGoogleMap from '../../modules/googleMap'

class CardBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const data = [
            {cover: '', status: 'active', title: 'American Best Automotive', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.78 ml'},
            {cover: '', status: 'active', title: 'Hendrik Chevrolet', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.98 ml'},
            {cover: '', status: '', title: 'The Muffler Shop', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '1.64 ml'},
            {cover: '', status: 'active', title: 'Auto 1 Ave / Dba: Lucky Auto Bufford', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.22 ml'},
            {cover: '', status: 'active', title: 'Mall Of Georgia Chrysler', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '1.78 ml'},
            {cover: '', status: '', title: 'American Best Automotive', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.78 ml'},
            {cover: '', status: '', title: 'Hendrik Chevrolet', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.98 ml'},
        ]
        return (
            <div>
                {data && data.map((dt, i) => {
                    return (
                        <div key={i} className={'display-flex padding-15px ' + (i !== (data.length - 1) ? 'border-bottom' : '')} style={{ cursor: 'pointer' }}>
                            <div style={{width: 50, marginRight: 10}}>
                                <div className="image image-50px" style={{borderRadius: 5, backgroundColor: '#999', textAlign: 'center'}}>
                                    <i className="post-top fa fa-lw fa-store-alt" style={{ color: '#fff', fontSize: 24 }} />
                                </div>
                            </div>
                            <div style={{width: 'calc(100% - 165px)'}}>
                                <div style={{marginBottom: 5}}>
                                    <span className="txt-site txt-10 txt-main txt-bold">{ dt.title }</span>
                                    {dt.status === 'active' && <i className="fa fa-lw fa-circle" style={{color: 'green', marginLeft: 5}} />}
                                </div>
                                <div className="txt-site txt-9 txt-primary">{ dt.address }</div>
                                <div className="txt-site txt-9 txt-primary">{ dt.city }, { dt.post }</div>
                            </div>
                            <div style={{width: 100}} className="display-flex right">
                                <div className="txt-site txt-9 txt-primary txt-underline">{ dt.location }</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const marker = {
    id: "",
    title: "",
    icon: "fa fa-lg fa-home",
    tooltip: <div>Ahuy</div>,
    isHover: false,
    isSonar: true,
    lat: "",
    lng: ""
}

const defaultPayload = {
    pointer: {
        title: "12.5 km / 8 Hours",
        sub: "Single Moda - Inland Truck"
    },
    destination: {
        start: {
            title: "LGN Nusantara",
            sub: "22 March 2020 19.00 PM",
            icon: "fa fa-lg fa-warehouse",
        },
        goal: {
            title: "DSP Panjang",
            sub: "23 March 2020 19.00 PM",
            icon: "fa fa-lg fa-warehouse",
        }
    },
    map: {
        center: {
            lat: -1.901935,
            lng: 109.913175
        },
        markers: [marker, marker, marker],
        zoom: 6
    }
}

class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: defaultPayload,
            selectedIndex: 0,
            navigator: [
                { status: '', value: '', title: 'Service History' },
                { status: '', value: '', title: 'Work Orders' },
                { status: '', value: '', title: 'Service Tasks' },
                { status: '', value: '', title: 'Service Codes' },
                { status: 'active', value: '', title: 'Shop Directory' },
                { status: '', value: '', title: 'Integrations' }
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
        const { navigator, data } = this.state
        return (
            <div className="main-content no-padding">
                <div className="padding-15px background-white border-bottom">
                    <div style={{ width: '100%', paddingBottom: 15 }}>
                        <TabBar enableScroll={false} isSmall={true} data={navigator} theme={'theme-2'} onClick={(id) => this.opNavigator(id)} />
                    </div>
                    <div className="display-flex" style={{width: '100%'}}>
                        <input 
                            type="text" 
                            className="txt txt-sekunder-color"
                            placeholder="by shop name, address, phone number"
                            style={{width: 400, marginRight: 10}}
                            // value={}
                            // onChange={}
                            required />
                        <input 
                            type="text" 
                            className="txt txt-sekunder-color"
                            placeholder="longitude, latitude"
                            style={{width: 400, marginRight: 10}}
                            // value={}
                            // onChange={}
                            required />
                        <button className="btn btn-icn btn-main">
                            <i className="icn fa fa-lw fa-search" />
                        </button>
                    </div>
                </div>

                <div className="display-flex">
                    <div style={{width: 400, height: 'calc(100vh - 172px)', backgroundColor: '#fff', overflowY: 'auto'}} className="change-scrollbar">
                        <CardBar />
                    </div>
                    <div style={{width: 'calc(100% - 400px)', height: 'calc(100vh - 172px)'}}>
                        <SimpleGoogleMap 
                            zoom={data.map.zoom}
                            center={data.map.center}
                            markers={data.map.markers}
                            enableIconMarker={true}
                            onClickMarker={(e) => this.setState({visibleContent: true})} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Pages