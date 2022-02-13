import './App.css';
import React from "react";
import NavBar from './components/navbar/navbar';
import SlideShow from './components/slideshow/slideshow'
import Features from './components/Feature/Feature';
import Content from './components/Content/Content'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <SlideShow />

      <Features />
      <hr />
      <Content />


      {/*
    <Switch>
    </Switch> */}
    </BrowserRouter>
  );
}

export default App;