// import { NavLink } from "react-router-dom";
// import { MenuList } from "./MenuList";
// import { FiMenu, FiX } from 'react-icons/fi';
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
// import {BsFillHouseFill} from 'react-icons/bs'

// const Navbar = () => {

//     const[click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     return (
//             <div className='navbar'>
//             <div className='container'>
//                 <h1><span><BsFillHouseFill />Art</span>Deco</h1>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     {/* <li><a href='#'>Home</a></li> */}
//                     <li ><Link to="/Choose">Login/Register </Link></li>
//                     <li><Link to="/Choose">Login/Register </Link></li>
//                     <li><Link to="/Choose">Login/Register </Link></li>
//                     <button className='btn'><Link to="/Choose">Create Account</Link></button>
//                 </ul>
//                 <div className='hamburger' onClick={handleClick}>
//                     {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Navbar;


// function Navbar() {
//   const myFunction = () => {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

//   return (
//     <nav>
//       <div className="topnav" id="myTopnav">
//             <li ><Link to="/mainpage" className="active">Home </Link></li>
//             <li><Link to="/about">about </Link></li>
//             <li><Link to="/Choose">Login/Register </Link></li>
//         <a href="javascript:void(0);" className="icon" onClick={myFunction}>
//           <i className="fa fa-bars"></i>
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




/* .navbar {
    width: 100%;
    height: 90px;
    top: 0;
    left: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.navbar .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.navbar span {
    color: #5651e5;
}

.navbar .nav-menu {
    display: flex;
}

.navbar li {
    padding: 1rem;
}

.hamburger {
    display: none;
}

.navbar .icon {
    font-size: 1.5rem;
}

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: #333;
}

body {
    margin: 0;
    font-family: 'Raleway', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.container {
    max-width: 1240px;
    margin: auto;
}

.btn {
    color: #fff;
    padding: 12px 24px;
    background-image: linear-gradient(45deg, #5651e5 0%, #709dff 100%);
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    transition: .4s;
    cursor: pointer;
}

.btn:active {
    transform: translate(4px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0, .2);
    border-bottom: none;
}

@media screen and (max-width:940px) {
    .hamburger {
        display: block;
    }
    .navbar .nav-menu {
        position: absolute;
        opacity: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 90px;
        right: -100%;
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, .98);
        transition: 0.4s ease-in-out;
        z-index: 10;
    }
    .navbar .active {
        right: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 90px;
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, .98);
        transition: 0.4s ease-in-out;
        z-index: 10;
    }
    .navbar .nav-menu li a {
        font-size: 2rem;
    }
} */


/* 2 */