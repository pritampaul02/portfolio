import React from "react";
// import htmlImg from "../Assets/skills/html.png";
// import cssImg from "../Assets/skills/css-3.png";
// import scssImg from "../Assets/skills/sass.png";
// import bootstrapImg from "../Assets/skills/bootstrap.png";
// import nodejsImg from "../Assets/skills/node-js.png";
// // import mongoImg from "../Assets/skills/MongoDB.png";
// import figmaImg from "../Assets/skills/figma.png";
// import gitImg from "../Assets/skills/github.png";
// import mongoImg from "../Assets/skills/Untitle1d.png";

// import SkillsImg from "./skillsImg";

import { Skillsmap } from "./Skills.map";

const SkillsComp = () => {
    return (
        <section id="skills">
            <h2 className="heading" data-aos="fade-up">
                Skills :
            </h2>
            <div className="skillContainer">
                {/* start */}

                {Skillsmap.map((skills, index) => {
                    const widthValue = skills.progress;
                    const style = {
                        width: widthValue,
                    };
                    return (
                        <div
                            className="dashedBorder"
                            key={index}
                            data-aos="zoom-in"
                        >
                            <img
                                src={skills.img}
                                alt={skills.alt}
                                className={skills.clname}
                            />
                            <h3>{skills.title}</h3>
                            <h5>Progress :</h5>
                            <div className="progress-bar">
                                <span
                                    data-width={skills.progress}
                                    style={style}
                                >
                                    {skills.progress}
                                </span>
                            </div>
                        </div>
                    );
                })}

                {/* end  */}

                {/* <div className="dashedBorder">
                    <img src={SkillsImg.htmlImg} alt="html" />
                    <h3>HTML</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="90%">90%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img src={SkillsImg.cssImg} alt="html" />
                    <h3>CSS</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="90%">90%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img src={SkillsImg.scssImg} alt="html" />
                    <h3>SCSS</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="90%">90%</span>
                    </div>
                </div>
                // {/* <div className="dashedBorder">
                //     <img src={SkillsImg.bootstrapImg} alt="html" />
                //     <h3>Bootstrap</h3>
                // </div> 
                <div className="dashedBorder">
                    <img
                        src={SkillsImg.bootstrapImg2}
                        alt="bootstrap"
                        className="img-l"
                    />
                    <h3>Bootstrap</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="90%">90%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img src={SkillsImg.javaScriptImg} alt="javascript" />
                    <h3>JavaScript</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="90%">90%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img src={SkillsImg.nodejsImg} alt="nodeJS" />
                    <h3>NodeJS</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="10%">10%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img
                        src={SkillsImg.mongoDbImg}
                        alt="html"
                        className="img-l"
                    />
                    <h3>Mongo DB</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="90%" style="width:80%">90%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img
                        src={SkillsImg.mongoImg}
                        alt="html"
                        className="img-f"
                    />
                    <h3>Mongo DB</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="10%">10%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img src={SkillsImg.figmaImg} alt="html" />
                    <h3>Figma</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="50%">50%</span>
                    </div>
                </div>
                <div className="dashedBorder">
                    <img src={SkillsImg.gitImg} alt="html" />
                    <h3>Git & Git Hub</h3>
                    <h5>Progress :</h5>
                    <div className="progress-bar">
                        <span data-width="30%">30%</span>
                    </div>
                </div>*/}
            </div>
        </section>
    );
};

export default SkillsComp;
