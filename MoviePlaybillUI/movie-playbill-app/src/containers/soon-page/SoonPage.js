import React, {Component} from 'react';
import MoviesList from "../../components/movies-list/MoviesList";
import {MovieListTypes} from "../../components/movieListTypes";

class SoonPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="pageSectionCaption">Скоро в прокаті</h2>
                <MoviesList type={MovieListTypes.SOON_IN_THEATERS}/>
            </React.Fragment>
        );
    }
}

export default SoonPage;