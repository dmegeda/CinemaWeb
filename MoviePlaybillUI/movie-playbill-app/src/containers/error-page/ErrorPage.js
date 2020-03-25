import React, {Component} from 'react';

class ErrorPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 style={{marginBottom: "40px"}}>Такої сторінки не існує...</h2>
                <p><a href="/">Перейти до головної сторінки</a></p>
            </React.Fragment>
        );
    }
}

export default ErrorPage;