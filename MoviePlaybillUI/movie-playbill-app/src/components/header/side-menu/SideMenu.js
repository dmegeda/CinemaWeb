import React, {Component} from 'react';
import './SideMenu.css';

class SideMenu extends Component {

    closeNavigation = () => {
        document.getElementsByTagName("BODY")[0].style.overflow = "auto";
        document.getElementById("sidenavMenu").style.width = "0";
    };

    openNavigation = () =>  {
        document.getElementById("sidenavMenu").style.width = "100%";
        document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    };

    render() {
        return (
            <nav>
                <div id="sidenavMenu" className="sidenav">
                    <span className="closeNavBtn" onClick={this.closeNavigation}>&times;</span>
                    <div id="menuOptions">
                        <a href="/">Головна</a>
                        <a href="/now">Зараз у кіно</a>
                        <a href="/soon">Скоро в прокаті</a>
                        <a href="/theaters">Кінотеатри</a>
                    </div>
                </div>
                <span className="openNavBtn" onClick={this.openNavigation}>&#9776;</span>
            </nav>
        );
    }
}

export default SideMenu;