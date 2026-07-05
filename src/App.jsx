import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Chatbot from "./components/Chatbot/Chatbot";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Loader from "./components/Loader/Loader";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const PublicDisclosure = lazy(
  () => import("./pages/PublicDisclosure/PublicDisclosure")
);
const Admission = lazy(() => import("./pages/Admission/Admission"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const ThreeSFormula = lazy(() => import("./pages/ThreeSFormula/ThreeSFormula"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const TransferCertificates = lazy(
  () => import("./pages/TransferCertificate/TransferCertificates")
);
const SportsInfra = lazy(() => import("./pages/SportsInfra/SportsInfra"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./pages/TermsAndConditions/TermsAndConditions")
);
const ArticlePage = lazy(() => import("./pages/ArticlePage/ArticlePage"));

// Scrolls to top on route change (preserves hash navigation)
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

const App = () => {
  // Chatbot state — re-enable along with the JSX block below when wiring the
  // backend back in.
  // const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  // const toggleChatbot = () => setIsChatbotOpen(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "visible";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {/* Chatbot temporarily hidden until backend is wired up.
            Uncomment to re-enable the floating "Chat with us" button.
        <div className="chatbot_container">
          {isChatbotOpen ? (
            <div className="chatbot">
              <Chatbot setIsChatbotOpen={setIsChatbotOpen} />
            </div>
          ) : (
            <button
              onClick={toggleChatbot}
              className="chatbot_btn"
              aria-label="Open chatbot"
            >
              <IoChatbubbleEllipsesOutline size={20} />
              <span>Chat with us</span>
            </button>
          )}
        </div>
        */}
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
      <SocialLinks />
    </>
  );
};

export default App;
