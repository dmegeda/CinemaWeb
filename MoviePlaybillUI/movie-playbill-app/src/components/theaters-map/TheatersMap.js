import React, {Component} from "react";
import {compose, withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import TheaterMapMarker from "../theater-map-marker/TheaterMapMarker";

class TheatersMap extends Component {
    componentDidMount() {
        const mapDefaultCenterValue = {
            lat: 50.455390,
            lng: 30.634826
        };

        const mapDefaultZoomValue = 13;

        const theatersValue = [
            {
                coords: {
                    lat: 50.455390,
                    lng: 30.634826
                },
                siteUrl: "https://multiplex.ua/"
            },
            {
                coords: {
                    lat: 50.453470,
                    lng: 30.598864
                },
                siteUrl: "https://oskar.kyiv.ua/"
            },
            {
                coords: {
                    lat: 50.445075,
                    lng: 30.520615
                },
                siteUrl: "https://planetakino.ua/"
            },
        ];

        this.setState({
            mapDefaultCenter: mapDefaultCenterValue,
            mapDefaultZoom: mapDefaultZoomValue,
            theatersInfo: theatersValue
        })
    }

    render() {
        const MapComponent = compose(
            withProps({
                googleMapURL:
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDEF0JPX_3WUjbDCoueiPccgVlH5NP8MYA&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `500px` }} />,
                mapElement: <div style={{ height: `100%` }} />
            }),
            withScriptjs,
            withGoogleMap
        )(props => (
            <GoogleMap
                defaultZoom={this.state.mapDefaultZoom}
                defaultCenter={this.state.mapDefaultCenter}>
                {
                    this.state.theatersInfo.map((theater) => {
                        return (
                            <TheaterMapMarker position={theater.coords} link={theater.siteUrl}/>
                        )
                    })
                }
            </GoogleMap>
        ));

        return (
            <div id={this.props.id}>
                <MapComponent />
            </div>
        );
    }
}

export default TheatersMap;