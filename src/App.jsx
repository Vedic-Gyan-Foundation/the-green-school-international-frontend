import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot/Chatbot";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const PublicDisclosure = lazy(() =>
  import("./pages/PublicDisclosure/PublicDisclosure")
);
const Admission = lazy(() => import("./pages/Admission/Admission"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const ThreeSFormula = lazy(() => import("./pages/ThreeSFormula/ThreeSFormula"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const TransferCertificates = lazy(() =>
  import("./pages/TransferCertificate/TransferCertificates")
);
const SportsInfra = lazy(() => import("./pages/SportsInfra/SportsInfra"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const TermsAndConditions = lazy(() =>
  import("./pages/TermsAndConditions/TermsAndConditions")
);
const ArticlePage = lazy(() => import("./pages/ArticlePage/ArticlePage"));

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
        <Suspense fallback={<Loader />}>
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
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route
              path="/transfer-certificates"
              element={<TransferCertificates />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
      {/* <!-- Social Links --> */}
      <SocialLinks />
    </>
  );
};

export default App;
