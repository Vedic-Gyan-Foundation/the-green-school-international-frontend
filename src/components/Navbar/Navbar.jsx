import { useState, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

const sportsInfraListItems = [
  "Astroturf Football Ground",
  "Astroturf Volley Ball Ground",
  "Basket Ball Ground",
  "Astroturf Box Cricket",
  "Skating",
  "Table Tennis",
  "Badminton",
  "Toddler Swimming Pool ( Nursery - UKG )",
  "Beginner's Swimming Pool (Class 1 - 4)",
  "Olympic-Sized Pool (Class 5 - 12)",
  "Taekwondo  Training Centre",
  "Karate Training Centre",
  "Chess Club",
  "Boys Dance Studio",
  "Girls Dance Studio",
];

const Navbar = () => {
  const [navdropOpen, setNavdropOpen] = useState(false);
  const [subMenuFeeStructureOpen, setSubMenuFeeStructureOpen] = useState(false);
  const [subMenuSportsInfraOpen, setSubMenuSportsInfraOpen] = useState(false);

  function handleDownloadPDF(fileURL) {
    const anchorElement = document.createElement("a");
    anchorElement.href = fileURL;
    anchorElement.target = "_blank";
    // anchorElement.download = fileURL.split("/").pop();
    anchorElement.rel = "noopener noreferrer"; // Security best practice
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
  function handleSubMenuToggle(subMenuFor) {
    if (subMenuFor === "feeStructure")
      setSubMenuFeeStructureOpen((curr) => !curr);

    if (subMenuFor === "sportsInfra")
      setSubMenuSportsInfraOpen((curr) => !curr);
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
            {/* SPORTS INFRA*/}
            <li className="relative group">
              <Link className="font-semibold text-sm">Sports Infra</Link>

              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap z-40 overflow-y-scroll hide-scrollbar">
                <ul className="flex flex-col ">
                  {sportsInfraListItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-stone-200 cursor-pointer text-xs rounded-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
            {/* Fee Structure */}
            <li className="relative group">
              <Link className="font-semibold text-sm">Fee Structure</Link>

              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap z-40">
                <ul className="flex flex-col *:text-xs">
                  <li
                    onClick={() =>
                      handleDownloadPDF(
                        "https://api.greenschoolguwahati.com/fee_structure/Fee_Structure_2024_25.pdf"
                      )
                    }
                    className="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-sm"
                  >
                    2024-2025 (Session)
                  </li>
                  <li
                    onClick={() =>
                      handleDownloadPDF(
                        "https://api.greenschoolguwahati.com/fee_structure/Proposed_Fee_Structure_2025_26.pdf"
                      )
                    }
                    className="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
                  >
                    2025-2026 (Session)
                  </li>
                  <li
                    onClick={() =>
                      handleDownloadPDF(
                        "https://api.greenschoolguwahati.com/fee_structure/Fee_Fixation_Order_The_GreenSchool_International.pdf"
                      )
                    }
                    className="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-b-lg"
                  >
                    Fee Fixation Order
                  </li>
                </ul>
              </div>
            </li>
            {/* <!-- Gallery --> */}
            <li>
              <Link to={"/gallery"} className={styles.navbar_navlink}>
                Gallery
              </Link>
            </li>
            {/* <!-- Blogs --> */}
            <li>
              <Link to={"/blogs"} className={styles.navbar_navlink}>
                Blogs
              </Link>
            </li>
            {/* <!-- Transfer Certificates --> */}
            <li>
              <Link
                className="font-semibold text-sm"
                to="/transfer-certificates"
              >
                Transfer Certificates
              </Link>
            </li>
            {/* <!-- Contact Us --> */}
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
            <Link to={"/"} className={styles.navbar_navlink}>
              Home
            </Link>
          </li>
          {/* SORTS INFRA -MOBILE VIEW */}
          <li>
            <button
              onClick={() => handleSubMenuToggle("sportsInfra")}
              className="font-semibold text-sm text-stone-900"
            >
              <span>Sports Infra</span>{" "}
              <span
                className={`${
                  subMenuSportsInfraOpen ? "text-red-700" : "text-[#08703D]"
                } text-lg text-center`}
              >
                {subMenuSportsInfraOpen ? "-" : "+"}
              </span>
            </button>
            {subMenuSportsInfraOpen && (
              <ul className="*:text-xs pt-2 px-3">
                {sportsInfraListItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </li>
          <li>
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
          <li>
            <button
              onClick={() => handleSubMenuToggle("feeStructure")}
              className="font-semibold text-sm text-stone-900"
            >
              <span>Fee Structure</span>{" "}
              <span
                className={`${
                  subMenuFeeStructureOpen ? "text-red-700" : "text-[#08703D]"
                } text-lg text-center`}
              >
                {subMenuFeeStructureOpen ? "-" : "+"}
              </span>
            </button>
            {subMenuFeeStructureOpen && (
              <ul className="*:text-xs pt-2 px-3">
                <li
                  onClick={() =>
                    handleDownloadPDF(
                      "https://api.greenschoolguwahati.com/fee_structure/Fee_Structure_2024_25.pdf"
                    )
                  }
                >
                  2024-2025 (Session)
                </li>
                <li
                  onClick={() =>
                    handleDownloadPDF(
                      "https://api.greenschoolguwahati.com/fee_structure/Proposed_Fee_Structure_2025_26.pdf"
                    )
                  }
                >
                  2025-2026 (Session) Fee Fixation Order
                </li>
                <li
                  onClick={() =>
                    handleDownloadPDF(
                      "https://api.greenschoolguwahati.com/fee_structure/Fee_Fixation_Order_The_GreenSchool_International.pdf"
                    )
                  }
                >
                  Fee Fixation Order
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
          {/* <!-- Transfer Certificates --> */}
          <li>
            <Link className="font-semibold text-sm" to="/transfer-certificates">
              Transfer Certificates
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
