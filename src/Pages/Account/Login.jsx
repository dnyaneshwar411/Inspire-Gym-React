import React, { useContext, useState } from "react";
import backgroundImage from '/assets/gym-workout.jpg';
import './account.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Configs/Firebase";
import { NavLink, Navigate } from "react-router-dom";
import { User } from "../../App";

const auth = getAuth(app);
const Login = () => {
    // check if loggedd in
    const user = useContext(User);
    if (user) {
        return <Navigate to='/' />;
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toastMessage, setToastMessage] = useState(false);
    const loginUser = function (e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log('User Sign In', user);
            })
            .catch((error) => {
                setToastMessage(true);
            });
    }

    const showPassword = () => {
        const passwordField = document.getElementById('password');
        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    };

    const closeToast = function () {
        setToastMessage(false);
    };
    return (
        <div className="account-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="form-container flex">
                <form>
                    <h3>LOGIN</h3>
                    <p>Welcome back to Inspire</p>
                    {toastMessage && <div className="toast-message">The credentials do no match. <i className="fa-solid fa-xmark" onClick={closeToast}></i></div>}
                    <div className="form-tag-container">
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" placeholder="Email" />
                    </div>
                    <div className="form-tag-container">
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} id="password" autoComplete="off" placeholder="Password" />
                        <i className="fa-regular fa-eye" id="showBtn" onClick={showPassword}></i>
                    </div>
                    <div className="form-tag-container">
                        <button className="btn-primary" onClick={loginUser}>Login</button>
                    </div>
                    <hr />
                    <div className="flex" style={{ justifyContent: 'space-between' }}>
                        <p>Don't have an account?</p>
                        <NavLink to='/account/sign-up'>Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;