import React from 'react';
import { NavLink } from "react-router-dom";
import NavLinks from './NavLinks';
import "./Navigation.css"

function Navigation() {
    return (
        <header>
            <div className="header__container">
                <NavLink to='/'>
                    <img src="images/logo.png" alt="" />
                </NavLink>
                <div className="header__navigation">
                    <NavLinks />
                </div>
            </div>
        </header>
    )
}

export default Navigation
