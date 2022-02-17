import React from 'react';
import SlideShow from "../slideshow/slideshow";
import Features from "../Feature/Feature";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/testimonials";

export default function MainPage() {
    return (
        <>
            <SlideShow />
            <Features />
            <hr />
            <Content />
            <hr />
            <header className="App-header">
                <h1>Hear From Our Clients </h1>
                <Testimonials />
            </header>
            <Footer />
        </ >

    )
}