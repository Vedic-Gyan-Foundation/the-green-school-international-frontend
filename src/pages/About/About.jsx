import React from "react";
import styles from "./About.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import aboutmissionimg from "/assets/About/about_mission.jpeg";
import aboutvissionimg from "/assets/About/about_vission.jpeg";
import dummyimg from "/assets//Home/homeabout.jpg";
import principalimg from "/assets/About/principal.jpg";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

import logo from "/assets/logo.png";
import History from "../../components/About/History";
import ConceptOfGreenSchool from "../../components/About/ConceptOfGreenSchool";
import ContactUsBanner from "../../components/ContactUsBanner/ContactUsBanner";

const About = () => {
  return (
    <>
      <Header title="About Our School" />
      <div className={styles.about_container}>
        <div className={styles.aboutus} data-aos="fade-up" data-aos-once>
          <div className={styles.aboutus_head}>
            <h2>About us</h2>
          </div>
          <div className={styles.aboutus_content}>
            <div className={styles.aboutus_content_text}>
              <p>
                Nestled near Guwahati, The Green School International features
                advanced facilities and top-tier sports infrastructure,
                reflecting our commitment to a holistic learning environment.
                Emphasizing sustainability, we integrate eco-friendly practices,
                instilling environmental responsibility in students.
                <br />
                <br />
                Experience an exceptional education with well-equipped
                classrooms. Our commitment extends to an Astro Turf Football
                pitch, Volleyball Ground, Skating area, Basketball Court,
                Swimming Pools, Badminton Court, Table Tennis, Dance Floors, and
                Chess Lab. We take pride in offering premier sports
                infrastructure for our students&apos; physical well-being.
                <br />
                <br />
                Our commitment to holistic child development includes a focus on
                sports, promoting physical fitness, teamwork, discipline, and
                leadership. The Green School International is more than an
                institution; it&apos;s a hub for aspiring athletes and students
                seeking a comprehensive education. Embark on a journey where
                advanced facilities merge with unparalleled sports
                infrastructure. The Green School International in Guwahati is a
                commitment to excellence, where education and sustainability
                converge to shape conscientious global citizens.
              </p>
            </div>
            <div className={styles.aboutus_content_img}>
              <img src={logo} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <History />
        <ConceptOfGreenSchool />

        <div
          className={styles.mission_vission_container}
          data-aos="fade-up"
          data-aos-once
        >
          <div className={styles.border_one}></div>
          <div className={styles.border_two}></div>
          <div className={styles.about_mission}>
            <div className={styles.about_mission_text}>
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower children&apos;s growth by fostering
                physical vitality, nurturing creative intellects, and instilling
                a commitment to excellence in all their endeavors. Above all,
                our goal is to cultivate the happiness of every child.
              </p>
            </div>
          </div>

          <div className={styles.about_vission}>
            <div className={styles.about_vission_text}>
              <h3>Our Vision</h3>
              <p>
                {" "}
                Endeavor to hold the position of the most sought-after school in
                Guwahati.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.about_values} data-aos="fade-up" data-aos-once>
          <div className={styles.about_values_content}>
            <h2>OUR SANSKAR VALUES</h2>
            <p>
              With a strong belief in the saying "values are caught and not
              taught," The Green School International introduces the{" "}
              <b>Sanskar Classes</b> among its students from the very early
              years with the objective to instill in them the right values and
              virtues.
            </p>
            <p>
              <b>
                Based on the Core Values Sanskars to be followed by ECO Champs
              </b>{" "}
            </p>
            <ol style={{ paddingLeft: "1rem" }}>
              <li>Respect: "Samman " (सम्मान)</li>
              <li>Responsibility: " Kartavya " (कर्तव्य )</li>
              <li>Honesty: " Satyata/ Nishkapat " (सत्यता/ निष्कपट)</li>
              <li>Empathy: " Sahanubhuti " (सहानुभूति )</li>
              <li>Courage: "Saahas" (साहस)</li>
              <li>Gratitude: "Krutagnata" (कृतज्ञता)</li>
              <li>Cooperation: "Sahakara" (सहकार)</li>
              <li>Patience: " Dhairya " (धैर्य )</li>
              <li>Generosity: " Daya " (दया )</li>
              <li>Curiosity: "Jignasa" (जिज्ञासा)</li>
              <li>Perseverance: " Sthirta " (स्थिरता )</li>
              <li>Tolerance: " Sahishnuta " (सहिष्णुता )</li>
            </ol>
          </div>
        </div>

        <div className={styles.know_about_us_container}>
          <h2>Know About Us</h2>
          <div
            className={styles.about_wordfromprincipal}
            data-aos="fade-up"
            data-aos-once
          >
            <div className={styles.about_wordfromprincipal_text}>
              <div>
                <h3>About</h3>
                <h2>Sanjay Jha</h2>
                <p>Managing Trustee</p>
              </div>
              <p>
                Sanjay Jha, originally from Kharupetia, Assam, stands as the
                driving force behind turning the vision of "The Green School
                International" into a reality, providing full financial support
                to the entire project.
              </p>
              <p>
                Rooted in an educational background and influenced by his father
                Mr Kapilawashar Jha, a former Principal at “Kharupetia Adarsh
                Hindi Ucch Vidyalaya” , Sanjay Jha's passion for making a unique
                impact in the education sector is deeply ingrained. This
                familial legacy contributes to his profound understanding of the
                intricacies of education, fuelling his commitment to instigate
                positive transformations in the field.
              </p>
              <p>
                His pivotal commitment and financial support are foundational to
                the establishment of "The Green School International." His
                unwavering dedication to taking bold steps and making
                substantial investments plays a crucial role in driving an
                academic revolution. Sanjay Jha's visionary approach and
                resolute commitment to advancing education through substantial
                backing underscore his determination to bring about positive
                change in the academic landscape.
              </p>
            </div>
            <div className={styles.about_principal_img}>
              <img src="/assets/About/founder.jpeg" alt="" loading="lazy" />
            </div>
          </div>
          <div
            className={styles.about_wordfromprincipal}
            data-aos="fade-up"
            data-aos-once
          >
            <div className={styles.about_wordfromprincipal_text}>
              <div>
                <h3>About</h3>
                <h2>Jagajeet Sinha</h2>
                <p>Trustee (Operations)</p>
              </div>
              <p>
                The driving force behind The Green School International
                Guwahati, Jagajeet Sinha, not only serves as the Trustee
                overseeing all Operations but also embodies a deep-rooted
                passion for environmentalism. <br /> <br /> With a solid
                academic foundation in Agricultural and Environmental Sciences
                and 25 years of corporate experience across diverse roles,
                Jagajeet envisions a school that breaks traditional molds. His
                aspiration is to nurture Global Citizens while upholding our
                cherished Sanskars. A forward-thinking leader in education,
                Jagajeet adopts an assertive approach aligned with global
                standards, without compromising affordability. His innovative
                strategy revolves around academic excellence through Sports,
                Sanskar, and Sustainability. Furthermore, he aims to foster a
                school culture that prioritizes the well-being and happiness of
                both teachers and students
              </p>
            </div>
            <div className={styles.about_principal_img}>
              <img
                src={"/assets/About/jagajeet_pic.jpeg"}
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div
            className={styles.about_wordfromprincipal}
            data-aos="fade-up"
            data-aos-once
          >
            <div className={styles.about_wordfromprincipal_text}>
              <div>
                <h3>From the</h3>
                <h2>PRINCIPAL'S DESK</h2>
              </div>
              <p>
                "Education is the key to unlocking the human potential, enabling
                individuals to lead fulfilling lives and contribute to the
                well-being of society."
              </p>
              <p>Dear Eco Champs!</p>
              <p>
                Embrace each day with enthusiasm, for within it lies the
                potential for greatness. Your journey in our school is an
                opportunity to learn, grow and make an everlasting impact. Just
                like the caterpillar transforms into a butterfly, your struggles
                can lead to beautiful achievements. Seize every moment and let
                the pursuit of excellence guide your path. Embrace the journey,
                persevere through difficulties and watch yourself soar to new
                heights. Believe in your potential, for greatness lies within
                each one of you. May our actions today reflect the commitment to
                sustainability and environmental stewardship. Together, let's
                nurture a greener world for a greener future!
              </p>
              <div className={styles.about_signature}>
                <h3>MOUSUMI GANGULY</h3>
                <p>- Principal</p>
              </div>
            </div>
            <div className={styles.about_principal_img}>
              <img src={principalimg} alt="" loading="lazy" />
            </div>
          </div>
        </div>

        <ContactUsBanner />
      </div>
    </>
  );
};

export default About;
