import React, {Component} from 'react';
import MoviesList from "../MoviesList/MoviesList";

class Home extends Component {
    componentDidMount() {
        let movies = [];
        movies.push();
        this.setState({movieList: movies})
    }

    render() {
        return (
            <div>
                <h2 style={{marginBottom: "40px"}}>НАЙКРАЩІ КАРТИНИ ТИЖНЯ</h2>
                <MoviesList/>
            </div>
        );
    }
}

export default Home;