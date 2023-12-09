import React from "react";
// import smallDp from "../Assets/miniDp.png";
import aboutDp from "../Assets/images/potrait-yellow.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <section id="about">
            <aside data-aos="fade-right">
                {/* <img src={smallDp} alt="small dp" /> */}
                <img src={aboutDp} alt="small dp" />
            </aside>
            <main data-aos="fade-left">
                <h2 className="aboutTitle">About me:</h2>
                <p className="aboutText">
                    I've recently completed my Bachelor of Computer Application
                    (BCA) degree from &nbsp;
                    <a
                        href="https://panskurabanamalicollege.org"
                        target="blank"
                    >
                        Panskura Banamali College (Autonomous)
                    </a>
                    . From the first day of my college, I have been focussing on
                    the field of Web Development and trying to learn new things
                    from different platforms. And trying to acquire knowledge
                    from teachers and other resources.
                </p>

                {/* create a button for go to skills section fast  */}
                <div className="btnContainer">
                    <div
                        data-aos="fade-down-left"
                        data-aos-delay="200"
                        // className="btn btn-orange btnBack-orange_animation"
                        className="btn btnBack_animation"
                        role="button"
                    >
                        <a href="#skills" role="button">
                            <FontAwesomeIcon icon={faBrain} /> See Skills
                        </a>
                    </div>
                    {/* <div
                        data-aos="fade-down-right"
                        className="btn btn-solid"
                        role="button"
                        data-aos-delay="500"
                    >
                        <a href="#resume" role="button">
                            <FontAwesomeIcon icon={faDownload} /> Resume
                            Go
                        </a>
                    </div> */}
                </div>
            </main>
        </section>
    );
};

export default About;
