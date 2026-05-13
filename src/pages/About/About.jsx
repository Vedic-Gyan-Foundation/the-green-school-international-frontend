import { motion } from "framer-motion";
import styles from "./About.module.css";
import Header from "../../components/Header/Header";
import principalimg from "/assets/About/principal.jpg";
import logo from "/assets/logo.png";
import History from "../../components/About/History";
import ConceptOfGreenSchool from "../../components/About/ConceptOfGreenSchool";
import ContactUsBanner from "../../components/ContactUsBanner/ContactUsBanner";
import { fadeUp, fadeRight, fadeLeft, inViewProps } from "../../utils/motion";

const sanskarValues = [
  ["Respect", "Samman", "सम्मान"],
  ["Responsibility", "Kartavya", "कर्तव्य"],
  ["Honesty", "Satyata", "सत्यता / निष्कपट"],
  ["Empathy", "Sahanubhuti", "सहानुभूति"],
  ["Courage", "Saahas", "साहस"],
  ["Gratitude", "Krutagnata", "कृतज्ञता"],
  ["Cooperation", "Sahakara", "सहकार"],
  ["Patience", "Dhairya", "धैर्य"],
  ["Generosity", "Daya", "दया"],
  ["Curiosity", "Jignasa", "जिज्ञासा"],
  ["Perseverance", "Sthirta", "स्थिरता"],
  ["Tolerance", "Sahishnuta", "सहिष्णुता"],
];

const profiles = [
  {
    eyebrow: "About",
    name: "Sanjay Jha",
    role: "Managing Trustee",
    image: "/assets/About/founder.jpeg",
    paragraphs: [
      "Sanjay Jha, originally from Kharupetia, Assam, stands as the driving force behind turning the vision of \"The Green School International\" into a reality, providing full financial support to the entire project.",
      "Rooted in an educational background and influenced by his father Mr Kapilawashar Jha, a former Principal at \"Kharupetia Adarsh Hindi Ucch Vidyalaya\", Sanjay Jha's passion for making a unique impact in the education sector is deeply ingrained.",
      "His pivotal commitment and financial support are foundational to the establishment of \"The Green School International.\" His unwavering dedication to taking bold steps and making substantial investments plays a crucial role in driving an academic revolution.",
    ],
  },
  {
    eyebrow: "About",
    name: "Jagajeet Sinha",
    role: "Trustee (Operations)",
    image: "/assets/About/jagajeet_pic.jpeg",
    paragraphs: [
      "The driving force behind The Green School International Guwahati, Jagajeet Sinha, not only serves as the Trustee overseeing all Operations but also embodies a deep-rooted passion for environmentalism.",
      "With a solid academic foundation in Agricultural and Environmental Sciences and 25 years of corporate experience across diverse roles, Jagajeet envisions a school that breaks traditional molds. His aspiration is to nurture Global Citizens while upholding our cherished Sanskars.",
      "A forward-thinking leader in education, Jagajeet adopts an assertive approach aligned with global standards, without compromising affordability. His innovative strategy revolves around academic excellence through Sports, Sanskar, and Sustainability.",
    ],
  },
  {
    eyebrow: "From the",
    name: "Principal's Desk",
    role: "Mousumi Ganguly · Principal",
    image: principalimg,
    quote:
      "Education is the key to unlocking human potential, enabling individuals to lead fulfilling lives and contribute to the well-being of society.",
    paragraphs: [
      "Dear Eco Champs!",
      "Embrace each day with enthusiasm, for within it lies the potential for greatness. Your journey in our school is an opportunity to learn, grow and make an everlasting impact. Just like the caterpillar transforms into a butterfly, your struggles can lead to beautiful achievements.",
      "Seize every moment and let the pursuit of excellence guide your path. Embrace the journey, persevere through difficulties and watch yourself soar to new heights. Believe in your potential, for greatness lies within each one of you. May our actions today reflect the commitment to sustainability and environmental stewardship. Together, let's nurture a greener world for a greener future!",
    ],
    signature: "MOUSUMI GANGULY",
    signatureRole: "— Principal",
  },
];

const About = () => {
  return (
    <>
      <Header title="About Our School" />
      <div className={styles.about_container}>
        {/* Intro */}
        <motion.section
          {...inViewProps}
          variants={fadeUp}
          className={styles.aboutus}
        >
          <div className={styles.aboutus_grid}>
            <div className={styles.aboutus_content_text}>
              <span className="section-eyebrow">Our School</span>
              <h2>
                A learning home in the{" "}
                <span className="gradient-text">green hills of Guwahati</span>.
              </h2>
              <p>
                Nestled near Guwahati, The Green School International features
                advanced facilities and top-tier sports infrastructure,
                reflecting our commitment to a holistic learning environment.
                Emphasizing sustainability, we integrate eco-friendly practices,
                instilling environmental responsibility in students.
              </p>
              <p>
                Experience an exceptional education with well-equipped
                classrooms. Our commitment extends to an Astro Turf Football
                pitch, Volleyball Ground, Skating area, Basketball Court,
                Swimming Pools, Badminton Court, Table Tennis, Dance Floors,
                and Chess Lab. We take pride in offering premier sports
                infrastructure for our students&apos; physical well-being.
              </p>
              <p>
                Our commitment to holistic child development includes a focus
                on sports, promoting physical fitness, teamwork, discipline,
                and leadership. The Green School International is more than an
                institution; it&apos;s a hub for aspiring athletes and students
                seeking a comprehensive education.
              </p>
            </div>

            <motion.div
              variants={fadeLeft}
              className={styles.aboutus_content_img}
            >
              <div className={styles.logo_card}>
                <img src={logo} alt="The Green School International" loading="lazy" />
                <div className={styles.logo_caption}>
                  <p>The Green School International</p>
                  <span>Guwahati · Est. 2018</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <History />
        <ConceptOfGreenSchool />

        {/* Mission & Vision */}
        <motion.section
          {...inViewProps}
          variants={fadeUp}
          className={styles.mission_vission_container}
        >
          <motion.div variants={fadeRight} className={styles.mv_card}>
            <div className={styles.mv_icon}>🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower children&apos;s growth by fostering physical vitality,
              nurturing creative intellects, and instilling a commitment to
              excellence in all their endeavors. Above all, our goal is to
              cultivate the happiness of every child.
            </p>
          </motion.div>

          <motion.div variants={fadeLeft} className={styles.mv_card_dark}>
            <div className={styles.mv_icon}>🌟</div>
            <h3>Our Vision</h3>
            <p>
              Endeavor to hold the position of the most sought-after school in
              Guwahati — a beacon of holistic, future-ready education for
              every Eco Champ.
            </p>
          </motion.div>
        </motion.section>

        {/* Sanskar Values */}
        <motion.section
          {...inViewProps}
          variants={fadeUp}
          className={styles.about_values}
        >
          <div className={styles.values_overlay} />
          <div className={styles.values_content}>
            <span className={styles.values_eyebrow}>Our Sanskar Values</span>
            <h2>
              Values are <em>caught</em>, not just taught.
            </h2>
            <p>
              The Green School International introduces{" "}
              <b>Sanskar Classes</b> from the very early years to instill in
              children the right values and virtues. The twelve core Sanskars
              guide every Eco Champ:
            </p>
            <div className={styles.values_grid}>
              {sanskarValues.map(([en, hi, sanskrit], i) => (
                <motion.div
                  key={en}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={styles.value_chip}
                >
                  <p className={styles.value_en}>{en}</p>
                  <p className={styles.value_hi}>
                    {hi}
                    <span> ({sanskrit})</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Leadership */}
        <section className={styles.know_about_us_container}>
          <div className={styles.know_about_header}>
            <span className="section-eyebrow">Our Leaders</span>
            <h2>Know about us</h2>
            <p>The vision, hands and heart behind The Green School International.</p>
          </div>
          {profiles.map((profile, idx) => (
            <motion.article
              key={profile.name}
              {...inViewProps}
              variants={fadeUp}
              className={`${styles.profile_card} ${
                idx % 2 === 0 ? styles.profile_left : styles.profile_right
              }`}
            >
              <div className={styles.profile_text}>
                <span className={styles.profile_eyebrow}>{profile.eyebrow}</span>
                <h2>{profile.name}</h2>
                <p className={styles.profile_role}>{profile.role}</p>
                {profile.quote && (
                  <blockquote className={styles.profile_quote}>
                    “{profile.quote}”
                  </blockquote>
                )}
                {profile.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {profile.signature && (
                  <div className={styles.profile_signature}>
                    <h3>{profile.signature}</h3>
                    <p>{profile.signatureRole}</p>
                  </div>
                )}
              </div>
              <div className={styles.profile_image_wrap}>
                <div className={styles.profile_image}>
                  <img src={profile.image} alt={profile.name} loading="lazy" />
                </div>
                <div className={styles.profile_image_glow} aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </section>

        <ContactUsBanner />
      </div>
    </>
  );
};

export default About;
