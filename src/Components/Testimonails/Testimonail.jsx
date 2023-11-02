import React, { useState } from "react";
import user1 from '/assets/person-1.jpg'
import user2 from '/assets/person-2.jpg'
import { NavLink } from "react-router-dom";
import './testimonial.css'

const Testimonial = () => {
    // const [person, setPerson] = useState(personImg);
    const testimonial = [{
        id: 0,
        name: 'John Smith',
        testimonial: "This gym is a true gem. The trainers' expertise and personalized guidance have propelled me to achieve remarkable fitness goals.I couldn't be happier with my transformation!",
        date: '15 th Oct, 2023',
        personImg: user1
    }, {
        id: 2,
        name: 'Emily Parker',
        testimonial: "My fitness journey has been incredible at this gym. The supportive community and cutting-edge facilities have empowered me to surpass my expectations and feel like a true gym goddess!",
        date: '5 th Nov, 2023',
        personImg: user2
    }];
    const [currentTestimonial, setCurrentTestimonial] = useState(testimonial[0]);
    return (
        <div id="testimonial">
            <h2>TESTIMONIAL</h2>
            <div className="testimonial-container">
                <div className="testimonial-content">
                    <p>{currentTestimonial.testimonial}</p>
                </div>
                <div className="flex">
                    <img src={currentTestimonial.personImg} alt="this is a gym enthusiast" />
                    <div>
                        <p className="person-name">{currentTestimonial.name}</p>
                        <p className="date-of-testimonial">{currentTestimonial.date}</p>
                    </div>
                </div>
                <span style={{ cursor: 'pointer', userSelect: 'none' }} onClick={() => {
                    currentTestimonial.id === 0 ? setCurrentTestimonial(testimonial[1]) : setCurrentTestimonial(testimonial[0])
                }}><i className="fa-solid fa-arrows-rotate"></i> Change</span>
            </div>
        </div>
    )
}

export default Testimonial;