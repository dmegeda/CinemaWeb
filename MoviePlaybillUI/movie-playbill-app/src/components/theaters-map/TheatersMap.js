import React, {Component} from "react";
import {compose, withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import TheaterMapMarker from "../theater-map-marker/TheaterMapMarker";

class TheatersMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapDefaultCenter: null,
            mapDefaultZoom: null,
            theatersInfo: []
        };

        //this.renderMarkers = this.renderMarkers.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            ...prevState,
            theatersInfo: nextProps.markers,
            mapDefaultCenter: nextProps.defaultCenter,
            mapDefaultZoom: nextProps.defaultZoom,
        }
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
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDEF0JPX_3WUjbDCoueiPccgVlH5NP8MYA&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `700px` }} />,
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
                        return (
                            <TheaterMapMarker position={theater.coords} link={theater.siteUrl}/>
                            /*<TheaterMapMarker position={theater} />*/
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