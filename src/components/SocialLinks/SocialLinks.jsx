import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const links = [
  {
    href: "https://www.facebook.com/greenschoolinternational/",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/the_green_school_international?igsh=azAxbHdiMXQ3eTU=",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.youtube.com/@thegreenschoolinternational",
    label: "YouTube",
    Icon: FaYoutube,
  },
  {
    href: "https://www.linkedin.com/company/the-green-school-international/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
];

function SocialLinks() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollingRef = useRef(null);

  useEffect(function () {
    function handleScroll() {
      setIsScrolling(true);
      if (scrollingRef.current) clearTimeout(scrollingRef.current);
      scrollingRef.current = setTimeout(function () {
        setIsScrolling(false);
      }, 300);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollingRef.current) clearTimeout(scrollingRef.current);
    };
  }, []);

  if (isScrolling) return null;

  return (
    <div className="social_links">
      {links.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          className="social_link group"
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
        >
          <Icon
            className="text-sun-300 group-hover:text-white transition-colors duration-300"
            size={20}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
