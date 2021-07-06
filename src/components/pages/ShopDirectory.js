import React, { Component } from 'react'
import TabBar from '../../modules/TabBar'
import SimpleGoogleMap from '../../modules/googleMap'
import MapTooltip from '../../modules/MapTooltip'

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
        markers: [],
        zoom: 6
    }
}

class CardBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const {data, selectedIndex, onClick} = this.props
        return (
            <div>
                {data && data.map((dt, i) => {
                    return (
                        <div 
                            key={i} 
                            className={'display-flex padding-15px ' + (i !== (data.length - 1) ? 'border-bottom' : '')} 
                            style={{ backgroundColor: selectedIndex === i ? '#f5f5f5' : '', cursor: 'pointer' }}
                            onClick={() => onClick(i)}>
                            <div style={{width: 50, marginRight: 10}}>
                                <div className="image image-50px" style={{borderRadius: 5, backgroundColor: '#999', textAlign: 'center'}}>
                                    <i className="post-top fa fa-lw fa-store-alt" style={{ color: '#fff', fontSize: 24 }} />
                                </div>
                            </div>
                            <div style={{width: 'calc(100% - 65px)'}}>
                                <div style={{marginBottom: 5}} className="display-flex space-between">
                                    <div>
                                        <span className="txt-site txt-10 txt-main txt-bold">{ dt.title }</span>
                                        <i className="fa fa-lw fa-circle" style={{color: dt.status === 'active' ? 'green' : 'orange', fontSize: 10, marginLeft: 5}} />
                                    </div>
                                    <div className="txt-site txt-9 txt-primary txt-underline">{ dt.location }</div>
                                </div>
                                <div className="txt-site txt-9 txt-primary">{ dt.address }</div>
                                <div className="txt-site txt-9 txt-primary">{ dt.city }, { dt.post }</div>
                                {dt.isDiscounted && (
                                    <div style={{marginTop: 10}} className="display-flex">
                                        <button className="btn btn-small btn-green" style={{marginRight: 5}}>
                                            <i className="icn icn-left fa fa-lw fa-dollar-sign" /> View Discount
                                        </button>
                                        <button className="btn btn-small btn-sekunder">
                                            Make Appointment
                                        </button>
                                    </div>
                                )}
                            </div>
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
            mapData: defaultPayload,
            visiblePopup: false,
            selectedIndex: 0,
            selectedBarIndex: null,
            selectedData: null,
            rawData: [
                {cover: '', status: 'active', title: 'American Best Automotive', isDiscounted: true, phone: '022-221-221-22', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.78 ml', lat: -6.455732, lng: 106.806456},
                {cover: '', status: 'active', title: 'Hendrik Chevrolet', isDiscounted: false, phone: '022-221-221-22', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.98 ml', lat: -6.927006, lng: 107.507334},
                {cover: '', status: '', title: 'The Muffler Shop', isDiscounted: false, phone: '022-221-221-22', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '1.64 ml', lat: -6.961576, lng: 108.626126},
                {cover: '', status: 'active', title: 'Auto 1 Ave / Dba: Lucky Auto Bufford', isDiscounted: true, phone: '022-221-221-22', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.22 ml', lat: -3.058365, lng: 104.823815},
                {cover: '', status: 'active', title: 'Mall Of Georgia Chrysler', isDiscounted: false, phone: '022-221-221-22', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '1.78 ml', lat: -0.728515, lng: 112.144271},
                {cover: '', status: '', title: 'Full Line Auto Care', isDiscounted: false, phone: '022-221-221-22', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.78 ml', lat: -7.205156, lng: 112.155243},
                {cover: '', status: '', title: 'Firestone Complete Auto Care', isDiscounted: false, phone: '022-221-221-22', address: '4525 South Lee Street', city: 'Buford', post: 'GA 30518', location: '0.98 ml', lat: -1.070464, lng: 101.106563},
            ],
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

    componentDidMount () {
        const {selectedBarIndex} = this.state
        this.updateMapMarker(selectedBarIndex)
    }

    updateMapMarker (index) {
        const { rawData, mapData, selectedBarIndex } = this.state
        const barIndex = selectedBarIndex === index ? null : index
        let markers = rawData && rawData.map((dt, i) => {
            const stt = index === i ? barIndex !== null ? true : false : false
            return {
                id: i,
                title: dt.title,
                icon: "fa fa-lg fa-map-marker-alt",
                tooltip: <MapTooltip data={dt} onClickDetail={(data) => this.setState({visiblePopup: true, selectedData: data})} />,
                status: dt.status,
                isHover: false,
                isSonar: false,
                isActive: stt,
                lat: dt.lat,
                lng: dt.lng
            }
        })
        this.setState({selectedBarIndex: barIndex, mapData: {...mapData, map: {...mapData.map, markers: markers}}})
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
        const { navigator, rawData, mapData, selectedBarIndex, visiblePopup, selectedData } = this.state
        const discounted = [
            {title: 'Fleet Maintenance Package', price: '$14.99', description: 'All items listed as part of the Complete Vehicle Inspection plus Brake Inspection and Tire Rotation'},
            {title: 'Synthetic Oil Change (w/ filter up to 5 quarts)', price: '$52.49', description: 'Some filters may be priced higher $3.99'},
            {title: 'Diesel Oil Change (w/ filter up to 5 quarts)', price: '$42.99', description: 'Some filters may be priced higher $3.99'}
        ]
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
                        <CardBar data={rawData} selectedIndex={selectedBarIndex} onClick={(index) => this.updateMapMarker(index)} />
                    </div>
                    <div style={{width: 'calc(100% - 400px)', height: 'calc(100vh - 172px)'}}>
                        <SimpleGoogleMap 
                            zoom={mapData.map.zoom}
                            center={mapData.map.center}
                            markers={mapData.map.markers}
                            enableIconMarker={false}
                            onCloseMarker={(e) => console.log('e', e)}
                            onClickMarker={(e) => console.log('e', e)} />
                    </div>
                </div>

                {visiblePopup && (
                    <div className="app-popup app-popup-show">
                        <div style={{padding: 15}} />
                        <div className="popup-content-small background-white border-radius shadow">
                            {/* { selectedData } */}
                            <div className="padding-15px display-flex border-bottom">
                                <div style={{width: 70, marginRight: 15}}>
                                    <div className="image image-70px" style={{borderRadius: 5, backgroundColor: '#999', textAlign: 'center'}}>
                                        <i className="post-top fa fa-lw fa-store-alt" style={{ color: '#fff', fontSize: 24 }} />
                                    </div>
                                </div>
                                <div style={{width: 'calc(100% - 120px)'}}>
                                    <div className="txt-site txt-18 txt-main txt-bold" style={{marginBottom: 10}}>{ selectedData.title }</div>
                                    <div className="display-flex">
                                        <div style={{marginRight: 15}}>
                                            <i className="fa fa-lw fa-circle" style={{color: selectedData.status === 'active' ? 'green' : 'orange', fontSize: 12, marginRight: 5}} />
                                            <span className="txt-site txt-10 txt-primary">{selectedData.status === 'active' ? 'Active' : 'Inactive'}</span>
                                        </div>
                                        <div className="card-value grey">
                                            National Provider
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 45}}>
                                    <button className="btn btn-grey btn-icon" onClick={() => this.setState({visiblePopup: false})}>
                                        <i className="fa fa-lg fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="padding-15px display-flex">
                                <div className="width width-40">
                                    <div className="display-flex" style={{marginBottom: 15}}>
                                        <div style={{width: 30}}>
                                            <i className="txt-site txt-main txt-9 fa fa-lw fa-map-marker-alt" />
                                        </div>
                                        <div style={{width: 'calc(100% - 30px)', paddingTop: 3}}>
                                            <div className="txt-site txt-10 txt-main">{ selectedData.address }</div>
                                            <div className="txt-site txt-10 txt-main">{ selectedData.city }, { selectedData.post }</div>
                                        </div>
                                    </div>
                                    <div className="display-flex" style={{marginBottom: 15}}>
                                        <div style={{width: 30}}>
                                            <i className="txt-site txt-main txt-9 fa fa-lw fa-phone" />
                                        </div>
                                        <div style={{width: 'calc(100% - 30px)', paddingTop: 3}}>
                                            <div className="txt-site txt-10 txt-safe">{ selectedData.phone }</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="width width-60">
                                    <div style={{width: '100%', height: 200, backgroundColor: '#f5f5f5'}}>
                                        <SimpleGoogleMap 
                                            zoom={mapData.map.zoom}
                                            center={{
                                                ...mapData.map.center,
                                                lat: selectedData.lat,
                                                lng: selectedData.lng
                                            }}
                                            markers={[
                                                {
                                                    id: 0,
                                                    title: selectedData.title,
                                                    icon: "fa fa-lg fa-map-marker-alt",
                                                    tooltip: null,
                                                    status: selectedData.status,
                                                    isHover: false,
                                                    isSonar: false,
                                                    isActive: false,
                                                    lat: selectedData.lat,
                                                    lng: selectedData.lng
                                                }
                                            ]}
                                            enableIconMarker={false}
                                            onCloseMarker={(e) => console.log('e', e)}
                                            onClickMarker={(e) => console.log('e', e)} />
                                    </div>
                                    <div className="display-flex right" style={{marginTop: 10}}>
                                        <button className="btn btn-small btn-sekunder">
                                            View in Google Map <i className="icn icn-right fa fa-lw fa-external-link-alt" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px border-bottom">
                                <div className="display-flex">
                                    <div style={{width: 30}}>
                                        <i className="txt-site txt-main txt-9 fa fa-lw fa-dollar-sign" />
                                    </div>
                                    <div style={{width: 'calc(100% - 30px)', paddingTop: 3}}>
                                        <div className="txt-site txt-10 txt-main txt-bold">Discounted Services</div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-15px" style={{paddingTop: 0}}>
                                {discounted && discounted.map((dt, i) => {
                                    return (
                                        <div key={i} className={"display-flex space-between padding-10px " + (i !== (discounted.length - 1) ? 'border-bottom' : '')}>
                                            <div style={{width: 'calc(50% - 7px)', marginRight: 7}} className="content-right">
                                                <div className="txt-site txt-10 txt-primary txt-bold">{dt.title}</div>
                                            </div>
                                            <div style={{width: 'calc(50% - 7px)', marginLeft: 7}}>
                                                <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 5}}>{dt.price}</div>
                                                <div className="txt-site txt-10 txt-primary">{dt.description}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div style={{padding: 15}} />
                    </div>
                )}

            </div>
        )
    }
}

export default Pages