import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PublicDisclosure from "./pages/PublicDisclosure/PublicDisclosure";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admission from "./pages/Admission/Admission";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import ThreeSFormula from "./pages/ThreeSFormula/ThreeSFormula";
import Blogs from "./pages/Blogs/Blogs";
import Chatbot from "./components/Chatbot/Chatbot";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const App = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotOpen(true);
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "visible";
    }, [pathname]);
  };
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="chatbot_container">
          {isChatbotOpen ? (
            <div className="chatbot">
              <Chatbot setIsChatbotOpen={setIsChatbotOpen} />
            </div>
          ) : (
            <button onClick={toggleChatbot} className="chatbot_btn">
              Chat with us
            </button>
          )}
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publicdisclosure" element={<PublicDisclosure />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/threesformula" element={<ThreeSFormula />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <div className={"social_links"}>
          <a
            href="https://www.facebook.com/greenschoolinternational/"
            className="social_link"
            target="_blank"
          >
            <FaFacebookF color="yellow" size={25} />
          </a>
          <a
            href="https://www.instagram.com/the_green_school_international?igsh=azAxbHdiMXQ3eTU="
            className="social_link"
            target="_blank"
          >
            <FaInstagram color="yellow" size={25} />
          </a>
          <a
            href="https://www.youtube.com/@thegreenschoolinternational"
            className="social_link"
            target="_blank"
          >
            <FaYoutube color="yellow" size={25} />
          </a>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
