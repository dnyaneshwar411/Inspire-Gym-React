import React from "react";
import './about.css';
import about from '/assets/about.jpg'
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div id="about">
            <div className="flex">
                <img src={about} alt="" />
                <div className="about-content">
                    <h2>ABOUT US</h2>
                    <p>Inspire Gym is a state-of-the-art fitness facility dedicated to helping you achieve your fitness goals. We offer a wide range of equipment and classes to meet the needs of all fitness levels, from beginners to experienced athletes. </p>
                    <p>At Inspire Gym, we believe that fitness is a journey, not a destination. That's why we offer a variety of membership options to fit your budget and lifestyle. We also offer a free trial membership so you can try us out before you commit.</p>
                    <NavLink to='/about'><button className="btn-primary">Find Out More</button></NavLink>
                </div>
            </div>
            <div className="our-numbers flex">
                <div>
                    <i className="fa-regular fa-clock"></i>
                    <div className="numbers">8hrs / day</div>
                    <div>WORKING HOURS</div>
                </div>
                <div>
                    <i className="fa-regular fa-heart"></i>
                    <div className="numbers">200+</div>
                    <div>HAPPY CLIENTS</div>
                </div>
                <div>
                    <i className="fa-regular fa-thumbs-up"></i>
                    <div className="numbers">150+</div>
                    <div>SUCCESS STORIES</div>
                </div>
                <div>
                    <i className="fa-regular fa-gem"></i>
                    <div className="numbers">125+</div>
                    <div>PERFECT BODIES</div>
                </div>
            </div>
        </div>
    )
}

export default About;