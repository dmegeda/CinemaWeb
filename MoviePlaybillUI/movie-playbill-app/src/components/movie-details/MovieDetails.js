import React, {Component} from 'react';
import './MovieDetails.css'

class MovieDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {movieParams: {}, movieLoadError: null};
    }

    componentDidMount() {
        // let url = "https://localhost:44386/api/home/";
        // fetch(url)
        //     .then(value => value.json())
        //     .then(value => this.setState({...value}))
        //     .catch(err => this.setState({movieLoadError: err}));

        const fetchedId = this.props.movieId;

        const movie = {
            "id": fetchedId,
            "title": "Деяка назва " + fetchedId,
            "description": "Деякий сюжет " + fetchedId,
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAFCBAMAAACA5o5yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAElBMVEXxdJj0lrH4ucv73OX85ez97vLRIOZgAAABOUlEQVR42u3PwRQAMAwFsCpUYQRDGEL9aQbR23+JQerkmgp25eTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9rnO9T4bw2gyRdDp5QAAAABJRU5ErkJggg==",
            "age": "Деякий вік " + fetchedId,
            "originalTitle": "Деяка оригінальна назва " + fetchedId,
            "releaseDate": "Деяка дата виходу " + fetchedId,
            "genres": "Деякі жанри " + fetchedId,
            "duration": "Деяка тривалість " + fetchedId,
            "starring": "Деякі актори " + fetchedId,
        };

        this.setState({movieParams: {...movie}})
    }

    render() {
        return (
            <div id="movieDetailsContainer">
                <img id="movieDetailsImage" src={this.state.movieParams.image} alt={"Постер " + this.state.movieParams.title}/>
                <div id="movieDetailsData">
                    <span id="movieDetailsTitle">{this.state.movieParams.title}</span>
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
                            <span>{this.state.movieParams.age}</span>
                            <span>{this.state.movieParams.originalTitle}</span>
                            <span>{this.state.movieParams.releaseDate}</span>
                            <span>{this.state.movieParams.genres}</span>
                            <span>{this.state.movieParams.duration}</span>
                            <span>{this.state.movieParams.starring}</span>
                        </div>
                    </div>
                    <div id="movieDetailsDescription">
                        {this.state.movieParams.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;