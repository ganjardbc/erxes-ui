import React, { Component } from 'react'

class Pages extends Component {
    constructor () {
        super()
        this.state = {
            dataLabel: [
                {title: 'Small - 1" x 2 - 5/8"', description: 'Avery 5160/8160', sheet: '30 per sheet', isSelected: true},
                {title: 'Large - 2" x 4"', description: 'Avery 5163/8163', sheet: '10 per sheet', isSelected: false}
            ]
        }
    }

    onChangeLabel = (idx) => {
        const {dataLabel} = this.state
        const newData = dataLabel && dataLabel.map((dt, i) => {
            const stt = (i === idx) ? true : false
            return {...dt, isSelected: stt}
        })

        this.setState({dataLabel: newData})
    }

    render () {
        const {dataLabel} = this.state
        const countLabel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
        return (
            <div className="main-content">
                <div className="card no-margin no-padding no-hover no-radius border-all">
                    <div className="display-flex">
                        <div style={{width: 'calc(100% - 400px)'}}>
                            <div className="padding-15px border-bottom">
                                <div className="txt-site txt-16 txt-main txt-bold">Print Labels</div>
                            </div>
                            <div className="display-flex">
                                <div className="width width-50">
                                    <div className="padding-15px">
                                        <div className="txt-site txt-11 txt-main txt-bold">1. Select items to print</div>
                                        <div className="card-form">
                                            <div className="cf-input width width-100" style={{paddingTop: 10}}>
                                                <label className="radio">
                                                    <input type="radio" name="status" />
                                                    <span className="checkmark" />
                                                    <span className="txt-site txt-10 txt-bold txt-main">
                                                        All Vehicle (83)
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="cf-input width width-100" style={{paddingTop: 10}}>
                                                <label className="radio">
                                                    <input type="radio" name="status" />
                                                    <span className="checkmark" />
                                                    <span className="txt-site txt-10 txt-bold txt-main">
                                                        Selected Vehicle (0)
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="padding-15px">
                                        <div className="txt-site txt-11 txt-main txt-bold">2. Set quantity per vehicle</div>
                                        <div className="card-form">
                                            <div style={{width: 200, paddingTop: 10}}>
                                                <input type="number" className="cf-input txt txt-sekunder" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="width width-50">
                                    <div className="padding-15px">
                                        <div className="txt-site txt-11 txt-main txt-bold">3. Choose label size</div>
                                        <div>
                                            {dataLabel && dataLabel.map((dt, i) => {
                                                return (
                                                    <div 
                                                        key={i} className="padding-15px" 
                                                        onClick={() => this.onChangeLabel(i)}
                                                        style={{marginTop: 10, marginBottom: 10, borderWidth: 2, borderColor: dt.isSelected ? '#529ecc' : '#999', borderStyle: 'solid', borderRadius: 5, cursor: 'pointer'}}>
                                                        <div className="display-flex align-center">
                                                            <div style={{width: 40, paddingTop: 10}}>
                                                                <i 
                                                                    className={"post-top " + (dt.isSelected ? 'fa fa-lg fa-check-circle' : 'far fa-lg fa-circle')}
                                                                    style={{color: dt.isSelected ? '#529ecc' : '#999'}}
                                                                    />
                                                            </div>
                                                            <div style={{width: 'calc(100% - 120px)'}}>
                                                                <div className="txt-site txt-11 txt-main txt-bold" style={{marginBottom: 20}}>{ dt.title }</div>
                                                                <div className="txt-site txt-10 txt-primary">{ dt.description }</div>
                                                                <div className="txt-site txt-10 txt-primary">{ dt.sheet }</div>
                                                            </div>
                                                            <div style={{width: 80, height: '100%'}}>
                                                                <div className="image image-padding">
                                                                    <img className="img" src={'https://seekvectorlogo.net/wp-content/uploads/2018/10/avery-products-corporation-vector-logo.png'} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="padding-15px">
                                        <div style={{paddingBottom: 15}} className="border-bottom">
                                            <i className="txt-site txt-9 txt-yellow fa fa-lw fa-star" style={{marginRight: 5}} />
                                            <span className="txt-site txt-10 txt-main txt-bold">For small labels we recommended:</span>
                                        </div>
                                        <div style={{paddingTop: 15}}>
                                            <div className="txt-site txt-10 txt-safe">Avery 8160 (Inkjet) - 1 x 2.62 Inches</div>
                                            <div className="txt-site txt-10 txt-safe">Avery S160 (Laser) - 1 x 2.62 Inches</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{position: 'relative', width: 400, height: 600, backgroundColor: '#f5f5f5'}}>
                            <div className="post-top" style={{width: 280, margin: 'auto'}}>
                                <div style={{marginBottom: 20}}>
                                    <div className="txt-site txt-11 txt-main">TEMPLATE PREVIEW</div>
                                    <div style={{paddingTop: 5, paddingBottom: 10}}>
                                        <div className="card no-margin no-radius no-hover border-all box-shadow" style={{borderRadius: 0, height: 328}}>
                                            <div className="display-flex wrap" style={{padding: 2}}>
                                                {countLabel && countLabel.map((dt, i) => {
                                                    return (
                                                        <div key={i} style={{width: 'calc(100% / 3)'}}>
                                                            <div style={{margin: 2}}>
                                                                <div style={{width: '100%', height: 40, borderStyle: 'solid', borderWidth: 1, borderColor: '#555'}}></div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="txt-site txt-11 txt-main">LABEL PREVIEW</div>
                                    <div style={{paddingTop: 5, paddingBottom: 10}}>
                                        <div className="card no-margin no-radius no-hover border-all box-shadow">
                                            <div style={{width: '100%', height: 100}}>
                                                <div className="post-top center">
                                                    <div style={{width: 100, height: 45, margin: 'auto', marginBottom: 5, backgroundColor: '#f5f5f5'}}></div>
                                                    <div className="txt-site txt-11 txt-main txt-bold txt-center">Vehicle Name</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-15px display-flex space-between">
                        <button className="btn btn-primary">
                            Close 
                        </button>
                        <button className="btn btn-main">
                            Generate Template
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Pages