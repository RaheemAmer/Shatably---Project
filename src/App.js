import "./App.css";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import MainPage from './components/mainPage/mainpage'
import Login from './components/login/login';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
