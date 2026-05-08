import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import {
  HiChevronDown,
  HiOutlineDocumentArrowDown,
  HiOutlineSparkles,
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlinePhoto,
  HiOutlineNewspaper,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
  HiOutlineIdentification,
  HiOutlineCurrencyRupee,
} from "react-icons/hi2";
import { FaTrophy, FaSeedling, FaPrayingHands, FaRunning } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { SportsInfraUtil } from "../../utils/sports_infra";
import { sortAlphabetically } from "../../utils/helper";
import { downloadFile } from "../../utils/download";

const sportsInfraListItems = sortAlphabetically(
  SportsInfraUtil.getProcessedList(),
  "title"
);

const Navbar = () => {
  const [navdropOpen, setNavdropOpen] = useState(false);
  const [subMenuFeeStructureOpen, setSubMenuFeeStructureOpen] = useState(false);
  const [subMenuSportsInfraOpen, setSubMenuSportsInfraOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = navdropOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navdropOpen]);

  function handleDownloadPDF(fileURL) {
    downloadFile(fileURL);
  }

  function handleSubMenuToggle(subMenuFor) {
    if (subMenuFor === "feeStructure")
      setSubMenuFeeStructureOpen((c) => !c);
    if (subMenuFor === "sportsInfra")
      setSubMenuSportsInfraOpen((c) => !c);
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div
        className={`${styles.navbar} ${scrolled ? styles.navbar_scrolled : ""}`}
      >
        {/* LOGO */}
        <Link to="/" className={styles.navbar_logo} aria-label="Home">
          <img src={logo} alt="The Green School International" />
        </Link>

        {/* DESKTOP VIEW LINKS */}
        <div className={styles.navbar_navlinks}>
          <ul className={styles.navbar_navlinks_ul}>
            <li>
              <Link
                to="/"
                className={`${styles.navbar_navlink} ${isActive("/") ? styles.active : ""}`}
              >
                Home
              </Link>
            </li>

            {/* SPORTS INFRA*/}
            <li className="relative group">
              <Link
                to="/sportsinfra"
                className={`${styles.navbar_navlink} ${isActive("/sportsinfra") ? styles.active : ""}`}
              >
                Sports Infra <HiChevronDown className={styles.chevron} />
              </Link>

              <div
                className={`${styles.dropdown} ${styles.dropdown_scroll} ${styles.dropdown_wide}`}
              >
                <div className={styles.dropdown_header}>
                  <span className={styles.dropdown_eyebrow}>
                    World-class facilities
                  </span>
                  <Link to="/sportsinfra" className={styles.dropdown_view_all}>
                    View all →
                  </Link>
                </div>
                <ul className={styles.dropdown_list}>
                  {sportsInfraListItems.map((item, index) => (
                    <li key={index}>
                      <HashLink
                        to={`/sportsinfra#${item.id}`}
                        className={styles.dropdown_link}
                      >
                        <span className={styles.dropdown_dot} aria-hidden="true" />
                        {item.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/about"
                className={`${styles.navbar_navlink} ${isActive("/about") ? styles.active : ""}`}
              >
                Our School
              </Link>
            </li>

            <li className="relative group">
              <Link
                to="/threesformula"
                className={`${styles.navbar_navlink} ${isActive("/threesformula") ? styles.active : ""}`}
              >
                3S Formula <HiChevronDown className={styles.chevron} />
              </Link>
              <div className={`${styles.dropdown} ${styles.dropdown_rich}`}>
                <div className={styles.dropdown_header}>
                  <span className={styles.dropdown_eyebrow}>
                    Three pillars · One mission
                  </span>
                </div>
                <ul className={styles.dropdown_list}>
                  <li>
                    <HashLink
                      to="/threesformula#sports"
                      className={styles.dropdown_link_rich}
                    >
                      <span
                        className={`${styles.dropdown_icon} ${styles.dropdown_icon_brand}`}
                      >
                        <FaTrophy />
                      </span>
                      <span className={styles.dropdown_link_body}>
                        <span className={styles.dropdown_link_title}>Sports</span>
                        <span className={styles.dropdown_link_meta}>
                          Resilience · Teamwork
                        </span>
                      </span>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/threesformula#sanskar"
                      className={styles.dropdown_link_rich}
                    >
                      <span
                        className={`${styles.dropdown_icon} ${styles.dropdown_icon_sun}`}
                      >
                        <FaPrayingHands />
                      </span>
                      <span className={styles.dropdown_link_body}>
                        <span className={styles.dropdown_link_title}>Sanskar</span>
                        <span className={styles.dropdown_link_meta}>
                          Values · Wisdom
                        </span>
                      </span>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/threesformula#sustainibility"
                      className={styles.dropdown_link_rich}
                    >
                      <span
                        className={`${styles.dropdown_icon} ${styles.dropdown_icon_leaf}`}
                      >
                        <FaSeedling />
                      </span>
                      <span className={styles.dropdown_link_body}>
                        <span className={styles.dropdown_link_title}>
                          Sustainibility
                        </span>
                        <span className={styles.dropdown_link_meta}>
                          Reduce · Reuse · Recycle
                        </span>
                      </span>
                    </HashLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/publicdisclosure"
                className={`${styles.navbar_navlink} ${isActive("/publicdisclosure") ? styles.active : ""}`}
              >
                Public Disclosure
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className={`${styles.navbar_navlink} ${isActive("/admission") ? styles.active : ""}`}
              >
                Admissions
              </Link>
            </li>

            {/* Fee Structure */}
            <li className="relative group">
              <button type="button" className={styles.navbar_navlink}>
                Fee Structure <HiChevronDown className={styles.chevron} />
              </button>

              <div className={`${styles.dropdown} ${styles.dropdown_rich}`}>
                <div className={styles.dropdown_header}>
                  <span className={styles.dropdown_eyebrow}>
                    Download PDFs
                  </span>
                </div>
                <ul className={styles.dropdown_list}>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        handleDownloadPDF(
                          "https://api.greenschoolguwahati.com/fee_structure/Fee_Structure_2026_27.pdf"
                        )
                      }
                      className={styles.dropdown_link_rich}
                    >
                      <span
                        className={`${styles.dropdown_icon} ${styles.dropdown_icon_brand}`}
                      >
                        <HiOutlineDocumentArrowDown />
                      </span>
                      <span className={styles.dropdown_link_body}>
                        <span className={styles.dropdown_link_title}>
                          Fee Structure 2026-27
                        </span>
                        <span className={styles.dropdown_link_meta}>
                          PDF · Current academic session
                        </span>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        handleDownloadPDF(
                          "https://api.greenschoolguwahati.com/fee_structure/Fee_Fixation_Order_The_GreenSchool_International.pdf"
                        )
                      }
                      className={styles.dropdown_link_rich}
                    >
                      <span
                        className={`${styles.dropdown_icon} ${styles.dropdown_icon_sun}`}
                      >
                        <HiOutlineSparkles />
                      </span>
                      <span className={styles.dropdown_link_body}>
                        <span className={styles.dropdown_link_title}>
                          FRC Fee approval 2026-2027
                        </span>
                        <span className={styles.dropdown_link_meta}>
                          PDF · Official fee fixation order
                        </span>
                      </span>
                    </button>
                  </li>
                  <li>
                    <a
                      href="./pdfs/Cancellation_Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.dropdown_link_rich}
                    >
                      <span
                        className={`${styles.dropdown_icon} ${styles.dropdown_icon_leaf}`}
                      >
                        <HiOutlineDocumentArrowDown />
                      </span>
                      <span className={styles.dropdown_link_body}>
                        <span className={styles.dropdown_link_title}>
                          Cancellation Policy
                        </span>
                        <span className={styles.dropdown_link_meta}>
                          PDF · Refunds &amp; cancellations
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="https://paydirect.eduqfix.com/app/cc7fae31LEgC3KwoRYfopzX0IGSOFiTS236Et2re/9810/28628"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.navbar_navlink} ${styles.cta_link}`}
              >
                Fee Payment
              </a>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`${styles.navbar_navlink} ${isActive("/gallery") ? styles.active : ""}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className={`${styles.navbar_navlink} ${isActive("/blogs") ? styles.active : ""}`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navbar_navlink} ${isActive("/transfer-certificates") ? styles.active : ""}`}
                to="/transfer-certificates"
              >
                Transfer Certificates
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${styles.navbar_navlink} ${isActive("/contact") ? styles.active : ""}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* HAMBURGER MENU BUTTON */}
        <div className={styles.menu_btn_container}>
          <button
            className={styles.menu_btn}
            onClick={() => setNavdropOpen((o) => !o)}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt1 size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU BACKDROP */}
      <div
        className={`${styles.navbar_backdrop} ${
          navdropOpen ? styles.active : ""
        }`}
        onClick={() => setNavdropOpen(false)}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        className={`${styles.navbar_drop} ${navdropOpen ? styles.active : ""}`}
      >
        <div className={styles.mobile_menu_header}>
          <div className={styles.mobile_brand}>
            <img src={logo} alt="Logo" className={styles.mobile_menu_logo} />
            <span className={styles.mobile_brand_tag}>Est. 2018 · Guwahati</span>
          </div>
          <button
            className={styles.close_btn}
            onClick={() => setNavdropOpen(false)}
            aria-label="Close menu"
          >
            <HiX size={20} />
          </button>
        </div>

        <nav className={styles.mobile_nav}>
          <p className={styles.mobile_section_label}>Explore</p>
          <ul className={styles.mobile_links}>
            <MobileLink
              to="/"
              icon={<HiOutlineHome />}
              label="Home"
              active={isActive("/")}
              onClose={() => setNavdropOpen(false)}
            />

            {/* SPORTS INFRA */}
            <li>
              <button
                onClick={() => handleSubMenuToggle("sportsInfra")}
                className={`${styles.mobile_navlink} ${styles.mobile_navlink_btn}`}
                aria-expanded={subMenuSportsInfraOpen}
              >
                <span className={styles.mobile_link_inner}>
                  <span className={styles.mobile_link_icon}>
                    <FaRunning />
                  </span>
                  <span>Sports Infra</span>
                </span>
                <span
                  className={`${styles.mobile_chevron} ${
                    subMenuSportsInfraOpen ? styles.mobile_chevron_open : ""
                  }`}
                >
                  <HiChevronDown />
                </span>
              </button>
              {subMenuSportsInfraOpen && (
                <ul className={styles.mobile_submenu}>
                  <li className={styles.mobile_submenu_overview}>
                    <Link
                      to="/sportsinfra"
                      onClick={() => setNavdropOpen(false)}
                    >
                      View Sports Infra Overview →
                    </Link>
                  </li>
                  {sportsInfraListItems.map((item, index) => (
                    <li key={index}>
                      <HashLink
                        to={`/sportsinfra#${item.id}`}
                        onClick={() => setNavdropOpen(false)}
                      >
                        {item.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <MobileLink
              to="/about"
              icon={<HiOutlineAcademicCap />}
              label="Our School"
              active={isActive("/about")}
              onClose={() => setNavdropOpen(false)}
            />
            <MobileLink
              to="/threesformula"
              icon={<HiOutlineSparkles />}
              label="3S Formula"
              active={isActive("/threesformula")}
              onClose={() => setNavdropOpen(false)}
            />
            <MobileLink
              to="/admission"
              icon={<HiOutlineIdentification />}
              label="Admissions"
              active={isActive("/admission")}
              onClose={() => setNavdropOpen(false)}
            />

            {/* FEE STRUCTURE */}
            <li>
              <button
                onClick={() => handleSubMenuToggle("feeStructure")}
                className={`${styles.mobile_navlink} ${styles.mobile_navlink_btn}`}
                aria-expanded={subMenuFeeStructureOpen}
              >
                <span className={styles.mobile_link_inner}>
                  <span className={styles.mobile_link_icon}>
                    <HiOutlineCurrencyRupee />
                  </span>
                  <span>Fee Structure</span>
                </span>
                <span
                  className={`${styles.mobile_chevron} ${
                    subMenuFeeStructureOpen ? styles.mobile_chevron_open : ""
                  }`}
                >
                  <HiChevronDown />
                </span>
              </button>
              {subMenuFeeStructureOpen && (
                <ul className={styles.mobile_submenu}>
                  <li
                    onClick={() =>
                      handleDownloadPDF(
                        "https://api.greenschoolguwahati.com/fee_structure/Fee_Structure_2026_27.pdf"
                      )
                    }
                  >
                    Fee Structure 2026-27
                  </li>
                  <li
                    onClick={() =>
                      handleDownloadPDF(
                        "https://api.greenschoolguwahati.com/fee_structure/Fee_Fixation_Order_The_GreenSchool_International.pdf"
                      )
                    }
                  >
                    FRC Fee approval 2026-2027
                  </li>
                  <li>
                    <a
                      href="./pdfs/Cancellation_Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cancellation Policy
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <MobileLink
              to="/publicdisclosure"
              icon={<HiOutlineDocumentText />}
              label="Public Disclosure"
              active={isActive("/publicdisclosure")}
              onClose={() => setNavdropOpen(false)}
            />
            <MobileLink
              to="/gallery"
              icon={<HiOutlinePhoto />}
              label="Gallery"
              active={isActive("/gallery")}
              onClose={() => setNavdropOpen(false)}
            />
            <MobileLink
              to="/blogs"
              icon={<HiOutlineNewspaper />}
              label="Blogs"
              active={isActive("/blogs")}
              onClose={() => setNavdropOpen(false)}
            />
            <MobileLink
              to="/transfer-certificates"
              icon={<HiOutlineDocumentArrowDown />}
              label="Transfer Certificates"
              active={isActive("/transfer-certificates")}
              onClose={() => setNavdropOpen(false)}
            />
          </ul>

          <div className={styles.mobile_cta_block}>
            <p className={styles.mobile_section_label}>Get in touch</p>
            <a
              href="https://paydirect.eduqfix.com/app/cc7fae31LEgC3KwoRYfopzX0IGSOFiTS236Et2re/9810/28628"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobile_cta}
              onClick={() => setNavdropOpen(false)}
            >
              <HiOutlineCurrencyRupee size={18} />
              Pay Fees Online
            </a>
            <Link
              to="/contact"
              onClick={() => setNavdropOpen(false)}
              className={styles.mobile_cta_secondary}
            >
              <HiOutlineEnvelope size={16} />
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

function MobileLink({ to, icon, label, active, onClose }) {
  return (
    <li>
      <Link
        to={to}
        onClick={onClose}
        className={`${styles.mobile_navlink} ${active ? styles.mobile_active : ""}`}
      >
        <span className={styles.mobile_link_inner}>
          <span className={styles.mobile_link_icon}>{icon}</span>
          <span>{label}</span>
        </span>
      </Link>
    </li>
  );
}

export default Navbar;
