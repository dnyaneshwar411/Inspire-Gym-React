import { useContext } from "react";
import { User } from "../../App";
import userImg from '/assets/no-user.jpg'
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Configs/Firebase";
import { Navigate } from "react-router-dom";

const auth = getAuth(app);
function Profile() {
    const user = useContext(User);
    const logout = function () {
        auth.signOut();
    }
    if (!user) {
        return <Navigate to='/account/login' />;
    }
    return (
        <div id="profile-page">
            <div className="container">
                <div className="flex">
                    <img src={userImg} alt="" />
                    <div className="user-data">
                        <span>HELLO EVERYBODY, I AM</span>
                        <h2>JOHN SMIT</h2>
                        <p>I'm John Smith, a fitness enthusiast who's deeply committed to a healthy and active lifestyle. With a strong passion for weightlifting and nutrition, I've spent years in the gym, honing my physical strength and endurance. I believe in the transformative power of fitness and aim to motivate and guide others on their wellness journey. Whether it's hitting personal records or inspiring positive changes in those around me, I'm driven to make fitness a cornerstone of my life.</p>
                        <div className="socials">
                            <a target='_blank' href="https://www.facebook.com/athleanx"><i className="fa-brands fa-facebook"></i></a>
                            <a target='_blank' href="https://www.instagram.com/athleanx"><i className="fa-brands fa-instagram"></i></a>
                            <a target='_blank' href="tel: +919067183889"><i className="fa-brands fa-whatsapp"></i></a>
                            <a target='_blank' href="https://www.youtube.com/@athleanx"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                        <button onClick={logout} className="btn-primary">LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;