import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import Home from "./containers/home/Home";
import NowPage from "./containers/now-page/NowPage";
import SoonPage from "./containers/soon-page/SoonPage";
import ErrorPage from "./containers/error-page/ErrorPage";
import Theaters from "./containers/theaters/Theaters";
import Header from "./components/header/Header";
import MovieInfo from "./containers/movie-info/MovieInfo";

ReactDOM.render(<Header/>, document.getElementById("head"));
ReactDOM.render(<Home/>, document.getElementById("root"));

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/now" component={NowPage} />
            <Route path="/soon" component={SoonPage} />
            <Route path="/theaters" component={Theaters} />
            <Route path="/movies/:id" component={MovieInfo} />
            <Route path="/" component={ErrorPage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);