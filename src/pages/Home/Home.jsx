import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

import homeaboutimg from "/assets/school_one.jpg";
import Footer from "../../components/Footer/Footer";
import discoverimg from "/assets/Home/discoverimg.jpeg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import icon1 from "/assets/icons/icon 1.svg";
import icon2 from "/assets/icons/icon 2.svg";
import icon3 from "/assets/icons/icon 3.svg";
import icon4 from "/assets/icons/icon 4.svg";
import icon5 from "/assets/icons/icon 5.svg";
import icon6 from "/assets/icons/icon 6.svg";
import SlidingBanner from "../../components/SlidingBanner/SlidingBanner";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import Highlights from "../../components/Home/Highlights";
import ContactUsBanner from "../../components/ContactUsBanner/ContactUsBanner";

const Home = () => {
  return (
    <>
      <div className={styles.marque}>
        <marquee behavior="" direction="" scrollamount="12">
          <span style={{ color: "red" }}>ANNOUNCEMENT: </span>Embracing a
          Transformative Journey: Formerly Shemford Futuristic School, We
          Proudly Unveil Our New Identity as The Green School International
        </marquee>
      </div>
      <SlidingBanner />
      <div className={styles.container}>
        <div className={styles.home_discovery} data-aos="fade-up" data-aos-once>
          <div className={styles.home_discovery_left}>
            <h2>Discover our School</h2>
            <p>
              Nestled near Guwahati, The Green School International features
              advanced facilities and top-tier sports infrastructure, reflecting
              our commitment to a holistic learning environment. Emphasizing
              sustainability, we integrate eco-friendly practices, instilling
              environmental responsibility in students.
              <br />
              <br /> Experience an exceptional education with well-equipped
              classrooms. Our commitment extends to an Astro Turf Football
              pitch, Volleyball Ground, Skating area, Basketball Court, Swimming
              Pools, Badminton Court, Table Tennis...
            </p>
            <div className={styles.home_discovery_read_more}>
              <Link to="/about">
                <Button>Read More</Button>
              </Link>
            </div>
          </div>
          <div className={styles.home_discovery_right}>
            <img src={"/assets/school_one.jpg"} loading="lazy" alt="" />
          </div>
        </div>

        <WhyChooseUs />

        <Highlights />

        <ContactUsBanner />
      </div>
    </>
  );
};

export default Home;
