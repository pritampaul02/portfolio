import React from "react";
import { WorksMap } from "./Works.map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const WorksComp = () => {
    return (
        <section id="works">
            <h2 className="heading" data-aos="fade-up">
                Works
            </h2>
            <div className="works__Container">
                {WorksMap.map((works, index) => {
                    return (
                        <div
                            className="works__box"
                            key={index}
                            data-aos="fade-right"
                        >
                            <div className="works__details">
                                <h5 className="projectTitle">
                                    {works.projectTitle}
                                </h5>
                                <div className="projectDetails">
                                    {works.projectDetails}
                                </div>

                                <div className="techList__container">
                                    {/* <h5 className="text-sm">Technologies Used :</h5> */}
                                    <div className="techList">
                                        {works.techUsed.map(
                                            (tech, techIndex) => {
                                                return (
                                                    <span key={techIndex}>
                                                        {tech}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="worksLinks">
                                {works.liveLink != null && (
                                    <a
                                        href={works.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Live Link"
                                    >
                                        <FontAwesomeIcon icon={faEarthAsia} />
                                    </a>
                                )}
                                {works.githubLink != null && (
                                    <a
                                        href={works.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Source Code"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                )}
                            </div>

                            <div className="works__view">
                                <img
                                    src={works.desktopView}
                                    alt={works.imgAlt}
                                    className="deskViewImg"
                                />
                                <img
                                    src={works.mobileView}
                                    alt={works.imgAlt}
                                    className="mobileViewImg"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WorksComp;
