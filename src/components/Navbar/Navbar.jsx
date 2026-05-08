import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi2";
import { HashLink } from "react-router-hash-link";
import { SportsInfraUtil } from "../../utils/sports_infra";
import { sortAlphabetically } from "../../utils/helper";

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
    const a = document.createElement("a");
    a.href = fileURL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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

              <div className={`${styles.dropdown} ${styles.dropdown_scroll}`}>
                <ul className={styles.dropdown_list}>
                  {sportsInfraListItems.map((item, index) => (
                    <li key={index}>
                      <HashLink
                        to={`/sportsinfra#${item.id}`}
                        className={styles.dropdown_link}
                      >
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
              <div className={styles.dropdown}>
                <ul className={styles.dropdown_list}>
                  <li>
                    <HashLink
                      to="/threesformula#sports"
                      className={styles.dropdown_link}
                    >
                      🏆 Sports
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/threesformula#sanskar"
                      className={styles.dropdown_link}
                    >
                      🪔 Sanskar
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/threesformula#sustainibility"
                      className={styles.dropdown_link}
                    >
                      🌱 Sustainibility
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

              <div className={styles.dropdown}>
                <ul className={styles.dropdown_list}>
                  <li
                    onClick={() =>
                      handleDownloadPDF(
                        "https://api.greenschoolguwahati.com/fee_structure/Fee_Structure_2026_27.pdf"
                      )
                    }
                  >
                    <span className={styles.dropdown_link}>
                      Fee Structure 2026-27
                    </span>
                  </li>
                  <li
                    onClick={() =>
                      handleDownloadPDF(
                        "https://api.greenschoolguwahati.com/fee_structure/Fee_Fixation_Order_The_GreenSchool_International.pdf"
                      )
                    }
                  >
                    <span className={styles.dropdown_link}>
                      FRC Fee approval 2026-2027
                    </span>
                  </li>
                  <li>
                    <a
                      href="./pdfs/Cancellation_Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.dropdown_link}
                    >
                      Cancellation Policy
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
          <img src={logo} alt="Logo" className={styles.mobile_menu_logo} />
          <button
            className={styles.close_btn}
            onClick={() => setNavdropOpen(false)}
            aria-label="Close menu"
          >
            <HiX size={22} />
          </button>
        </div>
        <ul className={styles.mobile_links}>
          <li>
            <Link
              to="/"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/") ? styles.mobile_active : ""}`}
            >
              Home
            </Link>
          </li>

          <li>
            <button
              onClick={() => handleSubMenuToggle("sportsInfra")}
              className={`${styles.mobile_navlink} ${styles.mobile_navlink_btn}`}
            >
              <Link
                to="/sportsinfra"
                onClick={(e) => e.stopPropagation()}
              >
                Sports Infra
              </Link>
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
          <li>
            <Link
              to="/about"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/about") ? styles.mobile_active : ""}`}
            >
              Our School
            </Link>
          </li>
          <li>
            <Link
              to="/threesformula"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/threesformula") ? styles.mobile_active : ""}`}
            >
              3S Formula
            </Link>
          </li>
          <li>
            <Link
              to="/publicdisclosure"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/publicdisclosure") ? styles.mobile_active : ""}`}
            >
              Public Disclosure
            </Link>
          </li>
          <li>
            <Link
              to="/admission"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/admission") ? styles.mobile_active : ""}`}
            >
              Admissions
            </Link>
          </li>

          <li>
            <button
              onClick={() => handleSubMenuToggle("feeStructure")}
              className={`${styles.mobile_navlink} ${styles.mobile_navlink_btn}`}
            >
              <span>Fee Structure</span>
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

          <li>
            <a
              href="https://paydirect.eduqfix.com/app/cc7fae31LEgC3KwoRYfopzX0IGSOFiTS236Et2re/9810/28628"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.mobile_navlink} ${styles.mobile_cta}`}
              onClick={() => setNavdropOpen(false)}
            >
              Fee Payment
            </a>
          </li>

          <li>
            <Link
              to="/gallery"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/gallery") ? styles.mobile_active : ""}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/blogs") ? styles.mobile_active : ""}`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/transfer-certificates"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/transfer-certificates") ? styles.mobile_active : ""}`}
            >
              Transfer Certificates
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setNavdropOpen(false)}
              className={`${styles.mobile_navlink} ${isActive("/contact") ? styles.mobile_active : ""}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
