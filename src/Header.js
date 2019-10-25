import React from 'react';
import logo from './assets/image/logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './App.css';

function Header () {
    return(
        <header className="App-header">
            <nav className="app-nav">
                <div>
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div>
                    <Link to="/about"> About </Link>
                </div>
                <div>
                    <Link to="/donate"> Donate </Link>
                </div>
                <div>
                    <Link to="/calendar"> Calendar </Link>
                </div>
                <div>
                    <Link to="/volunteer"> Volunteer </Link>
                </div>
            </nav>
        </header>
    )
};
  
export default Header;

