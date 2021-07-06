import React, {Component} from "react"
import './styles.css'

const styles = {
    container: {
        position: 'relative'
    }
}

class MyMarker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfoWindow: false
        }
    }
    componentDidUpdate (prevProps) {
        const {isActive} = this.props
        if (isActive !== prevProps.isActive) {
            this.handleClick()
        }
    }

    handleClick = e => {
        this.setState({ showInfoWindow: !this.state.showInfoWindow })
        const payload = {
            lat: this.props.lat,
            lng: this.props.lng
        }
        this.props.centerData(payload)
        // this.handleClickOutside(document.getElementById('tooltip'))
    }

    handleClickOutside(element) {
        const outsideclickListener = (event) => {
            if (!element.contains(event.target)) {
                removeClickListener()
            }
            removeClickListener()
        }
    
        const removeClickListener = () => {
            document.removeEventListener('click', outsideclickListener)
        }
    
        document.addEventListener('click', outsideclickListener)
    }

    render () {
        const { text, isSonar, type, tooltip, status, tooltipColor, icon, $hover } = this.props
        const { showInfoWindow } = this.state
        const bgColor = status === 'active' ? 'green' : 'orange'
        return (
            <div style={styles.container}>
                {isSonar ? (
                    <div
                        onClick={() => this.handleClick()}
                        className="sonar-wrapper">
                        <div class={$hover ? "sonar-text hovers" : "sonar-text"} title={text}>
                            <i className={icon} />
                        </div>
                        <div className="sonar-wave"></div>
                    </div>
                ) : (
                    <div 
                        onClick={() => this.handleClick()}
                        className={(type === 'marker') ? $hover ? "circle marker hovers" : "circle marker" : $hover ? "circle hovers" : "circle"} 
                        style={{backgroundColor: showInfoWindow ? 'red' : bgColor, borderColor: showInfoWindow ? 'red' : bgColor}}
                        title={text}>
                        <i className={(type === 'marker') ? icon : "circle-text " + icon} style={{color: showInfoWindow ? '#fff' : '#fff'}} />
                    </div>
                )}

                {showInfoWindow && tooltip && (
                    <div className={"tooltip " + tooltipColor}>
                        { tooltip }
                        <button 
                            onClick={() => this.handleClick()}
                            className="btn btn-small-circle btn-grey" 
                            style={{position: 'absolute', top: '0', right: '0'}}>
                            <i className="fa fa-1x fa-times" />
                        </button>
                        <i className="icn fa fa-lg fa-caret-down" />
                    </div>
                )}
            </div>
        )
    }
}

export default MyMarker;
