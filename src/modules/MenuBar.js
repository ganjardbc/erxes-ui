import React, { Component } from 'react'

class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
    	    nextStep: 0
        }
    }

    componentDidUpdate() {
        // console.log(this.state.nextStep)
    }

    render() {
        const {data} = this.props
        return (
            <div>
                <ul className="menu-side" style={{paddingTop: 10, paddingBottom: 10}}>
                    {data && data.map((dt, i) => {
                        return (
                            <li className={dt.status} data-id={i} onClick={this.props.onClick.bind(this)}>
                                {dt.icon && (
                                    <div className="ms-icn">
                                        <i className={dt.icon ? dt.icon : "fa fa-lw fa-th-large"} />
                                    </div>
                                )}
                                <div className="ms-label">
                                    { dt.title }
                                </div>
                                <div className="ms-val">
                                    { dt.value }
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default MenuBar