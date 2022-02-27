import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';
import image from '../../images/logo-x.jpg';

// import { IoIosHome } from "react-icons/io";

export default function NavBar() {
    // function CheckStorage() {
    //     const saved = localStorage.getItem("token");
    //     if (saved === '') {
    //         console.log('empty')
    //     }
    // }
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
                {/* hidden={CheckStorage()} */}
                <button > <Link to="/Choose">Login/Register </Link></button>
                {/* <button > <Link to="/Choose">Sign-Up </Link></button> */}
            </div>
        </div >
    )
}