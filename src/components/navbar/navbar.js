import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
// import { Container, Nav, NavDropdown } from 'react-bootstrap'

import { IoIosHome } from "react-icons/io";
export default function NavBar() {
    return (
        <div className="header ">
            <div className="header__left">
                <Link className='logo_name' to="/">
                    <h4><IoIosHome></IoIosHome>Shatably</h4>
                </Link>
                <h4>How-It-Works</h4>
                <h4>Browse-Ads</h4>
            </div >

            <div className="header__right">
                <h4><Link to="/login">Log-In</Link></h4>
                <h4><Link to="/signup">Sign-Up </Link></h4>
                <button> Post an AD</button>
            </div>
        </div >
    )
}