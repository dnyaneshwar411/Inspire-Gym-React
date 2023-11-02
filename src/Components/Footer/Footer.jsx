import React, { useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import './footer.css'
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2x4kkdp', 'template_wg0sw96', form.current, 'Y-OWIHuTfDyLT-40g')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <footer>
            <div className="flex container">
                <div>
                    <NavLink to='/'>
                        <h1 className="text-highlighter">INSPIRE</h1>
                    </NavLink>
                    <p>Get fit and strong at the gym. Build muscle, burn calories, and boost your energy with cardio, weights, and expert guidance.</p>
                </div>
                <div className="important-links">
                    <h3>Important Links</h3>
                    <ul>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink to='/subscription'>Subscription</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h3>Newletter</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="hidden" name="message" value='Thanks for subscribing to Newsletter of Inspire' />
                        <div className="form-tag-container">
                            <input type="email" placeholder="Enter you email" name='user_email' />
                        </div>
                        <div className="form-tag-container">
                            <button type="submit" className="btn-primary">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="copyright-socials flex">
                <p>© INSPIRE 2023</p>
                <div className="socials">
                    <a href="https://www.instagram.com/athleanx" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/athleanx" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.youtube.com/@athleanx" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;