import React, { useContext } from "react";
import { NavLink, Navigate } from 'react-router-dom'
import './nav.css'
import logo from '/assets/logo.png'
import { User } from "../../App";

const Nav = () => {
    const user = useContext(User);
    const toggleNavBar = function () {
        const navDropDown = document.querySelector('nav ul');
        const body = document.querySelector('body');
        const listItems = navDropDown.querySelectorAll('li');
        navDropDown.classList.toggle('toggle-nav-bar');
        body.classList.toggle('body-overflow');
        listItems.forEach(listItem => {
            listItem.addEventListener('click', () => {
                navDropDown.classList.remove('toggle-nav-bar');
                body.classList.remove('body-overflow');
            });
        })
    }
    return (
        <nav className="flex container">
            <NavLink to='/'>
                <div className="branding flex">
                    <img src={logo} alt="" />
                    <h1 className="text-highlighter">INSPIRE</h1>
                </div>
            </NavLink>
            <ul className="flex">
                <li><NavLink to='/blogs'>Blogs</NavLink></li>
                <li><NavLink to='/subscription'>Subscription</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li>
                    {!user && <NavLink to='/account/login'> <button className="btn-primary">Login</button> </NavLink>
                    }
                    {user && <NavLink to='/account/profile'><button className="btn-primary">Profile</button></NavLink>}
                </li>
            </ul>
            <i className="fa-solid fa-bars" onClick={() => { toggleNavBar() }}></i>
        </nav>
    )
}

export default Nav;