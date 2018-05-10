import React, { Component } from 'react';
/*import { NavLink } from "react-router-dom";*/
import logo from '../../images/zeew-green-websites-logo.svg';
import './Header.component.css';

export class Header extends Component {
    render() {
        return (
            <div className="header1 po-relative hash-linked" id="Home">
                <div className="container">
                    <nav className="navbar navbar-expand-xl h1-nav">
                        <div>
                            <a className="navbar-brand" href="/index.html">
                                <img src={logo} className="Logo" height={74} alt="Zeew Logo" />
                            </a>
                            <div className="btn-group languages">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="images/flags/Flag_of_the_United_Kingdom.svg" width="30px" alt="Selected Lang" /> UK
                                </a>
                                <div className="dropdown-menu bg-light">
                                    <a className="dropdown-item" href="#UK"><img src="images/flags/Flag_of_the_United_Kingdom.svg" width="30px" alt="Lang UK" /> UK</a>
                                    <a className="dropdown-item" href="#RU"><img src="images/flags/Flag_of_Russia.svg" width="30px" alt="Lang RU" /> Russia</a>
                                    <a className="dropdown-item" href="#KO"><img src="images/flags/Flag_of_South_Korea.svg" width="30px" alt="Lang KO" /> Korea</a>
                                    <a className="dropdown-item" href="#VT"><img src="images/flags/Flag_of_Vietnam.svg" width="30px" alt="Lang VT" /> Vietnam</a>
                                </div>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse"
                                data-target="#header1"
                                aria-controls="navbarTogglerDemo02"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="ti-menu"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="header1">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                {/*<li className="nav-item">
                                    <NavLink className="nav-item" exact to="/" activeClassName="active">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-item" activeClassName='active' to='/about'>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-item" to="/team" activeClassName="active">Team</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-item" to="/timeline" activeClassName="active">Timeline</NavLink>
                                </li>*/}
                                <li className="nav-item"><a className="nav-link" href="#Referral">Referral</a></li>
                                <li className="nav-item"><a className="nav-link" href="#News">News</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Solution">Solution</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Tokens">Tokens</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Roadmap">Roadmap</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Timeline">Timeline</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Team">Team</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Investors">Investors</a></li>
                                <li className="nav-item"><a className="nav-link" href="/page.html?id=faq">FAQ</a></li>
                                <li className="nav-item"><a className="btn btn-outline-info"
                                                            href="http://t.me/zeewgroup"
                                                            target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i> Telegram</a>
                                </li>
                                <li className="nav-item"><a className="btn btn-outline-zeew"
                                                            href="https://wallet.zeew.eu"><i
                                    className="fas fa-lock"></i> Zeew Wallet</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/*End Header 1 code*/}
                </div>
            </div>
        );
    }
}
