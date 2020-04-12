import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import {store} from './store'
import Home from "./containers/home/Home";
import NowPage from "./containers/now-page/NowPage";
import SoonPage from "./containers/soon-page/SoonPage";
import NotFoundPage from "./containers/not-found-page/NotFoundPage";
import Theaters from "./containers/theaters/Theaters";
import Header from "./components/header/Header";
import MovieInfo from "./containers/movie-info/MovieInfo";
import Footer from "./components/footer/Footer";
import PageContent from "./components/page-content/PageContent";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Header />
            <PageContent>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home"><Redirect to="/" /></Route>
                    <Route exact path="/now" component={NowPage} />
                    <Route exact path="/soon" component={SoonPage} />
                    <Route exact path="/theaters" component={Theaters} />
                    <Route exact path="/movies/:id" component={MovieInfo} />
                    <Route component={NotFoundPage} />
                </Switch>
            </PageContent>
            <Footer />
        </Provider>
    </Router>,
    document.getElementById("root")
);