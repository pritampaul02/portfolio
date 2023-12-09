import React from "react";
import me from "../Assets/images/potrait-blue.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faDownload,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Home = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 1200, delay: 50 });
    //     AOS.refresh();
    // }, []);

    return (
        <>
            <section id="home">
                <main className="left__section">
                    <h3
                        className="hayTxt"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    >
                        Hay there...
                    </h3>
                    <h1
                        className="selfName"
                        data-aos="fade-right"
                        data-aos-delay="700"
                    >
                        I'm <span className="nameTxt">Pritam Paul</span>
                    </h1>
                    <h2
                        className="selfDeclaration"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                    >
                        And I'm a{" "}
                        <Typewriter
                            options={{
                                strings: [
                                    "Student",
                                    "Web Developer",
                                    "Front End Developer",
                                    "UI/UX Designer",
                                ],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "typeWriterText",
                            }}
                        />
                    </h2>
                    <div
                        className="descText_box"
                        data-aos="fade-right"
                        data-aos-delay="1300"
                    >
                        <p className="descTxt">
                            Love to create and design beautiful{" "}
                            <span className="textSky">Websites</span> and{" "}
                            <span className="textSky">Web Applications</span>.
                            Experties in creating beautiful good looking{" "}
                            <span className="textSky"> UI/UX design </span> and{" "}
                            <span className="textSky"> Websites</span>.
                        </p>
                    </div>

                    <div
                        className="social_links"
                        // data-aos="fade-right"
                        // data-aos-delay="1600"
                    >
                        <div data-aos="fade-right" data-aos-delay="100">
                            <a
                                href="https://github.com/pritampaul02"
                                target="blank"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="400">
                            <a
                                href="https://www.facebook.com/pritam.paul.58958343?mibextid=9R9pXO"
                                target="blank"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="900">
                            <a
                                href="https://instagram.com/_pritam.paul?igshid=OGQ5ZDc2ODk2ZA=="
                                target="blank"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="1200">
                            <a
                                href="https://www.linkedin.com/in/pritam-paul-141621254"
                                target="blank"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="1600">
                            <a
                                href="mailto:paulpritam20062002@gmail.com"
                                target="blank"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>

                    <div className="btnContainer">
                        <div
                            data-aos="fade-down-left"
                            data-aos-delay="200"
                            className="btn btnBack_animation"
                            role="button"
                        >
                            <a href="#about" role="button">
                                <FontAwesomeIcon icon={faAddressCard} /> About
                                me
                            </a>
                        </div>
                        <div
                            data-aos="fade-down-right"
                            className="btn btn-solid"
                            role="button"
                            data-aos-delay="500"
                        >
                            <a href="#resume" role="button">
                                <FontAwesomeIcon icon={faDownload} /> Resume
                            </a>
                        </div>
                    </div>
                </main>
                <aside data-aos="fade-left" data-aos-delay="300">
                    <img src={me} alt="it's me" className="right_image" />
                </aside>
            </section>
        </>
    );
};

export default Home;
