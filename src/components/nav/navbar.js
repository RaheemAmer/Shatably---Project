import React, {useState,useEffect} from 'react'
import { Link ,useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
const [open, setOpen] = useState(false);
const [screenWidth, setScreenWidth] = useState(0);
const location = useLocation();

const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
        setOpen(true);
    }
};

useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
}, []);

const getListStyle = () => {
    if (screenWidth < 800) {
    return { left: open ? 0 : "-100vw" };
    }
};

const handleClose = () => {
    if (screenWidth < 800) {
    setOpen(false);
    }
};

return (
    <nav>
    <div className="container">
        <div className="wrapper">
        <Link to="/" className="brand">
            <h1>ArtDeco</h1>
        </Link>

        <div className="menu">
            <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="menu-bar"
            style={{ opacity: !open ? 1 : 0, right: "-56px " }}
            onClick={() => {
                setOpen(!open);
            }}
            />
            <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="menu-cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
                setOpen(!open);
            }}
            />
        </div>

        <ul className="list" style={getListStyle()}>
            <li>
            <Link
                to="/"
                onClick={handleClose}
                className={location.pathname === "/" ? "active" : ""}
            >
                Home
            </Link>
            </li>
            <li>
            <Link
                to="/About"
                onClick={handleClose}
                className={location.pathname === "/about" ? "active" : ""}
            >
                About
            </Link>
            </li>
            <li>
            <Link
                to="/Blog"
                onClick={handleClose}
                className={location.pathname === "/Blog" ? "active" : ""}
            >
                Browse Ads
            </Link>
            </li>
            <li>
            <Link
                to="/Userprofile"
                onClick={handleClose}
                className={location.pathname === "/Userprofile" ? "active" : ""}
            >
                Client
            </Link>
            </li>
            <li>
            <Link
                to="/ClientFeed"
                onClick={handleClose}
                className={location.pathname === "/ClientFeed" ? "active" : ""}
            >
                ClientFeed
            </Link>
            </li>
            <li>
            <Link
                to="/ContactorProfile"
                onClick={handleClose}
                className={location.pathname === "/ContactorProfile" ? "active" : ""}
            >
                Contractor
            </Link>
            </li>
            <li>
            <Link
                to="/Jobdetails"
                onClick={handleClose}
                className={location.pathname === "/Jobdetails" ? "active" : ""}
            >
                Job details
            </Link>
            </li>
            <li>
            <Link
                to="/Choose"
                onClick={handleClose}
                className={location.pathname === "/contact" ? "active" : ""}
            >
                Create Account
            </Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
