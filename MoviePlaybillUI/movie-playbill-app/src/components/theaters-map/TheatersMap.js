import React, {Component} from "react";
import {compose, withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import TheaterMapMarker from "../theater-map-marker/TheaterMapMarker";
import {GOOGLE_MAPS_API_KEY} from "../../constants/apiKeys";

class TheatersMap extends Component {

    state = {
        mapDefaultCenter: null,
        mapDefaultZoom: null,
        theatersInfo: []
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            ...prevState,
            theatersInfo: nextProps.markers,
            mapDefaultCenter: nextProps.defaultCenter,
            mapDefaultZoom: nextProps.defaultZoom,
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !(this.state.theatersInfo === nextState.theatersInfo &&
            this.state.mapDefaultCenter === nextState.mapDefaultCenter &&
            this.state.mapDefaultZoom === nextState.mapDefaultZoom);
    }

    // changeMarkersInState(newMarkers) {
    //     this.setState({
    //         mapDefaultCenter: this.state.mapDefaultCenter,
    //         mapDefaultZoom: this.state.mapDefaultZoom,
    //         theatersInfo: newMarkers
    //     })
    // }

    // renderMarkers() {
    //     this.state.theatersInfo.map((theater) => {
    //         return (
    //             <TheaterMapMarker position={theater.coords} link={theater.siteUrl}/>
    //         )
    //     })
    // }

    render() {
        const MapComponent = compose(
            withProps({
                googleMapURL:
                    `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `100%` }} />,
                mapElement: <div style={{ height: `100%` }} />
            }),
            withScriptjs,
            withGoogleMap
        )(props => {
            // const {markers} = props;
            // if(markers) {
            //     this.changeMarkersInState([]);
            //     this.changeMarkersInState(markers);
            // }
            return (
                <GoogleMap
                defaultZoom={this.state.mapDefaultZoom}
                defaultCenter={this.state.mapDefaultCenter}>
                {
                    this.state.theatersInfo.map((theater) => {
                        const key = theater.coords.lat + "/" + theater.coords.lng;
                        return (
                            <TheaterMapMarker position={theater.coords} link={theater.siteUrl} key={key}/>
                        )
                    })
                }
                </GoogleMap>
            )
        });

        return (
            <div id={this.props.id}>
                <MapComponent />
            </div>
        );
    }
}

export default TheatersMap;
