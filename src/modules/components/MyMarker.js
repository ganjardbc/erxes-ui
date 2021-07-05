import React, {Component} from "react"
import './styles.css'

const styles = {
    container: {
        position: 'relative',
        top: '0px',
        left: '0px'
    }
}

class MyMarker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfoWindow: false
        }
    }

    handleClick = e => {
        this.setState({
            showInfoWindow: !this.state.showInfoWindow
        })
        const payload = {
            lat: this.props.lat,
            lng: this.props.lng
        }
        this.props.centerData(payload)
        this.handleClickOutside(document.getElementById('tooltip'))
    }

    handleClickOutside(element) {
        const outsideclickListener = (event) => {
            // if (!element.contains(event.target)) {
            //     removeClickListener()
            // }
            removeClickListener()
        }
    
        const removeClickListener = () => {
            document.removeEventListener('click', outsideclickListener)
        }
    
        document.addEventListener('click', outsideclickListener)
    }

    render () {
        const { text, isSonar, type, tooltip, tooltipColor, icon, $hover } = this.props
        const { showInfoWindow } = this.state
        return (
            <div style={styles.container}>
                {isSonar ? (
                    <div
                        onClick={() => this.handleClick()}
                        className="sonar-wrapper">
                        <div class={$hover ? "sonar-text hover" : "sonar-text"} title={text}>
                            <i className={icon} />
                        </div>
                        {/* <div className="sonar-emitter"></div> */}
                        <div className="sonar-wave"></div>
                    </div>
                ) : (
                    <div 
                        onClick={() => this.handleClick()}
                        className={(type === 'marker') ? $hover ? "circle marker hover" : "circle marker" : $hover ? "circle hover" : "circle"} 
                        title={text}>
                        <i className={(type === 'marker') ? icon : "circle-text " + icon} />
                    </div>
                )}
 
                {/* {isHover 
                ? $hover && tooltip && (
                    <div className={"tooltip " + tooltipColor}>
                        { tooltip }
                        <i className="icn fa fa-lg fa-caret-down" />
                    </div>
                ) 
                : tooltip && (
                    <div className={"tooltip " + tooltipColor}>
                        { tooltip }
                        <i className="icn fa fa-lg fa-caret-down" />
                    </div>
                )} */}

                {showInfoWindow && tooltip && (
                    <div
                        title="Click to close this callout" 
                        className={"tooltip " + tooltipColor} 
                        style={{cursor: 'default'}} 
                        onClick={() => this.handleClick()}>
                        { tooltip }
                        {/* <button 
                            onClick={() => this.handleClick()}
                            className="btn btn-small-circle btn-sekunder" 
                            style={{position: 'absolute', top: '-20px', right: '-20px'}}>
                            <i className="fa fa-1x fa-times" />
                        </button> */}
                        <i className="icn fa fa-lg fa-caret-down" />
                    </div>
                )}
            </div>
        )
    }
}

export default MyMarker;
