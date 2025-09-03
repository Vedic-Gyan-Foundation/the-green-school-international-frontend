import { useState, useEffect } from "react";
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
import SocialLinks from "./components/SocialLinks/SocialLinks";
import TransferCertificates from "./pages/TransferCertificate/TransferCertificates";
import SportsInfra from "./pages/SportsInfra/SportsInfra";

const App = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "visible";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <BrowserRouter>
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
          <Route path="/sportsinfra" element={<SportsInfra />} />
          <Route path="/about" element={<About />} />
          <Route path="/threesformula" element={<ThreeSFormula />} />
          <Route path="/publicdisclosure" element={<PublicDisclosure />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route
            path="/transfer-certificates"
            element={<TransferCertificates />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <!-- Social Links --> */}
      <SocialLinks />
    </>
  );
};

export default App;
