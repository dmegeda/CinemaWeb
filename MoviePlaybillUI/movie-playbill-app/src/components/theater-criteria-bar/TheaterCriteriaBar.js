import React, {Component} from 'react';
import './TheaterCriteriaBar.css'

class TheaterCriteriaBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
                theaterCompanies: [],
                movies: []
            },
            selectedOptions: {
                theaterCompanies: [],
                movies: [],
                searchZone: ""
            }
        };

        this.searchButtonClick = this.searchButtonClick.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onDistanceRadioChange = this.onDistanceRadioChange.bind(this);
    }

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

        this.setState({
            options: {
                theaterCompanies: theaterCompaniesList,
                movies: moviesList
            }
        });

        // this.setState((prevState) => {
        //     return {
        //         ...prevState,
        //         options: {
        //             theaterCompanies: theaterCompaniesList,
        //             movies: moviesList
        //         }
        //     }
        // })
    }

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

    searchButtonClick() {
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
    }

    onCheckboxChange(e) {
        let options = [];
        const selectedValueName = e.target.name;
        if(selectedValueName.startsWith("company")) {
            options = this.state.selectedOptions.theaterCompanies;
        }
        else if(selectedValueName.startsWith("movie")) {
            options = this.state.selectedOptions.movies;
        }

        const valueId = selectedValueName.match(/\d+/g).map(Number)[0];

        // console.log(options);

        if (e.target.checked) {
            options.push(valueId);
        } else {
            options.splice(options.indexOf(valueId), 1);
        }

        // let {selectedOptions} = this.state;
        // if(selectedValueName.startsWith("company")) {
        //     selectedOptions.theaterCompanies = options;
        // }
        // else if(selectedValueName.startsWith("movie")) {
        //     selectedOptions.movies = options;
        // }
        // this.setState({selectedOptions: selectedOptions});

        this.setState((prevState) => {
            if(selectedValueName.startsWith("company")) {
                prevState.selectedOptions.theaterCompanies = options;
            }
            else if(selectedValueName.startsWith("movie")) {
                prevState.selectedOptions.movies = options;
            }
            return prevState;
        });

        // if(selectedValueName.startsWith("company")) {
        //     this.setState({
        //         selectedOptions: {
        //             theaterCompanies: options
        //         }
        //     });
        // }
        // else if(selectedValueName.startsWith("movie")) {
        //     this.setState({
        //         selectedOptions: {
        //             movies: options
        //         }
        //     });
        // }
    }

    onDistanceRadioChange(e) {
        const selectedValue = e.target.value;

        // this.setState((prevState) => {
        //     prevState.selectedOptions.searchZone = selectedValue;
        //     return prevState;
        // })

        this.setState({
            selectedOptions: {
                searchZone: selectedValue
            }
        })
    }


    render() {
        const incomingClass = this.props.className ? this.props.className + " " : "";
        return (
            <div className={incomingClass + "theaterCriteriaPanel"} id={this.props.id}>
                <div id="searchCriteria">
                    <div>
                        <span className="criteriaSectionName">Мережа кінотеатрів</span>
                        <ul>
                            {
                                this.state.options.theaterCompanies.map(company => {
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
                                this.state.options.movies.map(movie => {
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
                                <input type="radio" value="oneNearest" defaultChecked name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Найближчий
                            </li>
                            <li>
                                <input type="radio" value="allNearby" name="distanceToTheater" onChange={this.onDistanceRadioChange}/>  Поблизу
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

export default TheaterCriteriaBar;