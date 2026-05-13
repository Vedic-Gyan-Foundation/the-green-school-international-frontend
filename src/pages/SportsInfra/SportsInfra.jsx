import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import { SportsInfraUtil } from "../../utils/sports_infra";
import { sortAlphabetically } from "../../utils/helper";
import ContactUsBanner from "../../components/ContactUsBanner/ContactUsBanner";
import { fadeUp, fadeRight, fadeLeft, inViewProps } from "../../utils/motion";

const sportsInfraList = sortAlphabetically(
  SportsInfraUtil.getProcessedList(),
  "title"
);

function SportsInfra() {
  return (
    <>
      <Header title="Sports Infra" />
      <section className="max-w-[1300px] mx-auto px-5 sm:px-10 py-16 sm:py-20">
        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className="flex flex-col gap-3 max-w-3xl mb-12"
        >
          <span className="section-eyebrow">The Green School International</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-brand-900 text-balance">
            Experience unparalleled infrastructure where{" "}
            <span className="gradient-text">excellence meets innovation</span>.
          </h2>
          <p className="text-ink-500 text-base sm:text-lg leading-relaxed mt-2">
            From Olympic-grade aquatic facilities to premium astroturf grounds,
            every space at our 12,000+ sq.m campus is engineered to nurture the
            athlete in every Eco Champ.
          </p>
        </motion.div>

        {/* Contents Container */}
        <div className="flex flex-col gap-12 sm:gap-20">
          {sportsInfraList.map((item, index) => (
            <SportsInfraItem
              key={item.id}
              item={item}
              reverse={index % 2 === 1}
              number={index + 1}
            />
          ))}
        </div>
      </section>
      <ContactUsBanner />
    </>
  );
}

function SportsInfraItem({ item, reverse, number }) {
  return (
    <motion.article
      id={item.id}
      {...inViewProps}
      variants={fadeUp}
      className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 scroll-mt-nav`}
    >
      {/* Image */}
      <motion.div
        variants={reverse ? fadeRight : fadeLeft}
        className={`relative ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-elevated isolate">
          {item.descriptionImg ? (
            <img
              src={item.descriptionImg}
              alt={item.title}
              loading="lazy"
              className="w-full h-[260px] sm:h-[360px] object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.04]"
            />
          ) : (
            <div className="w-full h-[260px] sm:h-[360px] bg-brand-50 grid place-items-center text-brand-700 text-sm">
              Image coming soon
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
          {/* Floating chip with logo */}
          {item.titleLogo && (
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-3 rounded-2xl shadow-soft border border-brand-100 transition-transform duration-300 ease-out hover:-translate-y-0.5">
              <img
                src={item.titleLogo}
                alt={item.title}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
            </div>
          )}
        </div>
        {/* Decor blob */}
        <div className="hidden sm:block absolute -bottom-6 -left-6 w-40 h-40 bg-sun-300/40 blur-3xl rounded-full -z-10" />
      </motion.div>

      {/* Text */}
      <motion.div
        variants={reverse ? fadeLeft : fadeRight}
        className={`flex flex-col gap-4 ${reverse ? "lg:order-1" : ""}`}
      >
        <span className="font-display font-extrabold text-7xl leading-none gradient-text-sun opacity-25 select-none">
          {String(number).padStart(2, "0")}
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-900 leading-snug -mt-12">
          {item.title}
        </h3>
        <p className="text-ink-500 text-base sm:text-[1.05rem] leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </motion.article>
  );
}

export default SportsInfra;
