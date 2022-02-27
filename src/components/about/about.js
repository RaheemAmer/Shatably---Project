import React from 'react';
import './about.css';
import Foooter from '../Footer/Footer'

export default function NavBar() {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <br /> <br />
                            <hr />
                            <h1 className="title text-center">About us</h1>
                            <hr />
                            <br /> <br />
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/product1.jpeg" alt="product" className="w-100" />
                                <br /><br />    <br /><br />


                            </div>
                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="title">
                                        Who is ArtDeco ?
                                    </div>
                                    <div className="about-text">
                                        ArtDeco is a promising startup that aims to solve one of the main problems we face when we try to decorate our home, apartment, or even our company. We get frustrated and overwhelmed by the offers, the marketplace, the quality of material, etc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/product2.jfif" alt="product" className="w-100" />
                                <br /><br />  <br /><br />


                            </div>
                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="title">
                                        Why ArtDeco ?
                                    </div>
                                    <div className="about-text">
                                        Here comes our part, which is to create a place where the customer can finally fulfill his/her dreams by just picking the best offers made to him/her by the available companies. So, we help the customer to have the luxury and the variety of options to choose from and have a satisfying experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/how.jpg" alt="product" className="w-100" />
                            </div>
                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="title">
                                        How ArtDeco works?
                                    </div>
                                    <div className="about-text">
                                        We play as the middleman between the user and the contractor, we offer a marketplace where the user can upload his or her property add and we post it on our marketplace, then the contractor offers his or her, if the user accepts the offer, we take the agreed fees between both parties until the job is done and then we deliver the fees to the contractor when the user accepts the finished product.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                < br />
                < br />
                <div className="section-subscribe pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="title">Subscribe</p>
                                <span className="sbs-description">Subscribe to our newsletter</span>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-between w-100 h-100">
                                    <div className="row w-100 m-0">
                                        <div className="col-lg-9">
                                            <input type="text" className="w-100 sbs-area-inp" />
                                        </div>
                                        <div className="col-lg-3 d-flex align-items-center justify-content-between ">
                                            <input type="submit" className="w-100 h-100 btn btn-dark" value="Send" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Foooter />
        </section>
    )
}
