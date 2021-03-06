import React, {Component} from "react";
import TheaterCriteriaBar from "../../components/theater-criteria-bar/TheaterCriteriaBar";
import TheatersMap from "../../components/theaters-map/TheatersMap";
import './Theaters.css';
import OutsideAlerter from "../../components/outside-alerter/OutsideAlerter";

class Theaters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilterSidebarShown: false,
            suitableTheaters: [],
            mapCenter: {},
            mapZoom: 0
        };

        this.hideSidePanel = this.hideSidePanel.bind(this);
        this.updateMapData = this.updateMapData.bind(this);
        this.updateMapDataFromHideablePanel = this.updateMapDataFromHideablePanel.bind(this);
        this.onShowFiltersSidebarBtnClick = this.onShowFiltersSidebarBtnClick.bind(this);
    }

    componentDidMount() {
        //fetch data from server and save to the state
        //JSON.stringify
        const dataFromServer = {
            theaters: [
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
            ],
            mapCenter: {
                lat: 50.45466,
                lng: 30.5238
            },
            mapZoom: 12
        };
        const {theaters, mapCenter, mapZoom} = dataFromServer;
        this.setState({
            suitableTheaters: theaters,
            mapCenter: mapCenter,
            mapZoom: mapZoom
        });

        window.addEventListener('resize', () => {
            if(window.innerWidth > 1024 && this.state.isFilterSidebarShown) {
                this.hideSidePanel();
                this.setState({isFilterSidebarShown: false})
            }
        });
    }

    hideSidePanel() {
        document.getElementsByClassName("hideablePanelContainer")[0].style.display = "none";
        this.setState({isFilterSidebarShown: false});
    }

    updateMapData(selectedOptions) {
        //send options to server, get theaters and save them to the state
        //JSON.stringify

        const dataFromServer = {
            theaters: [
                {
                    coords: {
                        lat: 50.455390,
                        lng: 30.634826
                    },
                    siteUrl: "https://multiplex.ua/"
                },
                {
                    coords: {
                        lat: 50.445075,
                        lng: 30.520615
                    },
                    siteUrl: "https://planetakino.ua/"
                },
            ],
            mapCenter: {
                lat: 50.45466,
                lng: 30.5238
            },
            mapZoom: 12
        };
        const {theaters, mapCenter, mapZoom} = dataFromServer;
        this.setState({
            suitableTheaters: theaters,
            mapCenter: mapCenter,
            mapZoom: mapZoom
        });
    }

    updateMapDataFromHideablePanel(selectedOptions) {
        this.updateMapData(selectedOptions);
        this.hideSidePanel();
    }

    onShowFiltersSidebarBtnClick() {
        if(!this.state.isFilterSidebarShown) {
            this.setState({isFilterSidebarShown: true});
            document.getElementsByClassName("hideablePanelContainer")[0].style.display = "block";
        }
    }

    render() {
        const {suitableTheaters, mapCenter, mapZoom} = this.state;
        return (
            <div>
                <h2 className="pageSectionCaption">Кінотеатри</h2>
                <button id="showFiltersSidebarBtn" onClick={this.onShowFiltersSidebarBtnClick}>Фільтри</button>
                <div id="mapContainer">
                    <OutsideAlerter className="hideablePanelContainer" shouldBeActive={this.state.isFilterSidebarShown}
                                    onClickOutside={this.hideSidePanel}>
                        <TheaterCriteriaBar id="hideableTheaterSelectPanel" updateData={this.updateMapDataFromHideablePanel} buttonCentered />
                    </OutsideAlerter>
                    <TheaterCriteriaBar id="theaterSelectPanel" updateData={this.updateMapData}/>
                    <TheatersMap id="theatersMap" markers={suitableTheaters} defaultCenter={mapCenter} defaultZoom={mapZoom}/>
                </div>
            </div>
        );
    }
}

export default Theaters;