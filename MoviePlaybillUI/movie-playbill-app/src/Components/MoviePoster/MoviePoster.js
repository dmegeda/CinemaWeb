import React, {Component} from 'react';
import './MoviePoster.css'

class MoviePoster extends Component {
    render() {
        const link = "/movies/" + this.props.id;
        return (
            <div className="posterBox">
                <p><img src={this.props.image} style={{width: "200px", height: "300px", display: "block", margin: "0 auto"}}/></p>
                <p>ID - {this.props.id}</p>
                <p>Title - {this.props.title}</p>
                <p>Description - {this.props.description}</p>
                <a href={link}><button>Переглянути</button></a>
            </div>
        );
    }
}

export default MoviePoster;