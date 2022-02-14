import React from 'react';
import SlideShow from "../slideshow/slideshow";
import Features from "../Feature/Feature";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Testimonial from "../Testmonials/testimonials";

export default function MainPage() {
    return (
        <>
            <SlideShow />
            <Features />
            <hr />
            <Content />
            <hr />
            <Testimonial />
            <Footer />
        </ >

    )
}