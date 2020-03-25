import React, {Component} from 'react';
import MoviesList from "../../components/movies-list/MoviesList";
import {MovieListTypes} from "../../constants/movieListTypes";

class NowPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="pageSectionCaption">Зараз у кіно</h2>
                <MoviesList type={MovieListTypes.NOW_IN_THEATERS}/>
            </React.Fragment>
        );
    }
}

export default NowPage;