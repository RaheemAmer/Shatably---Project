import './App.css';
import React from "react";
import NavBar from './components/navbar/navbar';
import SlideShow from './components/slideshow/slideshow'
import Features from './components/Feature/Feature';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Testimonial from "./components/Testmonials/testimonials";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>

      <NavBar />
      <SlideShow />

      <Features />
      <hr />

      <Content />
      <hr />
      <Testimonial />
      <Footer />

      {/* <Routes>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;