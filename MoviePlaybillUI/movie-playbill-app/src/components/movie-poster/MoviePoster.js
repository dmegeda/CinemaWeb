import React, {Component} from 'react';
import './MoviePoster.css'

class MoviePoster extends Component {

    render() {
        const {link, image, title} = this.props;
        const incomingClass = this.props.className ? this.props.className + " " : "";
        return (
            <div className={incomingClass + "posterBox"}>
                <a href={link}>
                    <img src={image} className="posterPicture" alt={"Постер " + title}/>
                    <div className="movieTitle">{title}</div>
                </a>
            </div>
        );
    }
}

export default MoviePoster;