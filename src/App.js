import "./App.css";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import MainPage from './components/mainPage/mainpage'
import Userlogin from './components/Userlogin/login';
import Companylogin from './components/Complogin/login';
import CompanySignUp from './components/CompRegister/register';
import About from './components/about/about';
import Choose from './components/User_Company/choose'
import UserSignUp from './components/UserRegister/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path={"/"} exact element={<MainPage />}></Route>
        <Route path={"/user_login"} exact element={<Userlogin />}></Route>
        <Route path={"/user_signup"} exact element={<UserSignUp />}></Route>
        <Route path={"/company_login"} exact element={<Companylogin />}></Route>
        <Route path={"/company_signup"} exact element={<CompanySignUp />}></Route>
        <Route path={"/About"} exact element={<About />}></Route>
        <Route path={"/Choose"} exact element={<Choose />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
