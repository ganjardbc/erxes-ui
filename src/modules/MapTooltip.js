import React, { Component } from 'react'

class CardTooltip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null ,
            visiblePopup: false
        }
    }

    componentDidMount() {}

    render() {
        const { data, onClickDetail } = this.props
        return (
            <div>
                <div className="background-white shadow" style={{border: '1px rgba(0,0,0,0.1) solid', backgroundColor: '#fff', padding: '0 0', cursor: 'default'}}>
                    <div className={'display-flex padding-15px'} style={{ cursor: 'pointer' }}>
                        <div style={{width: 50, marginRight: 10}}>
                            <div className="image image-50px" style={{borderRadius: 5, backgroundColor: '#999', textAlign: 'center'}}>
                                <i className="post-top fa fa-lw fa-store-alt" style={{ color: '#fff', fontSize: 24 }} />
                            </div>
                        </div>
                        <div style={{width: 'calc(100% - 65px)'}}>
                            <div className="txt-site txt-10 txt-main txt-bold" style={{marginBottom: 5}}>{ data.title }</div>
                            <div style={{marginBottom: 5}} className="display-flex">
                                <div style={{marginRight: 10}}>
                                    <i className="fa fa-lw fa-circle" style={{color: data.status === 'active' ? 'green' : 'orange', fontSize: 11, marginRight: 5}} />
                                    <span className="txt-site txt-9 txt-primary">{data.status === 'active' ? 'Active' : 'Inactive'}</span>
                                </div>
                                <div>
                                    <i className="fa fa-lw fa-map-marker-alt" style={{color: '#999', fontSize: 11, marginRight: 5}} />
                                    <span className="txt-site txt-9 txt-primary">{ data.location }</span>
                                </div>
                            </div>
                            <div className="txt-site txt-9 txt-primary">{ data.address }</div>
                            <div className="txt-site txt-9 txt-primary">{ data.city }, { data.post }</div>

                            <div style={{marginTop: 10}}>
                                {data.isDiscounted && (
                                    <button className="btn btn-small btn-green" style={{marginRight: 5}} onClick={() => onClickDetail(data)}>
                                        <i className="fa fa-lw fa-dollar-sign" style={{marginRight: 3}} /> View Discount
                                    </button>
                                )}
                                <button className="btn btn-main btn-small" onClick={() => onClickDetail(data)}>
                                    View Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTooltip