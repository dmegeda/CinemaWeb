import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTheatersSelectedFiltersActionCreator} from "../../redux/actionCreators/theatersActionCreators";
import './TheaterCriteriaBar.css'

class TheaterCriteriaBar extends Component {

    state = {
        selectedOptions: {
            theaterCompanies: [],
            movies: [],
            searchZone: ""
        }
    };

    passFilters() {
        // const coords = [
        //     {
        //         lat: 50.455390,
        //         lng: 30.634826
        //     },
        //     {
        //         lat: 50.445075,
        //         lng: 30.520615
        //     }
        // ];
        //this.props.updateData(coords);
    }

    searchButtonClick = () => {
        // const {theaterCompanies, movies, searchZone} = this.state.selectedOptions;
        // console.log("theaters");
        // for(let a in theaterCompanies) {
        //     console.log(theaterCompanies[a]);
        // }
        // console.log("movies");
        // for(let a in movies) {
        //     console.log(movies[a]);
        // }
        // console.log("distance ", searchZone);
        this.props.updateData(this.state.selectedOptions);
    };

    onCheckboxChange = (e) => {
        let options = [];
        const selectedValueName = e.target.name;
        if(selectedValueName.startsWith("company")) {
            options = this.state.selectedOptions.theaterCompanies;
        }
        else if(selectedValueName.startsWith("movie")) {
            options = this.state.selectedOptions.movies;
        }

        const valueId = selectedValueName.match(/\d+/g).map(Number)[0];
        if (e.target.checked) {
            options.push(valueId);
        } else {
            options.splice(options.indexOf(valueId), 1);
        }

        this.setState((prevState) => {
            if(selectedValueName.startsWith("company")) {
                prevState.selectedOptions.theaterCompanies = options;
            }
            else if(selectedValueName.startsWith("movie")) {
                prevState.selectedOptions.movies = options;
            }
            return prevState;
        });
    };

    onDistanceRadioChange = (e) => {
        const selectedValue = e.target.value;
        this.setState({
            selectedOptions: {
                searchZone: selectedValue
            }
        })
    };

    render() {
        const {theaterCompanies, movies} = this.props;
        const incomingClass = this.props.className ? this.props.className + " " : "";
        return (
            <div className={incomingClass + "theaterCriteriaPanel"} id={this.props.id}>
                <div id="searchCriteria">
                    <div>
                        <span className="criteriaSectionName">Мережа кінотеатрів</span>
                        <ul>
                            {
                                theaterCompanies.map(company => {
                                    return (
                                        <li id={"company" + company.id} key={"company" + company.id}>
                                            <input type="checkbox" name={"company" + company.id} onChange={this.onCheckboxChange}/>  {company.companyName}
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
    const {theaterCompanies, movies, searchZone} = state.theaters.theatersSelectedFilters;
    return {
        theaterCompanies,
        movies,
        searchZone
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedOptions: (options) => dispatch(setTheatersSelectedFiltersActionCreator(options))
    }
};

export default TheaterCriteriaBar = connect(mapStateToProps, mapDispatchToProps)(TheaterCriteriaBar);
