import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTheatersSelectedFiltersActionCreator} from "../../redux/actionCreators/theatersActionCreators";
import './TheaterCriteriaBar.css'

class TheaterCriteriaBar extends Component {

    state = {
        selectedTheaters: [],
        selectedMovies: [],
        selectedZone: "nearest"
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const result = {...prevState};
        if(nextProps.selectedOptions.theaters) result.selectedTheaters = nextProps.selectedOptions.theaters;
        if(nextProps.selectedOptions.movies) result.selectedMovies = nextProps.selectedOptions.movies;
        if(nextProps.selectedOptions.searchZone) result.selectedZone = nextProps.selectedOptions.searchZone;
        return result;
    }

    searchButtonClick = () => {
        const {selectedTheaters, selectedMovies, selectedZone} = this.state;
        this.props.updateData({theaters: selectedTheaters, movies: selectedMovies, searchZone: selectedZone});
    };

    onCheckboxChange = (e) => {
        let options = [];
        const selectedValueName = e.target.name;
        if(selectedValueName.startsWith("theater")) {
            options = this.state.selectedTheaters;
        }
        else if(selectedValueName.startsWith("movie")) {
            options = this.state.selectedMovies;
        }

        const valueId = selectedValueName.match(/\d+/g).map(Number)[0];
        if (e.target.checked) {
            options.push(valueId);
        } else {
            options.splice(options.indexOf(valueId), 1);
        }

        // let result = JSON.parse(JSON.stringify(this.state));
        // if(selectedValueName.startsWith("theater")) {
        //     result.theaters = options;
        // }
        // else if(selectedValueName.startsWith("movie")) {
        //     result.movies = options;
        // }
        // this.props.setSelectedOptions(result);

        if(selectedValueName.startsWith("theater")) {
            this.setState({selectedTheaters: options});
        }
        else if(selectedValueName.startsWith("movie")) {
            this.setState({selectedMovies: options});
        }
    };

    onDistanceRadioChange = (e) => {
        const selectedValue = e.target.value;
        //console.log(selectedValue);
        //let result = JSON.parse(JSON.stringify(this.props.selectedOptions));
        //result.searchZone = selectedValue;
        //this.props.setSelectedOptions(result);
        this.setState({selectedZone: selectedValue});
        setTimeout(() => console.log(this.state), 5000);
    };

    render() {
        // const {filterOptions: {theaters, movies}, selectedOptions: {theaters: selectedTheaters, movies: selectedMovies}} = this.props;
        // let {selectedOptions: {searchZone}} = this.props;
        const {filterOptions: {theaters, movies}} = this.props;
        let {selectedTheaters, selectedMovies, selectedZone: searchZone} = this.state;
        //console.log(searchZone);
        // console.log("BAR PROPS!!!", this.props.selectedOptions);
        // console.log("BAR STATE!!!", this.props.selectedOptions);
        if(!searchZone) searchZone = this.state.selectedZone;
        const incomingClass = this.props.className ? this.props.className + " " : "";
        return (
            <div className={incomingClass + "theaterCriteriaPanel"} id={this.props.id}>
                <div id="searchCriteria">
                    <div>
                        <span className="criteriaSectionName">Мережа кінотеатрів</span>
                        <ul>
                            {
                                theaters.map(theater => {
                                    const id = theater.id;
                                    return (
                                        <li id={"theater" + id} key={"theater" + id}>
                                            <input type="checkbox" name={"theater" + id} checked={selectedTheaters.includes(+id)}
                                                   onChange={this.onCheckboxChange}/>  {theater.companyName}
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
                                    const id = movie.id;
                                    return (
                                        <li id={"movie" + id} key={"movie" + id}>
                                            <input type="checkbox" name={"movie" + id} checked={selectedMovies.includes(+id)}
                                                   onChange={this.onCheckboxChange}/>  {movie.title}
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
                                <input type="radio" value="nearest" checked={searchZone === "nearest"}
                                       name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Найближчий
                            </li>
                            <li>
                                <input type="radio" value="nearby" checked={searchZone === "nearby"}
                                       name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Поблизу
                            </li>
                            <li>
                                <input type="radio" value="all" checked={searchZone === "all"}
                                       name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Всі
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="button" id="searchBtn" className={this.props.buttonCentered ? "centerBtn" : ""} onClick={this.searchButtonClick}>Пошук</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     const {theaters, movies, searchZone} = state.theaters.theatersSelectedFilters;
//     return {
//         selectedOptions: {
//             theaters,
//             movies,
//             searchZone
//         }
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setSelectedOptions: (options) => dispatch(setTheatersSelectedFiltersActionCreator(options))
//     }
// };

// export default TheaterCriteriaBar = connect(mapStateToProps, mapDispatchToProps)(TheaterCriteriaBar);

export default TheaterCriteriaBar;
