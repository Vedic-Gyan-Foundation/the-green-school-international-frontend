import React, { useState, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../public/assets//logo.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

const feeStruturesCurrentFileUrl =
  "http://localhost:5173/pdf/Fee-structure-2024-25.pdf";
const feeStruturesFutureFileUrl =
  "http://localhost:5173/pdf/Proposed-Fee-Structure-2025-26.pdf";

const Navbar = () => {
  const [navdropOpen, setNavdropOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  function handleDownloadPDF(fileURL) {
    const anchorElement = document.createElement("a");
    anchorElement.href = fileURL;
    anchorElement.download = fileURL.split("/").pop();
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  }

  const navdropOpenHandler = () => {
    if (navdropOpen) {
      setNavdropOpen(false);
    } else {
      setNavdropOpen(true);
    }
  };

  // Hanlde SUB-MENU open (Dropdown-Open for Hamberger-Menu)
  function handleSubMenuToggle() {
    setSubMenuOpen((curr) => !curr);
  }

  return (
    <>
      <div className={styles.navbar}>
        {/* LOGO */}
        <div className={styles.navbar_logo}>
          <img src={logo} alt="" />
        </div>

        {/* DESKTOP VIEW LINKS */}
        <div className={styles.navbar_navlinks}>
          <ul>
            <li>
              <Link to={"/"} className={styles.navbar_navlink}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className={styles.navbar_navlink}>
                Our School
              </Link>
            </li>
            <li className={styles.subMenu_container}>
              <Link to={"/threesformula"} className={styles.navbar_navlink}>
                3S Formula
              </Link>
              <div className={styles.subMenu}>
                <ul>
                  <li>
                    <HashLink to="/threesformula#sports">Sports</HashLink>
                  </li>
                  <li>
                    <HashLink to="/threesformula#sanskar">Sanskar</HashLink>
                  </li>
                  <li>
                    <HashLink to="/threesformula#sustainibility">
                      Sustainibility
                    </HashLink>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className={styles.subMenu_container}>
                    <Link to={'/threesformula'} className={styles.navbar_navlink} >Fees Structure</Link>
                    <div className={styles.subMenu}>
                        <ul>
                            <li>
                            <HashLink to="/threesformula#sports">Admission Fees</HashLink>
                            </li>
                            <li>
                                <HashLink to="/threesformula#sanskar">Hostel Fees</HashLink>
                            </li>
                        </ul>

                    </div>
                </li> */}
            <li>
              <Link to={"/publicdisclosure"} className={styles.navbar_navlink}>
                Public Disclosure
              </Link>
            </li>
            <li>
              <Link to={"/admission"} className={styles.navbar_navlink}>
                Admissions
              </Link>
            </li>
            {/* FEE STRUCTURE */}
            <li className="relative group">
              <Link className="font-semibold text-sm">Fee Structure</Link>

              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap z-40">
                <ul className="flex flex-col">
                  <li
                    onClick={() =>
                      handleDownloadPDF(feeStruturesCurrentFileUrl)
                    }
                    className="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-t-lg"
                  >
                    2024-2025 (Session)
                  </li>
                  <li
                    onClick={() => handleDownloadPDF(feeStruturesFutureFileUrl)}
                    className="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-b-lg"
                  >
                    2025-2026 (Session)
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to={"/gallery"} className={styles.navbar_navlink}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to={"/blogs"} className={styles.navbar_navlink}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className={styles.navbar_navlink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* HAMBERGER MENU BUTTON */}
        <div className={styles.menu_btn_container}>
          <button className={styles.menu_btn} onClick={navdropOpenHandler}>
            <HiOutlineMenuAlt1 size={35} />
          </button>
        </div>
      </div>

      {/* MOBILE VIEW LINKS */}
      <div
        className={styles.navbar_drop}
        style={{ display: navdropOpen ? "block" : "none" }}
      >
        <ul>
          <li>
            {" "}
            <Link to={"/"} className={styles.navbar_navlink}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"} className={styles.navbar_navlink}>
              Our School
            </Link>
          </li>
          <li>
            <Link to={"/threesformula"} className={styles.navbar_navlink}>
              3S Formula
            </Link>
          </li>
          <li>
            <Link to={"/publicdisclosure"} className={styles.navbar_navlink}>
              Public Disclosure
            </Link>
          </li>
          <li>
            <Link to={"/admission"} className={styles.navbar_navlink}>
              Admissions
            </Link>
          </li>

          {/* FEE STRUCTURE -MOBILE VIEW */}
          {/* <li>
            <button
              
              className="flex items-center justify-between w-full px-4 py-2"
            >
              Fee Structure
              <span>{subMenuOpen ? "-" : "+"}</span>
            </button>
            {subMenuOpen && (
              <ul className="bg-gray-100 pl-6">
                <li>2024-2025 (Session)</li>
                <li>2025-2026 (Session)</li>
              </ul>
            )}
          </li> */}

          <li>
            <button
              onClick={handleSubMenuToggle}
              className="font-semibold text-sm text-stone-900"
            >
              <span>Fee Structure</span>{" "}
              <span
                className={`${
                  subMenuOpen ? "text-red-700" : "text-[#08703D]"
                } text-lg text-center`}
              >
                {subMenuOpen ? "-" : "+"}
              </span>
            </button>
            {subMenuOpen && (
              <ul className="*:text-xs pt-2 px-3">
                <li
                  onClick={() => handleDownloadPDF(feeStruturesCurrentFileUrl)}
                >
                  2024-2025 (Session)
                </li>
                <li
                  onClick={() => handleDownloadPDF(feeStruturesFutureFileUrl)}
                >
                  2025-2026 (Session)
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to={"/gallery"} className={styles.navbar_navlink}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to={"/blogs"} className={styles.navbar_navlink}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className={styles.navbar_navlink}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
