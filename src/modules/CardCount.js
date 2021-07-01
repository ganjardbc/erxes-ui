import React, { Component } from 'react'

class CardCount extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const {data, rows, isReverse} = this.props
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
                        <div key={i} style={{padding: '10px 0', width: width}} className={isReverse ? "display-flex column-reverse" : "display-flex column"}>
                            <div className="txt-site txt-10 txt-main txt-bold" style={{margin: '2px 0'}}>{ dt.title }</div>
                            <div className="txt-site txt-18 txt-safe txt-bold" style={{margin: '2px 0'}}>{ dt.value }</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardCount