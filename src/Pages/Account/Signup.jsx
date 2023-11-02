import React, { useContext, useState } from "react"
import backgroundImage from '/assets/gym-workout.jpg';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Configs/Firebase";
import { NavLink, Navigate } from "react-router-dom";
import { User } from "../../App";

const auth = getAuth(app);
const SignUp = () => {
    const user = useContext(User);
    if (user) {
        return <Navigate to='/' />;
    };
    // Register user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toastMessage, setToastMessage] = useState(false);

    const signUpUser = function (e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User Created The Credentials are -', user);
            })
            .catch((error) => {
                setToastMessage(true);
            });
    }

    const showPassword = (e) => {
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
                    <h3>SIGN UP</h3>
                    <p>Register to Inspire</p>
                    {toastMessage && <div className="toast-message">The email is already taken use different email. <i className="fa-solid fa-xmark" onClick={closeToast}></i></div>}
                    <div className="form-tag-container">
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" placeholder="Email" />
                    </div>
                    <div className="form-tag-container">
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} id="password" autoComplete="off" placeholder="Password" />
                        <i className="fa-regular fa-eye" id="showBtn" onClick={showPassword}></i>
                    </div>
                    <div className="form-tag-container">
                        <button className="btn-primary" onClick={signUpUser}>Sign Up</button>
                    </div>
                    <hr />
                    <div className="flex" style={{ justifyContent: 'space-between' }}>
                        <p>Already have an account?</p>
                        <NavLink to='/account/login'>Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;