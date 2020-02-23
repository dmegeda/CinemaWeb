import React, {Component} from 'react';

class MovieInfo extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                Інформація про фільм з id - {id}
            </div>
        );
    }
}

export default MovieInfo;