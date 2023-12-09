import React from "react";

const Footer = () => {
    return (
        <footer>
            <section id="footer">
                <h5 className="copyrights">
                    &copy; 2023 Pritam Paul. All rights reserved
                </h5>
                <div className="logoImg">
                    <div className="logoText">
                        <h5>Designed &amp; Created by </h5>
                        <h3>Pritam Paul.</h3>
                    </div>
                    <img
                        src="./Assets/picture2-192.png"
                        alt=""
                        data-aos="zoom-in-left"
                    />
                </div>
            </section>
        </footer>
    );
};

export default Footer;
