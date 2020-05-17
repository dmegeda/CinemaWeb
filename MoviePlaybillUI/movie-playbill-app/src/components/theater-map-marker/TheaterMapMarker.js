import React, {Component} from 'react';
import {Marker} from 'react-google-maps';

class TheaterMapMarker extends Component {
    
    onMarkerClick = () => {
        window.open(this.props.link, '_blank');
    };

    render() {
        return (
            <Marker onClick={this.onMarkerClick} {...this.props} />
        );
    }
}

export default TheaterMapMarker;
