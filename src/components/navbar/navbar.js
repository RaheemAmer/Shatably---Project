import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import image from '../../images/logo-x.jpg';

// import { IoIosHome } from "react-icons/io";

export default function NavBar() {
    function CheckStorage() {
        const saved = localStorage.getItem("token");
        if (saved === '') {
            console.log('empty')
        }
    }
    return (
        <div className="header ">
            <div className="header__left">
                <Link to="/">
                    <img
                        className="header__logo"
                        src={image}
                        alt="logo"
                    />
                    {/* <h4><IoIosHome></IoIosHome>Shatably</h4> */}
                </Link>
                <h4><Link to="/About">How-It-Works</Link></h4>
                <h4>Browse-Ads</h4>
            </div >

            <div className="header__right">
                {/* <h4><Link to="/login">Log-In</Link></h4>
                <h4><Link to="/signup">Sign-Up </Link></h4> */}
                <button hidden={CheckStorage()}> <Link to="/login">Log-In </Link></button>
                <button hidden={CheckStorage()}> <Link to="/signup">Sign-Up </Link></button>
            </div>
        </div >
    )
}