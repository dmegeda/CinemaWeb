import React, {Component} from 'react';
import './TheaterCriteriaBar.css'

class TheaterCriteriaBar extends Component {

    constructor(props) {
        super(props);

        this.state = {theaterCompanies: [], movies: []};
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

        this.setState({theaterCompanies: theaterCompaniesList, movies: moviesList});
    }

    searchButtonClick() {
        alert(1);
    }

    render() {
        return (
            <div className={this.props.className + " theaterCriteriaPane"} id={this.props.id}>
                <div id="searchCriteria">
                    <div>
                        <span className="criteriaSectionName">Мережа кінотеатрів</span>
                        <ul>
                            {
                                this.state.theaterCompanies.map(company => {
                                    return (
                                        <li id={"company " + company.id}>
                                            <input type="checkbox" />  {company.companyName}
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
                                this.state.movies.map(movie => {
                                    return (
                                        <li id={"movie " + movie.id}>
                                            <input type="checkbox" />  {movie.title}
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
                                <input type="radio" value="nearestTheater" checked name="distanceToTheater"/>  Найближчий
                            </li>
                            <li>
                                <input type="radio" value="nearbyTheaters" name="distanceToTheater"/>  Поблизу
                            </li>
                            <li>
                                <input type="radio" value="nearbyTheaters" name="distanceToTheater"/>  Всі
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="button" id="searchBtn" onClick={this.searchButtonClick}>Пошук</button>
            </div>
        )
    }
}

export default TheaterCriteriaBar;