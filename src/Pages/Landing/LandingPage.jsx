import React from "react"
import Hero from "../../Components/Hero/Hero";
import Testimonial from "../../Components/Testimonails/Testimonail";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import BlogListing from "../../Components/Blogs/BLogs";
import './landing-page.css'
import Coach from "../../Components/Coach/Coach";
import equipment1 from '/assets/equipment-1.jpg'
import equipment2 from '/assets/equipment-2.jpg'
import equipment3 from '/assets/equipment-3.jpg'
import equipment4 from '/assets/equipment-4.jpg'
import equipment5 from '/assets/equipment-5.jpg'
import equipment6 from '/assets/equipment-6.jpg'

const LandingPage = () => {
    return (
        <main>
            <Hero />
            <div className="words-carousel">
                <div className="carousel-words">
                    <span className="text-transparent">STAY FOCUSED</span>
                    <span>LIFT HEAVY</span>
                    <span className="text-transparent">STAY COMMITTED</span>
                    <span>PUSH HARD</span>
                    <span className="text-transparent">OWN IT</span>
                    <span>CRUSH LIMITS</span>
                </div>
                <div className="carousel-words">
                    <span className="text-transparent">STAY FOCUSED</span>
                    <span>LIFT HEAVY</span>
                    <span className="text-transparent">STAY COMMITTED</span>
                    <span>PUSH HARD</span>
                    <span className="text-transparent">OWN IT</span>
                    <span>CRUSH LIMITS</span>
                </div>
            </div>
            <div className="container">
                <div className="our-equipments">
                    <h2>OUR EQUIPMENTS</h2>
                    <div className="flex">
                        <img src={equipment1} alt="" />
                        <img src={equipment2} alt="" />
                        <img src={equipment4} alt="" />
                        <img src={equipment3} alt="" />
                        <img src={equipment5} alt="" />
                        <img src={equipment6} alt="" />
                    </div>
                </div>
                <Coach />
                <BlogListing />
            </div>
            <Services />
            <div className="container margin-block">
                <Testimonial />
            </div>
            <About />
        </main>
    )
}

export default LandingPage;