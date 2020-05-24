import React, {Component} from "react";
import {connect} from 'react-redux';
import {stringify} from 'query-string';
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
        const {filterOptions, selectedOptions, mapCenter, mapZoom, suitableTheaters} = dataFromServer;
        this.props.setFilterOptions(filterOptions);
        this.props.setSelectedOptions(selectedOptions);
        this.props.setTheatersMapDefaultValues({mapCenter, mapZoom});
        this.props.setMapDisplayingTheaters(suitableTheaters);
        window.addEventListener('resize', this.resizeListener);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }

    setSidebarVisibility(isShown) {
        this.props.setMapPageSidebarVisibility(isShown);
        document.getElementsByClassName("hideablePanelContainer")[0].style.display = isShown ? "block" : "none";
    }

    resizeListener = () => {
        if(window.innerWidth < 1025) {
            this.setSidebarVisibility(false);
        }
        else if(window.innerWidth > 1024) {
            this.setSidebarVisibility(false);
            document.getElementsByClassName("hideablePanelContainer")[0].style.display = "block";
        }
    };

    hideSidePanel = () => {
        this.setSidebarVisibility(false);
    };

    updateMapData = (selectedOptions) => {
        const query = "?" + stringify(selectedOptions);
        const newUrl = this.props.location.pathname + query;
        this.props.history.replace(newUrl);
        const dataFromServer = new MockTheatersInfoFetcher().fetchTheatersInfo(query);
        const {suitableTheaters, mapCenter, mapZoom} = dataFromServer;
        this.props.setTheatersMapDefaultValues({mapCenter, mapZoom});
        this.props.setMapDisplayingTheaters(suitableTheaters);
        if(this.props.isFilterSidebarShown) {
            this.setSidebarVisibility(false);
        }
    };

    onShowFiltersSidebarBtnClick = () => {
        if(!this.props.isFilterSidebarShown) {
            this.setSidebarVisibility(true);
        }
    };

    render() {
        const {filterOptions, isFilterSidebarShown, selectedFilters, suitableTheaters, mapDefaultValues: {mapCenter, mapZoom}} = this.props;
        return (
            <div>
                <h2 className="pageSectionCaption">Кінотеатри</h2>
                <button id="showFiltersSidebarBtn" onClick={this.onShowFiltersSidebarBtnClick}>Фільтри</button>
                <div id="mapContainer">
                    <OutsideAlerter className="hideablePanelContainer" shouldBeActive={isFilterSidebarShown}
                                    onClickOutside={this.hideSidePanel}>
                        <TheaterCriteriaBar id="theaterSelectPanel" updateData={this.updateMapData}
                                            buttonCentered={isFilterSidebarShown} filterOptions={filterOptions}
                                            selectedOptions={selectedFilters}/>
                    </OutsideAlerter>
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
        setSelectedOptions: (options) => dispatch(setTheatersSelectedFiltersActionCreator(options)),
        setMapPageSidebarVisibility: (isVisible) => dispatch(setMapPageSidebarVisibilityActionCreator(isVisible)),
        setMapDisplayingTheaters: (theaters) => dispatch(setMapDisplayingTheatersActionCreator(theaters)),
        setTheatersMapDefaultValues: (values) => dispatch(setTheatersMapDefaultValuesActionCreator(values))
    }
};

export default Theaters = connect(mapStateToProps, mapDispatchToProps)(Theaters);
