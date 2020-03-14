import React, {Component} from "react";
import TheaterCriteriaBar from "../../components/theater-criteria-form/TheaterCriteriaBar";
import TheatersMap from "../../components/theaters-map/TheatersMap";
import './Theaters.css';

class Theaters extends Component {
    render() {
        return (
            <div>
                <h2 className="pageSectionCaption">Кінотеатри</h2>
                <div id="mapContainer">
                    <TheaterCriteriaBar id="theaterSelectPane"/>
                    <TheatersMap id="theatersMap"/>
                </div>
            </div>
        );
    }
}

export default Theaters;