import React from "react";
import { NavLink } from 'react-router-dom'
import './hero.css'
import logo from '/assets/hero-banner.jpg'

const Hero = () => {
    return (
        <div id="hero" style={{ backgroundImage: `url(${logo})` }}>
            <div className="full-container flex">
                <div className="wrapper">
                    <h1>RAISE THE BAR OF YOUR FITNESS</h1>
                    <p>Explore our top-notch gym featuring modern equipment and professional trainers. Join us now to start your fitness journey and unlock a healthier, stronger you. Get started today!</p>
                    <NavLink to='/contact'><button className="btn-primary">Get Started Now</button></NavLink>
                    <div className="flex">
                        <div>
                            <span>200+</span>
                            <p>HAPPY CLIENTS</p>
                        </div>
                        <div>
                            <span>150+</span>
                            <p>SUCCESS STORIES</p>
                        </div>
                        <div>
                            <span>125+</span>
                            <p>PERFECT BODIES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero;