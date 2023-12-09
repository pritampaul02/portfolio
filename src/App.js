import Navber from "./Components/Navber";
import Home from "./Components/Home";
import About from "./Components/About";
import Qualifications from "./Components/Qualifications";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import "./Styles/style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Components/Footer";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1200, delay: 50 });
        AOS.refresh();
    }, []);

    return (
        <>
            <Navber />
            <Home />
            <About />
            <Qualifications />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </>
    );
}

export default App;

// <Router>
//                 <Navber />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/#about" element={<About />} />
//                     <Route path="/#skills" element={<Skills />} />
//                     <Route path="/#works" element={<Works />} />
//                     <Route path="/#contact" element={<Contact />} />
//                 </Routes>
//             </Router>
