import React from "react";
import './testimonials.css'
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = () => {
    return (
        <div className="testimonial">
            <h2>Our Clients Speak</h2>
            <div className="testmonial-card card-1">
                <h5>Efficient Collaborating</h5>
                <FontAwesomeIcon icon="fa-solid fa-quote-left" />
                <p>
                    I wanted my site very design oriented. Being someone from fashion
                    background and a product about my own clothing brand UI/UX was the top
                    priority and the UI team at Codellion handled it like a cake walk
                </p>

                <hr height="10" className="hrline" />
                <h6>Shashank Agrawal</h6>
            </div>
            <div className="testmonial-card card-2">
                <h5>Intuitive Design</h5>

                <p>
                    I wanted my site very design oriented. Being someone from fashion
                    background and a product about my own clothing brand UI/UX was the top
                    priority and the UI team at Codellion handled it like a cake walk
                </p>

                <hr height="10" />
                <h6>Shashank Agrawal</h6>
            </div>
            <div className="testmonial-card card-3">
                <h5>Mindblowing Service</h5>

                <p>
                    These Guys know their stuff from planning to delivery they included me
                    from start to end , I knew everything what is being developed
                    currently and when in doubt In one phone call I clould reach hem{" "}
                </p>

                <hr height="10" />
                <h6>Shashank Agrawal</h6>
            </div>
        </div>
    );
};
export default Testimonial;
