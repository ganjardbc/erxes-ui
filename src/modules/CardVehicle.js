import React, { Component } from 'react'

class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const {data, rows} = this.props
        let width = 'calc(100% / 4)'
        switch (rows) {
            case '4':
                width = 'calc(100% / 4)'
                break;
            case '3':
                width = 'calc(100% / 3)'
                break;
            case '2':
                width = 'calc(100% / 2)'
                break;
            default:
                width = 'calc(100% / 4)'
                break;
        }
        return (
            <div className="display-flex wrap">
                {data && data.map((dt, i) => {
                    return (
                        <div key={i} style={{width: width}}>
                            <div style={{margin: 10}}>
                                <div className="card no-margin no-radius border-all">
                                    <div className="image image-middle overflow">
                                        <img className="img" src={dt.cover} alt="" />
                                    </div>
                                    <div style={{paddingLeft: 10, paddingRight: 10}}>
                                        <div className="display-flex space-between border-bottom" style={{paddingTop: 5, paddingBottom: 5}}>
                                            <div className="display-flex" style={{width: 'calc(100% - 35)', paddingTop: 5}}>
                                                <div style={{width: 20}}>
                                                    <i className="txt-site txt-10 txt-primary fa fa-lw fa-image" />
                                                </div>
                                                <div style={{width: 'calc(100% - 20px)'}}>
                                                    <div className="txt-site txt-9 txt-main" style={{margin: '2px 0'}}>{ dt.title }</div>
                                                </div>
                                            </div>
                                            <button className="btn btn-small-circle btn-grey">
                                                <i className="fa fa-lw fa-ellipsis-v" />
                                            </button>
                                        </div>
                                        <div className="display-flex" style={{paddingTop: 10, paddingBottom: 10}}>
                                            <div className="background-orange" style={{padding: '5px 8px', borderRadius: 3}}>
                                                <div className="txt-site txt-9 txt-white" style={{margin: '2px 0'}}>{ dt.type }</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardVehicle