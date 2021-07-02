import React, { Component } from 'react'

class CardMenu extends Component {
    constructor () {
        super()
        this.state = {}
    }
    render () {
        const {data, reverseIcon} = this.props 
        return (
            <div style={{width: '100%'}}>
            {data && data.map((dt, i) => {
                return (
                    <div className="card-notif" style={{cursor: 'pointer', paddingTop: 7, paddingBottom: 7, flexDirection: reverseIcon ? 'row-reverse' : 'row'}} key={i}>
                        <div style={{width: 'calc(100% - 30px)'}}>
                            <div className="txt-site txt-10 txt-bold txt-main">{ dt.title }</div>
                        </div>
                        <div style={{width: 30, height: 17, textAlign: 'center'}}>
                            {dt.enableIcon && <i className={"txt-site txt-9 txt-primary " + (dt.icon ? dt.icon : 'fa fa-lw fa-external-link-alt')} style={{position: 'relative', top: -3, color: dt.iconColor ? dt.iconColor : ''}} />}
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default CardMenu