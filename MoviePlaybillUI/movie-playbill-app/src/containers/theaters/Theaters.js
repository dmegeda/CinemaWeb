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
        console.log(this.props.filterOptions);
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

    updateMapData = (selectedOptions) => {
        const params = this.props.location.search;
        const dataFromServer = {

        };
        const {theaters, mapCenter, mapZoom} = dataFromServer;
        this.props.setMapDisplayingTheaters(theaters);
        this.props.setTheatersMapDefaultValues({mapCenter, mapZoom});
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
        const {filterOptions, suitableTheaters, mapDefaultValues: {mapCenter, mapZoom}} = this.props;
        //console.log("render ", filterOptions);
        return (
            <div>
                <h2 className="pageSectionCaption">Кінотеатри</h2>
                <button id="showFiltersSidebarBtn" onClick={this.onShowFiltersSidebarBtnClick}>Фільтри</button>
                <div id="mapContainer">
                    <OutsideAlerter className="hideablePanelContainer" shouldBeActive={this.props.isFilterSidebarShown}
                                    onClickOutside={this.hideSidePanel}>
                        <TheaterCriteriaBar id="hideableTheaterSelectPanel" updateData={this.updateMapDataFromHideablePanel}
                                            buttonCentered theaterCompanies={filterOptions.theaterCompanies} movies={filterOptions.movies}/>
                    </OutsideAlerter>
                    <TheaterCriteriaBar id="theaterSelectPanel" updateData={this.updateMapData} theaterCompanies={filterOptions.theaterCompanies} movies={filterOptions.movies}/>
                    <TheatersMap id="theatersMap" markers={suitableTheaters} defaultCenter={mapCenter} defaultZoom={mapZoom}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        isMapPageSidebarVisible,
        theatersPossibleFilters,
        theatersSelectedFilters,
        mapDisplayingTheaters,
        theatersMapDefaultValues} = state.theaters;
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
        setTheatersSelectedFilters: (filters) => dispatch(setTheatersSelectedFiltersActionCreator(filters)),
        setTheatersMapDefaultValues: (values) => dispatch(setTheatersMapDefaultValuesActionCreator(values))
    }
};

export default Theaters = connect(mapStateToProps, mapDispatchToProps)(Theaters);
