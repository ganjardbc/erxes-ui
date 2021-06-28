import React, { Component } from 'react'

class CardMenu extends Component {
    constructor () {
        super()
        this.state = {}
    }
    render () {
        const {data} = this.props 
        return (
            <div style={{width: '100%'}}>
            {data && data.map((dt, i) => {
                return (
                    <div className="card-notif" style={{cursor: 'pointer', paddingTop: 5, paddingBottom: 5}} key={i}>
                        <div style={{width: 'calc(100% - 30px)'}}>
                            <div className="txt-site txt-11 txt-bold txt-main">{ dt.title }</div>
                        </div>
                        <div style={{width: 30, height: 20, textAlign: 'center'}}>
                            {dt.enableIcon && <i className={"txt-site txt-9 txt-primary " + (dt.icon ? dt.icon : 'fa fa-lw fa-external-link-alt')} />}
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default CardMenu