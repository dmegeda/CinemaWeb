import React, {Component} from 'react';
import './MovieDetails.css'

class MovieDetails extends Component {

    render() {
        const {movieData: {image, title, age, originalTitle, releaseDate, genres, duration, starring, description}} = this.props;
        return (
            <div id="movieDetailsContainer">
                <img id="movieDetailsImage" src={image} alt={"Постер " + title}/>
                <div id="movieDetailsData">
                    <span id="movieDetailsTitle">{title}</span>
                    <div id="movieGeneralDetails">
                        <div id="movieGeneralDetailsNames">
                            <span>Вік:</span>
                            <span>Оригінальна назва:</span>
                            <span>Дата виходу:</span>
                            <span>Жанр:</span>
                            <span>Тривалість:</span>
                            <span>В головних ролях:</span>
                        </div>
                        <div id="movieGeneralDetailsValues">
                            <span>{age}</span>
                            <span>{originalTitle}</span>
                            <span>{releaseDate}</span>
                            <span>{genres}</span>
                            <span>{duration}</span>
                            <span>{starring}</span>
                        </div>
                    </div>
                    <div id="movieDetailsDescription">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;