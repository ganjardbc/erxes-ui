import React, { Component } from 'react'
import GoogleMapReact from "google-map-react"
import MyMarker from "./components/MyMarker"
import MyMarkerIcon from "./components/MyMarkerIcon"

const defaultProps = {
    center: {
        lat: -6.8978388,
        lng: 107.617426
    }, 
    zoom: 15
}


class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...defaultProps,
            center: props.center ? props.center : defaultProps.center,
            zoom: props.zoom ? props.zoom : defaultProps.zoom
        }
    }

    componentDidMount() {}

    componentDidUpdate(prevProps) {
        if (this.props.center !== prevProps.center) this.setState({ center: this.props.center })
        if (this.props.zoom !== prevProps.zoom) this.setState({ zoom: this.props.zoom })
    }

    onChildMouseEnter = () => {
        console.log('you got me!!')
    }

    onChildMouseLeave = () => {
        console.log('you got me!!')
    }

    render() {
        const { markers, onClickMarker, enableIconMarker } = this.props
        const { center, zoom } = this.state
        return (
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCwSU3X0g45NYWtLcuw4sQBpfRITsIoDCU',
                    language: "id",
                    region: "ID"
                }}
                center={center}
                zoom={zoom}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers && markers.map((value) => {
                    return enableIconMarker ? (
                        <MyMarkerIcon 
                            key={value.id} 
                            lat={value.lat} 
                            lng={value.lng} 
                            text={value.title} 
                            isSonar={value.isSonar}
                            isHover={true} 
                            isActive={value.isActive}
                            icon={value.icon} 
                            tooltip={value.tooltip}
                            centerData={(e) => this.setState({center: e})}
                            onClick={() => onClickMarker(value)}
                        />
                    ) : (
                        <MyMarker 
                            key={value.id} 
                            lat={value.lat} 
                            lng={value.lng} 
                            text={value.title} 
                            isSonar={value.isSonar}
                            isHover={true} 
                            icon={value.icon} 
                            tooltip={value.tooltip}
                            centerData={(e) => this.setState({center: e})}
                            onClick={() => onClickMarker()}
                        />
                    );
                })}
            </GoogleMapReact>
        )
    }
}

export default Container