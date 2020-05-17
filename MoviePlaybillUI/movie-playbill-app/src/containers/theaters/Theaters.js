import React, {Component} from "react";
import {connect} from 'react-redux';
import {parse} from 'query-string';
import TheaterCriteriaBar from "../../components/theater-criteria-bar/TheaterCriteriaBar";
import TheatersMap from "../../components/theaters-map/TheatersMap";
import './Theaters.css';
import OutsideAlerter from "../../components/outside-alerter/OutsideAlerter";
import {
    setMapDisplayingTheatersActionCreator,
    setMapPageSidebarVisibilityActionCreator, setTheatersMapDefaultValuesActionCreator,
    setTheatersPossibleFiltersActionCreator, setTheatersSelectedFiltersActionCreator
} from "../../redux/actionCreators/theatersActionCreators";
import MockTheatersInfoFetcher from "../../utils/MockTheatersInfoFetcher";

class Theaters extends Component {

    componentDidMount() {
        const dataFromServer = new MockTheatersInfoFetcher().fetchTheatersInfo(this.props.location.search);
        const {filterOptions, mapCenter, mapZoom, suitableTheaters} = dataFromServer;
        this.props.setFilterOptions(filterOptions);
        this.props.setTheatersMapDefaultValues({mapCenter, mapZoom});
        this.props.setMapDisplayingTheaters(suitableTheaters);
        window.addEventListener('resize', () => {
            if(window.innerWidth > 1024 && this.props.isFilterSidebarShown) {
                this.hideSidePanel();
                this.props.setMapPageSidebarVisibility(false);
            }
        });
    }

    convertValuesToQueryParams = (values) => {
        let query = "";
        if(values.hasOwnProperty('theaterCompanies') || values.hasOwnProperty('movies') || values.hasOwnProperty('searchZone')) {
            query += "?"
        }
        if(values.hasOwnProperty('theaterCompanies')) {
            query += "theaters=";
            for(let t of values.theaterCompanies) {
                query += t + ","
            }
            query = query.substring(0, query.length - 1);
        }
        if(values.hasOwnProperty('movies')) {
            if(query !== "" && query !== "?") query += "&";
            query += "movies=";
            for(let t of values.movies) {
                query += t + ","
            }
            query = query.substring(0, query.length - 1);
        }
        if(values.hasOwnProperty('searchZone')) {
            if(query !== "" && query !== "?") query += "&";
            query += "zone=" + values.searchZone;
        }
        if(query.substr(query.length - 1) === "&") query = query.substring(0, query.length - 1);
        return query;
    };

    hideSidePanel = () => {
        document.getElementsByClassName("hideablePanelContainer")[0].style.display = "none";
        this.props.setMapPageSidebarVisibility(false);
    };

    updateMapData = () => {
        const query = this.convertValuesToQueryParams(this.props.selectedFilters);
        const newUrl = this.props.location.pathname + query;
        this.props.history.replace(newUrl);
        const dataFromServer = new MockTheatersInfoFetcher().fetchTheatersInfo(query);
        const {suitableTheaters, mapCenter, mapZoom} = dataFromServer;
        this.props.setTheatersMapDefaultValues({mapCenter, mapZoom});
        this.props.setMapDisplayingTheaters(suitableTheaters);
    };

    updateMapDataFromHideablePanel = (selectedOptions) => {
        this.updateMapData(selectedOptions);
        this.hideSidePanel();
    };

    onShowFiltersSidebarBtnClick = () => {
        if(!this.props.isFilterSidebarShown) {
            this.props.setMapPageSidebarVisibility(true);
            document.getElementsByClassName("hideablePanelContainer")[0].style.display = "block";
        }
    };

    render() {
        const {filterOptions: {theaterCompanies, movies}, suitableTheaters, mapDefaultValues: {mapCenter, mapZoom}} = this.props;
        return (
            <div>
                <h2 className="pageSectionCaption">Кінотеатри</h2>
                <button id="showFiltersSidebarBtn" onClick={this.onShowFiltersSidebarBtnClick}>Фільтри</button>
                <div id="mapContainer">
                    <OutsideAlerter className="hideablePanelContainer" shouldBeActive={this.props.isFilterSidebarShown}
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

const mapStateToProps = (state) => {
    const {isMapPageSidebarVisible, theatersPossibleFilters, theatersSelectedFilters, mapDisplayingTheaters, theatersMapDefaultValues} = state.theaters;
    return {
        isFilterSidebarShown: isMapPageSidebarVisible,
        filterOptions: theatersPossibleFilters,
        selectedFilters: theatersSelectedFilters,
        suitableTheaters: mapDisplayingTheaters,
        mapDefaultValues: theatersMapDefaultValues
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterOptions: (options) => dispatch(setTheatersPossibleFiltersActionCreator(options)),
        setMapPageSidebarVisibility: (isVisible) => dispatch(setMapPageSidebarVisibilityActionCreator(isVisible)),
        setMapDisplayingTheaters: (theaters) => dispatch(setMapDisplayingTheatersActionCreator(theaters)),
        setTheatersMapDefaultValues: (values) => dispatch(setTheatersMapDefaultValuesActionCreator(values))
    }
};

export default Theaters = connect(mapStateToProps, mapDispatchToProps)(Theaters);
