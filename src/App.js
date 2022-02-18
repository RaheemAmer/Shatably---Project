import "./App.css";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import MainPage from './components/mainPage/mainpage'
import Login from './components/login/login';
import About from './components/about/about';
import FormComponent from './components/Register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path={"/"} exact element={<MainPage />}></Route>
        <Route path={"/login"} exact element={<Login />}></Route>
        <Route path={"/signup"} exact element={<FormComponent />}></Route>
        <Route path={"/About"} exact element={<About />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
