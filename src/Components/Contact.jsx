import React, { useState } from "react";
import axios from "axios";
import contactImg from "../Assets/contact/contact.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    // const click = () => toast("Wow so easy!");

    const reviewSend = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.post(
                "http://localhost:8080/api/send",

                {
                    name,
                    email,
                    msg,
                }
            );
            // console.log(data);
            toast.success("Sended Successfully!");
            setEmail("");
            setMsg("");
            setName("");
            setLoading(false);
        } catch (error) {
            toast.error("Can't send meaasge!");
            // console.log(error);
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     first;

    //     return () => {
    //         second;
    //     };
    // }, [third]);

    return (
        <>
            {/* <ToastContainer /> */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <section id="contact">
                <h2 className="heading" data-aos="fade-up">
                    Contact Me :
                </h2>
                {/* <h3>You can contact me here</h3> */}
                <div className="contact-container">
                    <aside>
                        <img
                            src={contactImg}
                            alt="Contact"
                            data-aos="fade-right"
                        />
                    </aside>
                    <main>
                        <form onSubmit={reviewSend}>
                            {/* <div className="nameBox">
                            <input type="text" name="fname" id="fname" />
                            <input type="text" name="lname" id="lname" />
                        </div> */}
                            <input
                                data-aos="fade-left"
                                data-aos-delay="300"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name hare ..."
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                required
                                value={name}
                            />
                            <input
                                data-aos="fade-left"
                                data-aos-delay="700"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email hare ..."
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                                required
                            />
                            <textarea
                                data-aos="fade-left"
                                data-aos-delay="1300"
                                name="desc"
                                id="desc"
                                cols="30"
                                rows="10"
                                placeholder="Enter your description hare ..."
                                onChange={(e) => {
                                    setMsg(e.target.value);
                                }}
                                value={msg}
                                required
                            />
                            <button
                                type="submit"
                                className={`${loading ? "disabledSubmit" : ""}`}
                                // data-aos="fade-left"
                            >
                                Submit
                            </button>
                        </form>
                    </main>
                </div>
            </section>
        </>
    );
};

export default Contact;
