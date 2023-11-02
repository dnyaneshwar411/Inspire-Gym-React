import React, { useContext } from "react";
import About from "../../Components/About/About";
import { User } from "../../App";

const AboutPage = () => {
    const { user } = useContext(User);
    return (
        <div id="about-page">
            <div className="">
                <About />
            </div>
        </div>
    )
}

export default AboutPage;