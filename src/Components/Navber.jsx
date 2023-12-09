import {
    faAddressBook,
    faAddressCard,
    faBarsStaggered,
    faBrain,
    faHome,
    faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Navber = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, delay: 50 });
        AOS.refresh();
    }, []);

    const [showNavMenu, setShowNavMenu] = useState(true);

    return (
        <nav className="nav">
            <div className="navContainer">
                <div className="nevleftsec-mobile">
                    {/* navber logo or portfolio title  */}
                    <h2 className="navTitle" data-aos="fade-right">
                        Portfolio
                    </h2>

                    {/*  navber button  */}
                    <button
                        className="hamberBtn"
                        data-aos="fade-left"
                        onClick={() => setShowNavMenu(!showNavMenu)}
                    >
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </button>
                </div>

                {/* navber links  */}
                <div
                    className={
                        showNavMenu
                            ? "navLink__container hideNavMenu-mob"
                            : "navLink__container"
                    }
                    // data-aos="fade-down"
                >
                    <ul className="nav__items">
                        <a
                            href="#home"
                            onClick={() => setShowNavMenu(!showNavMenu)}
                        >
                            <li className="nav__item">
                                <FontAwesomeIcon icon={faHome} />
                                Home
                            </li>
                        </a>

                        <a
                            href="#about"
                            onClick={() => setShowNavMenu(!showNavMenu)}
                        >
                            <li className="nav__item">
                                <FontAwesomeIcon icon={faAddressCard} />
                                About
                            </li>
                        </a>

                        <a
                            href="#qualifications"
                            onClick={() => setShowNavMenu(!showNavMenu)}
                        >
                            <li className="nav__item">
                                <FontAwesomeIcon icon={faAddressCard} />
                                Qualifications
                            </li>
                        </a>

                        <a
                            href="#skills"
                            onClick={() => setShowNavMenu(!showNavMenu)}
                        >
                            <li className="nav__item">
                                <FontAwesomeIcon icon={faBrain} />
                                Skills
                            </li>
                        </a>

                        <a
                            href="#works"
                            onClick={() => setShowNavMenu(!showNavMenu)}
                        >
                            <li className="nav__item">
                                <FontAwesomeIcon icon={faToolbox} />
                                Works
                            </li>
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setShowNavMenu(!showNavMenu)}
                        >
                            <li className="nav__item">
                                <FontAwesomeIcon icon={faAddressBook} />
                                Contact
                            </li>
                        </a>
                    </ul>

                    {/* <button className="hamberBtn">
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navber;
