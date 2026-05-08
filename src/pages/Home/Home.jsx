import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaTrophy, FaSeedling, FaPrayingHands } from "react-icons/fa";
import { MdOutlineSchool, MdGroups } from "react-icons/md";
import styles from "./Home.module.css";
import SlidingBanner from "../../components/SlidingBanner/SlidingBanner";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import Highlights from "../../components/Home/Highlights";
import ContactUsBanner from "../../components/ContactUsBanner/ContactUsBanner";
import Button from "../../components/Button/Button";
import { fadeUp, inViewProps } from "../../utils/motion";

const stats = [
  { value: "2018", label: "Founded", icon: MdOutlineSchool },
  { value: "12,000+", label: "Sq.M Campus", icon: FaSeedling },
  { value: "118", label: "Educators", icon: MdGroups },
  { value: "100%", label: "Class X & XII Result", icon: FaTrophy },
];

const pillars = [
  {
    title: "Sports",
    desc: "Astroturf grounds, Olympic-grade pools, and 15+ disciplines that build resilience and teamwork.",
    Icon: FaTrophy,
    href: "/threesformula#sports",
    color: "from-brand-700 to-brand-900",
  },
  {
    title: "Sanskar",
    desc: "Daily Sanskar classes that nurture twelve core values — from Samman to Sahishnuta.",
    Icon: FaPrayingHands,
    href: "/threesformula#sanskar",
    color: "from-sun-500 to-sun-700",
  },
  {
    title: "Sustainability",
    desc: "Eco-conscious curriculum, paperless classrooms, and a community that lives the 3 R's every day.",
    Icon: FaSeedling,
    href: "/threesformula#sustainibility",
    color: "from-brand-500 to-brand-800",
  },
];

const Home = () => {
  return (
    <>
      <SlidingBanner />

      <div className={styles.container}>
        {/* DISCOVER SECTION */}
        <motion.section
          {...inViewProps}
          variants={fadeUp}
          className={styles.home_discovery}
        >
          <div className={styles.home_discovery_left}>
            <span className="section-eyebrow">Discover · Est. 2018</span>
            <h2>
              A school where education{" "}
              <span className="gradient-text">grows naturally</span>.
            </h2>
            <p>
              Nestled near Guwahati, The Green School International features
              advanced facilities and top-tier sports infrastructure, reflecting
              our commitment to a holistic learning environment. Emphasizing
              sustainability, we integrate eco-friendly practices, instilling
              environmental responsibility in students.
            </p>
            <p>
              Experience an exceptional education with well-equipped classrooms
              — alongside an Astro Turf Football pitch, Volleyball Ground,
              Skating area, Basketball Court, Swimming Pools, Badminton Court,
              Table Tennis and more.
            </p>
            <div className={styles.home_discovery_actions}>
              <Link to="/about">
                <Button variant="brand">
                  Explore Our School <HiArrowLongRight />
                </Button>
              </Link>
              <Link to="/admission">
                <Button variant="ghost">Apply for Admission</Button>
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={styles.home_discovery_right}
          >
            <div className={styles.image_frame}>
              <img
                src="/assets/school_one.jpg"
                loading="lazy"
                alt="The Green School International campus"
              />
              <div className={styles.image_glow} aria-hidden="true" />
            </div>
            <div className={styles.image_badge}>
              <span className={styles.image_badge_dot} />
              <div>
                <p className={styles.image_badge_label}>CBSE Affiliated</p>
                <p className={styles.image_badge_value}>School Code 35575</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* STATS STRIP */}
        <motion.section
          {...inViewProps}
          variants={fadeUp}
          className={styles.stats_strip}
        >
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat_card}>
              <div className={styles.stat_icon}>
                <stat.icon />
              </div>
              <div>
                <p className={styles.stat_value}>{stat.value}</p>
                <p className={styles.stat_label}>{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.section>

        {/* 3S PILLARS */}
        <motion.section
          {...inViewProps}
          variants={fadeUp}
          className={styles.pillars_section}
        >
          <div className={styles.section_header}>
            <span className="section-eyebrow">The 3S Formula</span>
            <h2 className={styles.section_title}>
              Three pillars. One{" "}
              <span className="gradient-text">unified mission.</span>
            </h2>
            <p className={styles.section_lead}>
              Our learning blueprint balances physical strength, cultural
              wisdom, and ecological awareness — the three forces shaping every
              Eco Champ.
            </p>
          </div>

          <div className={styles.pillars_grid}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className={styles.pillar_card}
              >
                <div className={`${styles.pillar_icon} bg-gradient-to-br ${p.color}`}>
                  <p.Icon size={26} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link to={p.href} className={styles.pillar_link}>
                  Learn more <HiArrowLongRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <WhyChooseUs />

        <Highlights />

        <ContactUsBanner />
      </div>
    </>
  );
};

export default Home;
