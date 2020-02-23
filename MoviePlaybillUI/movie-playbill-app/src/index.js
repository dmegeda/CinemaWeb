import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import Home from "./Components/Home/Home";
import NowPage from "./Components/NowPage/NowPage";
import SoonPage from "./Components/SoonPage/SoonPage";
import Theaters from "./Components/Theaters/Theaters";
import Header from "./Components/Header/Header";
import MovieInfo from "./Components/MovieInfo/MovieInfo";

ReactDOM.render(<Header/>, document.getElementById("head"));
ReactDOM.render(<Home/>, document.getElementById("root"));

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/now" component={NowPage} />
            <Route path="/soon" component={SoonPage} />
            <Route path="/theaters" component={Theaters} />
            <Route path="/movies/:id" component={MovieInfo} />>
        </Switch>
    </Router>,
    document.getElementById("root")
);