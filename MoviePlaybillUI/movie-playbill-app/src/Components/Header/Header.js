import React, {Component} from 'react';
import SideMenu from "./SideMenu/SideMenu";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="headerMenu">
                    <SideMenu/>
                </div>
                <a href="/" id="logoHome"><img src="/images/logo.png" alt="Logo" id="headerLogo"/></a>
            </div>
        );
    }
}

export default Header;