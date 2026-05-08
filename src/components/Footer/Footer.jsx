import styles from "./Footer.module.css";
import logo from "/assets/logo_white.png";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Our School", to: "/about" },
  { label: "3S Formula", to: "/threesformula" },
  { label: "Sports Infra", to: "/sportsinfra" },
  { label: "Public Disclosure", to: "/publicdisclosure" },
  { label: "Admissions", to: "/admission" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blogs", to: "/blogs" },
  { label: "Transfer Certificates", to: "/transfer-certificates" },
  { label: "Contact Us", to: "/contact" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socials = [
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

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.bg_overlay} aria-hidden="true" />
        <div className={styles.glow_one} aria-hidden="true" />
        <div className={styles.glow_two} aria-hidden="true" />

        <div className={styles.footer_inner}>
          <div className={styles.footer_brand}>
            <img src={logo} alt="The Green School International" />
            <p className={styles.brand_tag}>
              Founded in 2018, The Green School International is situated amid
              the enchanting green hills on the outskirts of Guwahati. Our
              campus is carefully crafted to blend with Mother Nature — aligning
              learning with sustainability.
            </p>
            <div className={styles.social_row}>
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.social_btn}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footer_links}>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={styles.footer_navlink}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://paydirect.eduqfix.com/app/cc7fae31LEgC3KwoRYfopzX0IGSOFiTS236Et2re/9810/28628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer_navlink}
                >
                  Fee Payment ↗
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footer_contact_block}>
            <h3>Contact</h3>
            <div className={styles.footer_contact}>
              <div className={styles.icon_wrap}>
                <MdLocationOn size={18} />
              </div>
              <p>
                Mahapurush Madhabdev Path, Nalapara, Sarusajai, Guwahati-781040
              </p>
            </div>
            <a
              href="tel:+919387130617"
              className={`${styles.footer_contact} ${styles.footer_contact_link}`}
            >
              <div className={styles.icon_wrap}>
                <AiFillPhone size={16} />
              </div>
              <p>+91 9387130617 / +91 9856199105</p>
            </a>
            <a
              href="mailto:thegreenschoolinternational@gmail.com"
              className={`${styles.footer_contact} ${styles.footer_contact_link}`}
            >
              <div className={styles.icon_wrap}>
                <BsFillEnvelopeFill size={14} />
              </div>
              <p>thegreenschoolinternational@gmail.com</p>
            </a>

            <a
              href="https://maps.google.com/?q=The+Green+School+International+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directions_btn}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>
          © {year} The Green School International — All rights reserved.
          Designed &amp; developed by Vedic Gyan Foundation.
        </p>
      </div>
    </>
  );
};

export default Footer;
