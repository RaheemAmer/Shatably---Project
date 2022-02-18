import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import image from '../../images/logo-x.jpg';

// import { IoIosHome } from "react-icons/io";

export default function NavBar() {
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
// import React, { useState } from "react";
// import Button from "./Button";
// import menuItems from "./MenuItems";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "./Navbar.css";

// const Navbar = () => {
//     const [active, setActive] = useState(false);

//     const handleClick = () => {
//         setActive(!active);
//     };

//     return (
//         <nav className="navbar">
//             <h1 className="navbar-logo">
//                 Shatably <FontAwesomeIcon icon="fa-light fa-house-building" />
//             </h1>
//             <div className="menu-icon" onClick={handleClick}>
//                 <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
//             </div>
//             <ul className={active ? "nav-menu active" : "nav-menu"}>
//                 {menuItems.map((item, index) => {
//                     return (
//                         <li key={index}>
//                             <a href={item.url} className={item.cName}>
//                                 {item.title}
//                             </a>
//                         </li>
//                     );
//                 })}
//             </ul>
//             <Button>Login</Button>
//             <Button>SIGN UP</Button>
//         </nav>
//     );
// };

// export default Navbar;
