import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../img/zeew-logo-green.png';
import './header.component.css';

export class AppHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to ZEEW investors Frontpage</h1>
                <nav>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink activeClassName='active' to='/about'>About</NavLink>
                    <NavLink to="/timeline" activeClassName="active">Timeline</NavLink>
                </nav>
            </header>
        );
    }
}
