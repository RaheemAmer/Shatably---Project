import React from 'react';
import './Footer.css';
// import LanguageIcon from '@material-ui/icons/Language';
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import image from '../../images/logo-x.jpg';

// import HelpIcon from '@material-ui/icons/Help';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top--left">
                    <img src={image} alt="logo" />

                </div>
                <div className="footer__top--right">
                    <div className="footer__top--right-one">
                        <h4>Companies</h4>
                        <p>Contests</p>
                        <p>Categories</p>
                        <p>Designs</p>
                        <p>Contests</p>
                        <p>Companies</p>

                    </div>
                    <div className="footer__top--right-two">
                        <h4>About</h4>
                        <p>About Us</p>
                        <p>How it Works</p>
                        <p>Security</p>
                        <p>Investor</p>
                        <p>Sitemap</p>


                    </div>
                    <div className="footer__top--right-three">
                        <h4>Terms</h4>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Copyright Policy</p>
                        <p>Code of Conduct</p>
                        <p>Fees and Charges</p>

                    </div>
                    <div className="footer__top--right-four">
                        <h4>Contact-US</h4>
                        <p>
                            <IoLogoFacebook></IoLogoFacebook>
                            <IoLogoWhatsapp></IoLogoWhatsapp>
                            <IoLogoInstagram></IoLogoInstagram>
                            <IoLogoTwitter></IoLogoTwitter>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer