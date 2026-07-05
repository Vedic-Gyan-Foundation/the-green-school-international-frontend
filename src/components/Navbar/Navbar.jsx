import { useEffect, useRef, useState } from "react";
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
import { FaRunning } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { SportsInfraUtil } from "../../utils/sports_infra";
import { sortAlphabetically } from "../../utils/helper";
import { downloadFile } from "../../utils/download";

const sportsInfraListItems = sortAlphabetically(
  SportsInfraUtil.getProcessedList(),
  "title"
);

// Single source of truth for external / document URLs (used by both the
// desktop dropdowns and the mobile drawer, so they can never drift apart).
const FEE_PAYMENT_URL =
  "https://paydirect.eduqfix.com/app/cc7fae31LEgC3KwoRYfopzX0IGSOFiTS236Et2re/9810/28628";
const FEE_STRUCTURE_PDF =
  "https://api.greenschoolguwahati.com/fee_structure/Fee_Structure_2026_27.pdf";
const FRC_APPROVAL_PDF =
  "https://api.greenschoolguwahati.com/fee_structure/Fee_Fixation_Order_The_GreenSchool_International.pdf";
const CANCELLATION_PDF = "./pdfs/Cancellation_Policy.pdf";

const Navbar = () => {
  const [navdropOpen, setNavdropOpen] = useState(false);
  // Which desktop dropdown is open: "sports" | "threeS" | "fee" | null.
  const [openMenu, setOpenMenu] = useState(null);
  // Which mobile accordion submenu is open (only one at a time).
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navRef = useRef(null);
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open, and reset the accordion.
  useEffect(() => {
    document.body.style.overflow = navdropOpen ? "hidden" : "";
    if (!navdropOpen) setOpenSubMenu(null);
    return () => {
      document.body.style.overflow = "";
    };
  }, [navdropOpen]);

  // Any route change closes every menu.
  useEffect(() => {
    setOpenMenu(null);
    setNavdropOpen(false);
  }, [location]);

  // Desktop dropdowns: Escape closes, and a click outside the nav closes.
  useEffect(() => {
    if (!openMenu) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    function onPointerDown(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [openMenu]);

  // Mobile drawer: move focus in on open, trap Tab, Escape closes.
  useEffect(() => {
    if (!navdropOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const getFocusable = () =>
      Array.from(
        drawer.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

    const focusable = getFocusable();
    (focusable[0] || drawer).focus();

    function onKeyDown(e) {
      if (e.key === "Escape") {
        closeDrawer();
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    drawer.addEventListener("keydown", onKeyDown);
    return () => drawer.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navdropOpen]);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }
  function openDesktopMenu(key) {
    clearCloseTimer();
    setOpenMenu(key);
  }
  function scheduleDesktopClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }
  function toggleDesktopMenu(key) {
    clearCloseTimer();
    setOpenMenu((cur) => (cur === key ? null : key));
  }
  // Close the open desktop dropdown when focus leaves the whole group.
  function handleGroupBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      scheduleDesktopClose();
    }
  }

  function closeDrawer() {
    setNavdropOpen(false);
    hamburgerRef.current?.focus();
  }

  function handleDownloadPDF(fileURL) {
    downloadFile(fileURL);
  }

  function toggleSubMenu(key) {
    setOpenSubMenu((cur) => (cur === key ? null : key));
  }

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`${styles.navbar_shell} ${scrolled ? styles.navbar_scrolled : ""}`}
      >
        {/* UTILITY STRIP (desktop only) — admin & transactional links */}
        <div className={styles.navbar_utility}>
          <nav className={styles.navbar_utility_nav} aria-label="Utility">
            <Link
              to="/publicdisclosure"
              aria-current={isActive("/publicdisclosure") ? "page" : undefined}
              className={`${styles.navbar_utility_link} ${isActive("/publicdisclosure") ? styles.utility_active : ""}`}
            >
              Public Disclosure
            </Link>
            <Link
              to="/transfer-certificates"
              aria-current={
                isActive("/transfer-certificates") ? "page" : undefined
              }
              className={`${styles.navbar_utility_link} ${isActive("/transfer-certificates") ? styles.utility_active : ""}`}
            >
              Transfer Certificates
            </Link>
            <Link
              to="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className={`${styles.navbar_utility_link} ${isActive("/contact") ? styles.utility_active : ""}`}
            >
              Contact
            </Link>
            <a
              href={FEE_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.utility_cta}
            >
              <HiOutlineCurrencyRupee aria-hidden="true" />
              Pay Fees
            </a>
          </nav>
        </div>

        {/* MAIN BAR */}
        <div ref={navRef} className={styles.navbar}>
          {/* LOGO */}
          <Link to="/" className={styles.navbar_logo} aria-label="Home">
            <img src={logo} alt="The Green School International" />
          </Link>

          {/* DESKTOP VIEW LINKS */}
          <nav className={styles.navbar_navlinks} aria-label="Primary">
            <ul className={styles.navbar_navlinks_ul}>
              <li>
                <Link
                  to="/"
                  aria-current={isActive("/") ? "page" : undefined}
                  className={`${styles.navbar_navlink} ${isActive("/") ? styles.active : ""}`}
                >
                  Home
                </Link>
              </li>

              {/* SPORTS INFRA */}
              <li
                className={styles.nav_group}
                onMouseEnter={() => openDesktopMenu("sports")}
                onMouseLeave={scheduleDesktopClose}
                onFocus={() => openDesktopMenu("sports")}
                onBlur={handleGroupBlur}
              >
                <span className={styles.nav_group_trigger}>
                  <Link
                    to="/sportsinfra"
                    aria-current={isActive("/sportsinfra") ? "page" : undefined}
                    className={`${styles.navbar_navlink} ${styles.nav_group_link} ${isActive("/sportsinfra") ? styles.active : ""}`}
                  >
                    Sports Infra
                  </Link>
                  <button
                    type="button"
                    className={styles.nav_disclosure}
                    aria-label="Sports Infra facilities menu"
                    aria-haspopup="true"
                    aria-expanded={openMenu === "sports"}
                    aria-controls="menu-sports"
                    onClick={() => toggleDesktopMenu("sports")}
                  >
                    <HiChevronDown
                      className={`${styles.chevron} ${openMenu === "sports" ? styles.chevron_open : ""}`}
                    />
                  </button>
                </span>

                <div
                  id="menu-sports"
                  className={`${styles.dropdown} ${styles.dropdown_scroll} ${styles.dropdown_wide} ${openMenu === "sports" ? styles.dropdown_open : ""}`}
                >
                  <div className={styles.dropdown_header}>
                    <span className={styles.dropdown_eyebrow}>
                      World-class facilities
                    </span>
                    <Link
                      to="/sportsinfra"
                      className={styles.dropdown_view_all}
                    >
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
                          <span
                            className={styles.dropdown_dot}
                            aria-hidden="true"
                          />
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
                  aria-current={isActive("/about") ? "page" : undefined}
                  className={`${styles.navbar_navlink} ${isActive("/about") ? styles.active : ""}`}
                >
                  Our School
                </Link>
              </li>

              {/* 3S FORMULA */}
              <li
                className={styles.nav_group}
                onMouseEnter={() => openDesktopMenu("threeS")}
                onMouseLeave={scheduleDesktopClose}
                onFocus={() => openDesktopMenu("threeS")}
                onBlur={handleGroupBlur}
              >
                <span className={styles.nav_group_trigger}>
                  <Link
                    to="/threesformula"
                    aria-current={
                      isActive("/threesformula") ? "page" : undefined
                    }
                    className={`${styles.navbar_navlink} ${styles.nav_group_link} ${isActive("/threesformula") ? styles.active : ""}`}
                  >
                    3S Formula
                  </Link>
                  <button
                    type="button"
                    className={styles.nav_disclosure}
                    aria-label="3S Formula menu"
                    aria-haspopup="true"
                    aria-expanded={openMenu === "threeS"}
                    aria-controls="menu-threeS"
                    onClick={() => toggleDesktopMenu("threeS")}
                  >
                    <HiChevronDown
                      className={`${styles.chevron} ${openMenu === "threeS" ? styles.chevron_open : ""}`}
                    />
                  </button>
                </span>
                <div
                  id="menu-threeS"
                  className={`${styles.dropdown} ${styles.dropdown_rich} ${openMenu === "threeS" ? styles.dropdown_open : ""}`}
                >
                  <div className={styles.dropdown_header}>
                    <span className={styles.dropdown_eyebrow}>
                      Three pillars · One mission
                    </span>
                    <Link
                      to="/threesformula"
                      className={styles.dropdown_view_all}
                    >
                      View all →
                    </Link>
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
                          <img
                            src="/assets/ThreeS/sports.svg"
                            alt=""
                            aria-hidden="true"
                            width={18}
                            height={18}
                          />
                        </span>
                        <span className={styles.dropdown_link_body}>
                          <span className={styles.dropdown_link_title}>
                            Sports
                          </span>
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
                          <img
                            src="/assets/ThreeS/namaste.svg"
                            alt=""
                            aria-hidden="true"
                            width={18}
                            height={18}
                          />
                        </span>
                        <span className={styles.dropdown_link_body}>
                          <span className={styles.dropdown_link_title}>
                            Sanskar
                          </span>
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
                          <img
                            src="/assets/ThreeS/go_green.svg"
                            alt=""
                            aria-hidden="true"
                            width={18}
                            height={18}
                          />
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
                  to="/admission"
                  aria-current={isActive("/admission") ? "page" : undefined}
                  className={`${styles.navbar_navlink} ${isActive("/admission") ? styles.active : ""}`}
                >
                  Admissions
                </Link>
              </li>

              {/* FEE STRUCTURE (disclosure only — no landing page) */}
              <li
                className={styles.nav_group}
                onMouseEnter={() => openDesktopMenu("fee")}
                onMouseLeave={scheduleDesktopClose}
                onFocus={() => openDesktopMenu("fee")}
                onBlur={handleGroupBlur}
              >
                <button
                  type="button"
                  className={styles.navbar_navlink}
                  aria-haspopup="true"
                  aria-expanded={openMenu === "fee"}
                  aria-controls="menu-fee"
                  onClick={() => toggleDesktopMenu("fee")}
                >
                  Fee Structure{" "}
                  <HiChevronDown
                    className={`${styles.chevron} ${openMenu === "fee" ? styles.chevron_open : ""}`}
                  />
                </button>

                <div
                  id="menu-fee"
                  className={`${styles.dropdown} ${styles.dropdown_rich} ${styles.dropdown_end} ${openMenu === "fee" ? styles.dropdown_open : ""}`}
                >
                  <div className={styles.dropdown_header}>
                    <span className={styles.dropdown_eyebrow}>
                      Download PDFs
                    </span>
                  </div>
                  <ul className={styles.dropdown_list}>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleDownloadPDF(FEE_STRUCTURE_PDF)}
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
                        onClick={() => handleDownloadPDF(FRC_APPROVAL_PDF)}
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
                        href={CANCELLATION_PDF}
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
                <Link
                  to="/gallery"
                  aria-current={isActive("/gallery") ? "page" : undefined}
                  className={`${styles.navbar_navlink} ${isActive("/gallery") ? styles.active : ""}`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  aria-current={isActive("/blogs") ? "page" : undefined}
                  className={`${styles.navbar_navlink} ${isActive("/blogs") ? styles.active : ""}`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* HAMBURGER MENU BUTTON */}
          <div className={styles.menu_btn_container}>
            <button
              ref={hamburgerRef}
              className={styles.menu_btn}
              onClick={() => setNavdropOpen((o) => !o)}
              aria-label={navdropOpen ? "Close menu" : "Open menu"}
              aria-expanded={navdropOpen}
              aria-controls="mobile-drawer"
            >
              <HiOutlineMenuAlt1 size={26} />
              <span className={styles.menu_btn_label}>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU BACKDROP */}
      <div
        className={`${styles.navbar_backdrop} ${
          navdropOpen ? styles.active : ""
        }`}
        onClick={closeDrawer}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        className={`${styles.navbar_drop} ${navdropOpen ? styles.active : ""}`}
      >
        <div className={styles.mobile_menu_header}>
          <div className={styles.mobile_brand}>
            <img src={logo} alt="Logo" className={styles.mobile_menu_logo} />
            <span className={styles.mobile_brand_tag}>
              Est. 2018 · Guwahati
            </span>
          </div>
          <button
            className={styles.close_btn}
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <HiX size={20} />
          </button>
        </div>

        <nav className={styles.mobile_nav} aria-label="Mobile primary">
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
                onClick={() => toggleSubMenu("sportsInfra")}
                className={`${styles.mobile_navlink} ${styles.mobile_navlink_btn}`}
                aria-expanded={openSubMenu === "sportsInfra"}
                aria-controls="mobile-sub-sports"
              >
                <span className={styles.mobile_link_inner}>
                  <span className={styles.mobile_link_icon}>
                    <FaRunning />
                  </span>
                  <span>Sports Infra</span>
                </span>
                <span
                  className={`${styles.mobile_chevron} ${
                    openSubMenu === "sportsInfra"
                      ? styles.mobile_chevron_open
                      : ""
                  }`}
                >
                  <HiChevronDown />
                </span>
              </button>
              {openSubMenu === "sportsInfra" && (
                <ul id="mobile-sub-sports" className={styles.mobile_submenu}>
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
                onClick={() => toggleSubMenu("feeStructure")}
                className={`${styles.mobile_navlink} ${styles.mobile_navlink_btn}`}
                aria-expanded={openSubMenu === "feeStructure"}
                aria-controls="mobile-sub-fee"
              >
                <span className={styles.mobile_link_inner}>
                  <span className={styles.mobile_link_icon}>
                    <HiOutlineCurrencyRupee />
                  </span>
                  <span>Fee Structure</span>
                </span>
                <span
                  className={`${styles.mobile_chevron} ${
                    openSubMenu === "feeStructure"
                      ? styles.mobile_chevron_open
                      : ""
                  }`}
                >
                  <HiChevronDown />
                </span>
              </button>
              {openSubMenu === "feeStructure" && (
                <ul id="mobile-sub-fee" className={styles.mobile_submenu}>
                  <li>
                    <button
                      type="button"
                      className={styles.mobile_submenu_btn}
                      onClick={() => handleDownloadPDF(FEE_STRUCTURE_PDF)}
                    >
                      Fee Structure 2026-27
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={styles.mobile_submenu_btn}
                      onClick={() => handleDownloadPDF(FRC_APPROVAL_PDF)}
                    >
                      FRC Fee approval 2026-2027
                    </button>
                  </li>
                  <li>
                    <a
                      href={CANCELLATION_PDF}
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
              href={FEE_PAYMENT_URL}
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
        aria-current={active ? "page" : undefined}
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
