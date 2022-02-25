import "./App.css";
import React from "react";
import NavBar from "./components/navbar/navbar";
import MainPage from './components/mainPage/mainpage'
import Login from './components/login/login';
import FormComponent from './components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactorProfile from './components/contractorProfile/contractorProfile'
import SettingsPage from './components/SettingsPage/settingsPage'
import Footer from './components/Footer/Footer';



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
        <Route path={"/ContactorProfile"} exact element={<ContactorProfile />}></Route>
        <Route path={"/SettingsPage"} exact element={<SettingsPage />}></Route>

      </Routes>
      <div className="App">
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
