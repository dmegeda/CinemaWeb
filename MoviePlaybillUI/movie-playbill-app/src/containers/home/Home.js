import React, {Component} from 'react';
import MoviesList from "../../components/movies-list/MoviesList";
import {MovieListTypes} from "../../components/movieListTypes";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="pageSectionCaption">Найкращі картини тижня</h2>
                <MoviesList type={MovieListTypes.BEST_OF_WEEK}/>
            </React.Fragment>
        );
    }
}

export default Home;