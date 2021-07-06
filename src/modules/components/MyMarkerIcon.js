import React, {Component} from "react"
import './styles.css'

const styles = {
    container: {
        position: 'relative',
        top: '0px',
        left: '0px'
    }
}

class MyMarkerIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    setCenterPosition = () => {
        const payload = {
            lat: this.props.lat,
            lng: this.props.lng
        }
        this.props.centerData(payload)
    }

    render () {
        // const { text } = this.props
        const { onClick, isHover, isSonar, isActive, tooltip, tooltipColor, type, icon, $hover } = this.props
        return (
            <div style={styles.container}>
                {isSonar ? (
                    <div
                        onClick={() => {
                            onClick()
                            this.setCenterPosition()
                        }}
                        className="sonar-wrapper">
                        <div 
                            class={$hover ? "sonar-text hover" : "sonar-text"} 
                            // title={text}
                        >
                            <i className={icon} />
                        </div>
                        <div className="sonar-wave"></div>
                    </div>
                ) : (
                    <div 
                        onClick={() => {
                            onClick()
                            this.setCenterPosition()
                        }}
                        className={(type === 'marker') ? $hover ? "circle marker hover" : "circle marker" : $hover ? "circle hover" : "circle"} 
                        style={{border: isActive ? '2px #ff5500 solid' : null, backgroundColor: isActive ? '#ff5500' : null}}
                        // title={text}
                    >
                        <i className={(type === 'marker') ? icon : "circle-text " + icon} style={{color : isActive ? '#fff' : null}} />
                    </div>
                )}

                {isHover && $hover && tooltip && (
                    <div className={"tooltip " + tooltipColor} style={{width: '350px', margin: 'auto', left: '-167px'}}>
                        { tooltip }
                        <i className="icn fa fa-lg fa-caret-down" />
                    </div>
                )}
            </div>
        )
    }
}

export default MyMarkerIcon;
