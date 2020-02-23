import React, {Component} from 'react';
// import {BrowserRouter as Router} from "react-router-dom";
import './SideMenu.css';

class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.closeNavigation = this.closeNavigation.bind(this);
        this.openNavigation = this.openNavigation.bind(this);
    }

    closeNavigation() {
        document.getElementById("sidenavMenu").style.width = "0";
    }

    openNavigation() {
        document.getElementById("sidenavMenu").style.width = "100%";
    }

    render() {
        return (
            <nav>
                {/*<Router>*/}
                    <div>
                        <div id="sidenavMenu" className="sidenav">
                            {/*<a href="javascript:void(0)" className="closebtn" onClick={this.closeNavigation}>&times;</a>*/}
                            <span style={{cursor: "pointer"}} className="closeBtn" onClick={this.closeNavigation}>&times;</span>
                            <div id="menuOptions">
                                {/*<Link to="/" onClick={this.closeNavigation}>Головна</Link>*/}
                                {/*<Link to="/now">Зараз у кіно</Link>*/}
                                {/*<Link to="/soon">Скоро в прокаті</Link>*/}
                                {/*<Link to="/theaters">Кінотеатри</Link>*/}
                                <a href="/">Головна</a>
                                <a href="/now">Зараз у кіно</a>
                                <a href="/soon">Скоро в прокаті</a>
                                <a href="/theaters">Кінотеатри</a>
                            </div>
                        </div>
                        <span style={{fontSize: "30px", cursor: "pointer", color: "white"}} onClick={this.openNavigation}>&#9776;</span>
                    </div>
                {/*</Router>*/}
            </nav>
        );
    }
}

export default SideMenu;