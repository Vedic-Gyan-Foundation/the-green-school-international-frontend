import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function SocialLinks() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollingRef = useRef(null);

  useEffect(function () {
    function handleScroll() {
      setIsScrolling(true); // Hide the social_link on scroll

      if (scrollingRef.current) {
        clearTimeout(scrollingRef.current);
      }

      //   Show the social_links of no scroll activity
      scrollingRef.current = setTimeout(function () {
        setIsScrolling(false);
      }, 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(handleScroll);
      if (scrollingRef.current) {
        clearTimeout(scrollingRef.current);
      }
    };
  }, []);

  //   Hiding the social_link div if scrolling is true
  if (isScrolling) return null;

  return (
    <div className="social_links">
      <a
        href="https://www.facebook.com/greenschoolinternational/"
        className="social_link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF color="yellow" size={25} />
      </a>
      <a
        href="https://www.instagram.com/the_green_school_international?igsh=azAxbHdiMXQ3eTU="
        className="social_link"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram color="yellow" size={25} />
      </a>
      <a
        href="https://www.youtube.com/@thegreenschoolinternational"
        className="social_link"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube color="yellow" size={25} />
      </a>
      <a
        href="https://www.linkedin.com/company/the-green-school-international/"
        className="social_link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin color="yellow" size={25} />
      </a>
    </div>
  );
}

export default SocialLinks;
