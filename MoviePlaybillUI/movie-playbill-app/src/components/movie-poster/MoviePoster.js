import React, {Component} from 'react';
import './MoviePoster.css'

class MoviePoster extends Component {
    render() {
        const link = "/movies/" + this.props.id;
        return (
            <div className={this.props.className + " posterBox"}>
                <a href={link}>
                    <img src={this.props.image} className="posterPicture" alt={"Постер " + this.props.title}/>
                    {/*<div>ID - {this.props.id}</div>*/}
                    <div className="movieTitle">{this.props.title}</div>
                    {/*<div className="movieTitle">Хищные птицы: Потрясающая история Харли Квинн</div>*/}
                </a>
            </div>
        );
    }
}

export default MoviePoster;