import { NavLink } from 'react-router-dom';
import './coach.css'
import coachImg from '/assets/our-coach.jpg'
const Coach = () => {
    return (
        <div id="coach">
            <div className="coach-container flex">
                <img src={coachImg} alt="" />
                <div className="coach-content">
                    <h2>OUR BEST COACH</h2>
                    <p className="coach-info">
                        <span className="text-highlighter">Adam Flexwheeler</span>, a seasoned fitness expert, is dedicated to helping clients achieve their fitness goals. With years of experience, he specializes in strength training, nutrition, and personalized fitness plans, ensuring clients reach their full potential
                    </p>
                    <div className="coach-services">
                        <ul>
                            <li><i className="fa-solid fa-dumbbell"></i> Personalized Workout Plans</li>
                            <li><i className="fa-regular fa-eye"></i> Exercise Demonstrations</li>
                            <li><i className="fa-solid fa-chart-line"></i> Progress Tracking</li>
                            <li><i className="fa-solid fa-shield"></i> Safety</li>
                        </ul>
                    </div>
                    <NavLink to='/subscription'><button className="btn-primary">START TRAINING</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Coach;