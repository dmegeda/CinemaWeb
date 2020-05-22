import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTheatersSelectedFiltersActionCreator} from "../../redux/actionCreators/theatersActionCreators";
import './TheaterCriteriaBar.css'

class TheaterCriteriaBar extends Component {

    searchButtonClick = () => {
        this.props.updateData();
    };

    onCheckboxChange = (e) => {
        let options = [];
        const selectedValueName = e.target.name;
        if(selectedValueName.startsWith("theater")) {
            options = this.props.selectedOptions.theaters;
        }
        else if(selectedValueName.startsWith("movie")) {
            options = this.props.selectedOptions.movies;
        }

        const valueId = selectedValueName.match(/\d+/g).map(Number)[0];
        if (e.target.checked) {
            options.push(valueId);
        } else {
            options.splice(options.indexOf(valueId), 1);
        }

        let result = JSON.parse(JSON.stringify(this.props.selectedOptions));
        if(selectedValueName.startsWith("theater")) {
            result.theaters = options;
        }
        else if(selectedValueName.startsWith("movie")) {
            result.movies = options;
        }
        this.props.setSelectedOptions(result);
    };

    onDistanceRadioChange = (e) => {
        const selectedValue = e.target.value;
        let result = JSON.parse(JSON.stringify(this.props.selectedOptions));
        result.searchZone = selectedValue;
        this.props.setSelectedOptions(result);
    };

    render() {
        const {filterOptions: {theaters, movies}, selectedOptions} = this.props;
        //console.log(selectedOptions);
        const incomingClass = this.props.className ? this.props.className + " " : "";
        return (
            <div className={incomingClass + "theaterCriteriaPanel"} id={this.props.id}>
                <div id="searchCriteria">
                    <div>
                        <span className="criteriaSectionName">Мережа кінотеатрів</span>
                        <ul>
                            {
                                theaters.map(theater => {
                                    return (
                                        <li id={"theater" + theater.id} key={"theater" + theater.id}>
                                            <input type="checkbox" name={"theater" + theater.id} onChange={this.onCheckboxChange}/>  {theater.companyName}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <span className="criteriaSectionName">Кінофільм</span>
                        <ul>
                            {
                                movies.map(movie => {
                                    return (
                                        <li id={"movie" + movie.id} key={"movie" + movie.id}>
                                            <input type="checkbox" name={"movie" + movie.id} onChange={this.onCheckboxChange}/>  {movie.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <span className="criteriaSectionName">Зона пошуку</span>
                        <ul>
                            <li>
                                <input type="radio" value="nearest" defaultChecked name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Найближчий
                            </li>
                            <li>
                                <input type="radio" value="nearby" name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Поблизу
                            </li>
                            <li>
                                <input type="radio" value="all" name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Всі
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="button" id="searchBtn" className={this.props.buttonCentered ? "centerBtn" : ""} onClick={this.searchButtonClick}>Пошук</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {theaters, movies, searchZone} = state.theaters.theatersSelectedFilters;
    return {
        selectedOptions: {
            theaters,
            movies,
            searchZone
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedOptions: (options) => dispatch(setTheatersSelectedFiltersActionCreator(options))
    }
};

export default TheaterCriteriaBar = connect(mapStateToProps, mapDispatchToProps)(TheaterCriteriaBar);
