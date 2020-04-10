import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footerContainer">
                <div id="siteMap" className="footerSection">
                    <span className="footerSectionTitle">Карта сайту</span>
                    <div id="siteMapLinks">
                        <div className="siteMapColumn">
                            <a href="/">Головна</a>
                            <a href="/now">Зараз у кіно</a>
                        </div>
                        <div className="siteMapColumn siteMapLastColumn">
                            <a href="/soon">Скоро в прокаті</a>
                            <a href="/theaters">Кінотеатри</a>
                        </div>
                    </div>
                </div>
                <div id="socialsContainer" className="footerSection">
                    <span className="footerSectionTitle">Соціальні мережі</span>
                    <a href="https://www.facebook.com">
                        <i id="social-fb" className="fa fa-facebook-square fa-3x social"> </i>
                    </a>
                    <a href="https://instagram.com">
                        <i id="social-ig" className="fa fa-instagram fa-3x social"> </i>
                    </a>
                    <a href="https://twitter.com">
                        <i id="social-tw" className="fa fa-twitter-square fa-3x social"> </i>
                    </a>
                    <a href="mailto:some_mail@gmail.com">
                        <i id="social-em" className="fa fa-envelope-square fa-3x social"> </i>
                    </a>
                </div>
                <div id="copyright" className="footerSection">
                    <span>
                        © 2020 MovieSquad<br/>
                        Всі права захищені
                    </span>
                </div>
            </div>
        );
    }
}

export default Footer;