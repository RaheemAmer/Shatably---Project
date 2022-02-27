import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './testimonials.css'
const img1 = require('../../images/5.jpg');
const img2 = require("../../images/2.jpg");
const img4 = require("../../images/4.png");
const img5 = require("../../images/5.jpg");

export default class Testimonials extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <img src={img1} alt="img2" />
                    <div className="myCarousel">
                        <h3>Sayed Marzouk</h3>
                        <h4>Doctor</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same siteocial media element on the same site
                        </p>
                    </div>
                </div>

                <div>
                    <img src={img2} alt="img2" />
                    <div className="myCarousel">
                        <h3>Sayed Marzouk</h3>
                        <h4>Doctor</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same siteocial media element on the same site
                        </p>
                    </div>
                </div>

                <div>
                    <img src={img4} alt="img4" />
                    <div className="myCarousel">
                        <h3>Ahmed Mohamed</h3>
                        <h4>Accountant</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same siteocial media element on the same site
                        </p>
                    </div>
                </div>
                <div>
                    <img src={img5} alt="img2" />
                    <div className="myCarousel">
                        <h3>Sayed Marzouk</h3>
                        <h4>Doctor</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same siteocial media element on the same site
                        </p>
                    </div>
                </div>
            </Carousel>
        );
    }
}