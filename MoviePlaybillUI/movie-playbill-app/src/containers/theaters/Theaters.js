import React, {Component} from "react";
import TheaterCriteriaBar from "../../components/theater-criteria-bar/TheaterCriteriaBar";
import TheatersMap from "../../components/theaters-map/TheatersMap";
import './Theaters.css';
import OutsideAlerter from "../../components/outside-alerter/OutsideAlerter";

class Theaters extends Component {

    state = {
        isFilterSidebarShown: false,
        filterOptions: {
            theaterCompanies: [],
            movies: []
        },
        suitableTheaters: [],
        mapCenter: {},
        mapZoom: 0
    };

    componentDidMount() {
        const theaterCompany1 = {
            "id": 1,
            "companyName":"Multiplex",
        };
        const theaterCompany2 = {
            "id": 2,
            "companyName":"Планета кіно",
        };
        const theaterCompany3 = {
            "id": 3,
            "companyName":"Оскар",
        };
        const theaterCompany4 = {
            "id": 4,
            "companyName":"Батерфляй",
        };

        const movie1 = {
            id: 1,
            title: "Фільм 1"
        };
        const movie2 = {
            id: 2,
            title: "Фільм 2"
        };
        const movie3 = {
            id: 3,
            title: "Фільм 3"
        };
        const movie4 = {
            id: 4,
            title: "Фільм 4"
        };
        const movie5 = {
            id: 5,
            title: "Фільм 5"
        };
        const movie6 = {
            id: 6,
            title: "Фільм 6"
        };
        const movie7 = {
            id: 7,
            title: "Фільм 7"
        };
        const movie8 = {
            id: 8,
            title: "Фільм 8"
        };

        const theaterCompaniesList = [theaterCompany1, theaterCompany2, theaterCompany3, theaterCompany4];
        const moviesList = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8];

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
            filterOptions: {
                theaterCompanies: theaterCompaniesList,
                movies: moviesList
            },
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

    hideSidePanel = () => {
        document.getElementsByClassName("hideablePanelContainer")[0].style.display = "none";
        this.setState({isFilterSidebarShown: false});
    };

    updateMapData = (selectedOptions) => {
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
    };

    updateMapDataFromHideablePanel = (selectedOptions) => {
        this.updateMapData(selectedOptions);
        this.hideSidePanel();
    };

    onShowFiltersSidebarBtnClick = () => {
        if(!this.state.isFilterSidebarShown) {
            this.setState({isFilterSidebarShown: true});
            document.getElementsByClassName("hideablePanelContainer")[0].style.display = "block";
        }
    };

    render() {
        const {filterOptions: {theaterCompanies, movies}, suitableTheaters, mapCenter, mapZoom} = this.state;
        return (
            <div>
                <h2 className="pageSectionCaption">Кінотеатри</h2>
                <button id="showFiltersSidebarBtn" onClick={this.onShowFiltersSidebarBtnClick}>Фільтри</button>
                <div id="mapContainer">
                    <OutsideAlerter className="hideablePanelContainer" shouldBeActive={this.state.isFilterSidebarShown}
                                    onClickOutside={this.hideSidePanel}>
                        <TheaterCriteriaBar id="hideableTheaterSelectPanel" updateData={this.updateMapDataFromHideablePanel}
                                            buttonCentered theaterCompanies={theaterCompanies} movies={movies}/>
                    </OutsideAlerter>
                    <TheaterCriteriaBar id="theaterSelectPanel" updateData={this.updateMapData} theaterCompanies={theaterCompanies} movies={movies}/>
                    <TheatersMap id="theatersMap" markers={suitableTheaters} defaultCenter={mapCenter} defaultZoom={mapZoom}/>
                </div>
            </div>
        );
    }
}

export default Theaters;