import React from "react";
import bcaCap from "../Assets/qualifications/graduateBoy.png";
import mcaCap from "../Assets/qualifications/cap-1.png";
import hsPic from "../Assets/qualifications/hs.png";
// import qualificationImg from "../Assets/qualification.png";

const Qualifications = () => {
    return (
        <section id="qualifications">
            <main className="leftSection">
                <h2 className="heading" data-aos="fade-up">
                    Qualifications:{" "}
                </h2>
                <div className="qualification_container">
                    <div
                        className="pg dashedBorder"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <img src={mcaCap} alt="Post Graduate Education" />
                        <h3>MCA</h3>
                        <h5>Haldia Institute of Technology </h5>
                        <h5>2023 - 2025</h5>
                        <h5 className="textSky">On going...</h5>
                    </div>
                    <div
                        className="ug dashedBorder"
                        data-aos="fade-right"
                        data-aos-delay="700"
                    >
                        <img src={bcaCap} alt="Under Graduate Education" />
                        <h3>BCA</h3>
                        <h5>Panskura Banamali College (Autonomous)</h5>
                        <h5>2020 - 2023</h5>
                        <h5 className="textSky">CGPA - 8.51 </h5>
                    </div>
                    <div
                        className="hs dashedBorder"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                    >
                        <img src={hsPic} alt="Higher Secondary Education" />
                        <h3>Bio-Science</h3>
                        <h5>Marhtala Satyeswar Institution</h5>
                        <h5>2018 - 2020</h5>
                        <h5 className="textSky">Percentage - 87.2%</h5>
                    </div>
                </div>
            </main>

            {/* <aside className="rightSection" data-aos="fade-left">
                <img src={qualificationImg} alt="qualification" />
            </aside> */}
        </section>
    );
};

export default Qualifications;
